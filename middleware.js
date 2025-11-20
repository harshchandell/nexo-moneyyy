
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Routes that require the user to be signed in
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

const middleware = clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // If user not signed in and trying to access a protected route → send to sign-in
  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  // Otherwise allow the request
  return NextResponse.next();
});

export default middleware;

// Run middleware for app routes and APIs, but skip static files and _next assets
export const config = {
  matcher: [
    // All routes except static files and _next assets
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // API and TRPC routes
    "/(api|trpc)(.*)",
  ],
};
