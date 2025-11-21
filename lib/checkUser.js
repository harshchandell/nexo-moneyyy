import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;

    try {
      const newUser = await db.user.create({
        data: {
          clerkUserId: user.id,
          name,
          imageUrl: user.imageUrl,
          email: user.emailAddresses[0].emailAddress,
        },
      });

      return newUser;
    } catch (createErr) {
      // Handle race where another process created the user between findUnique and create
      if (createErr?.code === "P2002") {
        const existingAfterRace = await db.user.findUnique({
          where: { clerkUserId: user.id },
        });
        if (existingAfterRace) return existingAfterRace;
      }
      // Re-throw for unexpected errors so callers can observe the failure
      throw createErr;
    }
  } catch (error) {
    console.log(error.message);
  }
};
