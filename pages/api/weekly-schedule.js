// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import rateLimit from "express-rate-limit";

import { logRequest } from './middleware';

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

see api/master-schedules.js for all bell schedules
*/

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.status(200).json({
    scheduleType: 'week',
    days: [
      {
        day: 'June 17, 2024',
        bell: null,
        block: null,
        testing: null,
        announcement: 'Eid al-Adha (No School)'
      },
      {
        day: 'June 18, 2024',
        bell: null,
        block: null,
        testing: 'US History Regents (Morning)\nGlobal History Regents (Afternoon)',
        announcement: null
      },
      {
        day: 'June 19, 2024',
        bell: null,
        block: null,
        testing: null,
        announcement: 'Juneteenth (No School)'
      },
      {
        day: 'June 20, 2024',
        bell: null,
        block: null,
        testing: 'Chemistry Regents (Afternoon)',
        announcement: 'Senior Graduation 11:00am at the United Palace Theatre'
      },
      {
        day: 'June 21, 2024',
        bell: null,
        block: null,
        testing: 'Geometry Regents (Morning)',
        announcement: 'All Grades and Senior Grades Due 8:00am'
      }
    ]
  });
}
