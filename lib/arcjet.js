
import arcjet, { tokenBucket } from "@arcjet/next";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"], // Track per Clerk user
  rules: [
    // Rate limiting for actions like transaction creation
    tokenBucket({
      mode: "LIVE",
      refillRate: 10, // 10 requests
      interval: 3600, // per hour
      capacity: 10,   // max burst
    }),
  ],
});

export default aj;
