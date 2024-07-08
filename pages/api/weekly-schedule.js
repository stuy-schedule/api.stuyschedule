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

if there is school but no block make the block: 'N/A'
*/

export default async function handler(req, res) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).json({
        scheduleType: 'week',
        days: [
            {
                day: 'June 7, 2024',
                bell: null,
                block: null,
                testing: 'No Testing',
                announcement: 'Have a great summer!'
            },
            {
                day: 'July 8, 2024',
                bell: null,
                block: null,
                testing: 'No Testing',
                announcement: 'Have a great summer!'
            },
            {
                day: 'July 9, 2024',
                bell: null,
                block: null,
                testing: 'No Testing',
                announcement: 'Have a great summer!'
            },
            {
                day: 'July 10, 2024',
                bell: null,
                block: null,
                testing: 'No Testing',
                announcement: 'Have a great summer!'
            },
            {
                day: 'July 11, 2024',
                bell: null,
                block: null,
                testing: 'No Testing',
                announcement: 'Have a great summer!'
            },
            {
                day: 'July 12, 2024',
                bell: null,
                block: null,
                testing: 'No Testing',
                announcement: 'Have a great summer!'
            },
            {
                day: 'July 13, 2024',
                bell: null,
                block: null,
                testing: 'No Testing',
                announcement: 'Have a great summer!'
            },
        ]
    });
}
