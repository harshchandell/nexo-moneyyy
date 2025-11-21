import { clerkClient } from "@clerk/nextjs/server";
import { db } from "../lib/prisma";

async function main() {
  if (!process.env.CLERK_SECRET_KEY) {
    console.error("CLERK_SECRET_KEY is required in environment to run this script.");
    process.exit(1);
  }

  const users = await db.user.findMany({ where: { clerkUserId: null } });
  console.log(`Found ${users.length} DB users without clerkUserId`);

  for (const user of users) {
    if (!user.email) {
      console.warn(`Skipping id=${user.id} (no email)`);
      continue;
    }

    try {
      const matches = await clerkClient.users.getUserList({ emailAddress: user.email });

      if (!matches || matches.length === 0) {
        console.warn(`No Clerk user found for email=${user.email} (db id=${user.id})`);
        continue;
      }

      if (matches.length > 1) {
        console.warn(`Multiple Clerk users found for email=${user.email} — skipping (db id=${user.id})`);
        continue;
      }

      const clerkUser = matches[0];
      await db.user.update({ where: { id: user.id }, data: { clerkUserId: clerkUser.id } });
      console.log(`Updated user id=${user.id} -> clerkUserId=${clerkUser.id}`);
    } catch (err) {
      console.error(`Error looking up ${user.email}:`, err?.message || err);
    }
  }
}

main().then(() => {
  console.log("Backfill complete");
  process.exit(0);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
