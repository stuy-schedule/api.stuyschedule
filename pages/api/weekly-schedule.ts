// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import rateLimit from "express-rate-limit";

import { logRequest } from './middleware';
import BellType from 'schema/master-schedules';
import { Schedule, Block } from 'schema/schema';

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
*/

const WEEKLY_SCHEDULE: Schedule = {
    scheduleType: 'week',
    days: [
        {
            day: 'November 4, 2024',
            bell: BellType.REGULAR,
            block: Block.A1,
            testing: 'Science Testing',
            announcement: null,
        },
        {
            day: 'November 5, 2024',
            bell: null,
            block: null,
            testing: 'No Testing',
            announcement: 'Election Day',
        },
        {
            day: 'November 6, 2024',
            bell: BellType.REGULAR,
            block: Block.B1,
            testing: 'No Testing',
            announcement: 'AMC Exam',
        },
        {
            day: 'November 7, 2024',
            bell: BellType.REGULAR,
            block: Block.A2,
            testing: 'Math, Music, Art, and Technology Testing',
            announcement: null,
        },
        {
            day: 'November 8, 2024',
            bell: BellType.REGULAR,
            block: Block.B2,
            testing: 'WL, ELA, CS, and SS Testing',
            announcement: null
        },
    ]
};

export default async function handler(req, res) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).json(WEEKLY_SCHEDULE);
};
