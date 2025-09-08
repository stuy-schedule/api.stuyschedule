// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import rateLimit from "express-rate-limit";

import { logRequest } from "./middleware";
import BellType from "schema/master-schedules";
import { Schedule, Block } from "schema/schema";

// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 20, // limit each IP to 100 requests per windowMs
//     message: "Too many requests from this IP, please try again after 15 minutes"
// });

/*
IMPORTANT IF FILLING OUT THE JSON
scheduleType, days, day, and testing will NEVER BE null.

bell name is: scheduletype_schedule
scheduletype: regular, conference, homeroom

see api/master-schedules.ts for all bell schedules

if there is school but no block make the block: 'N/A'

if there is no school make the bell & block to null.
*/

const WEEKLY_SCHEDULE: Schedule = {
  scheduleType: "week",
  days: [
    {
      day: "September 8, 2025",
      bell: BellType.REGULAR,
      block: Block.A,
      testing: "No Testing",
      announcement: null,
    },

    {
      day: "September 9, 2025",
      bell: BellType.REGULAR,
      block: Block.B,
      testing: "No Testing",
      announcement: null,
    },

    {
      day: "September 10, 2025",
      bell: BellType.REGULAR,
      block: Block.A1,
      testing: "No Testing",
      announcement: null,
    },

    {
      day: "September 11, 2025",
      bell: BellType.REGULAR,
      block: Block.B1,
      testing: "No Testing",
      announcement: null,
    },

    {
      day: "September 12, 2025",
      bell: BellType.REGULAR,
      block: Block.A2,
      testing: "No Testing",
      announcement: null,
    },
  ],
};

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.status(200).json(WEEKLY_SCHEDULE);
}
