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
            day: 'December 16, 2024',
            bell: BellType.REGULAR,
            block: Block.A,
            testing: 'Science Testing',
            announcement: null,
        },
        {
            day: 'December 17, 2024',
            bell: BellType.REGULAR,
            block: Block.B1,
            testing: 'Science Testing',
            announcement: 'Report Card Distribution (electronically)',
        },
        {
            day: 'December 18, 2024',
            bell: BellType.CONFERENCE,
            block: Block.A1,
            testing: 'WL, ELA, and Health Testing',
            announcement: null,
        },
        {
            day: 'December 19, 2024',
            bell: BellType.REGULAR,
            block: Block.B2,
            testing: 'Math, Music, and Art Testing',
            announcement: 'Holiday sing-along periods 2 and 7 on the first floor lobby',
        },
        {
            day: 'December 20, 2024',
            bell: BellType.REGULAR,
            block: Block.A2,
            testing: 'CS, SS, and Technology Testing',
            announcement: 'Holiday sing-along periods 1, 2, 4, 5, and after school',
        },
    ]
};

export default async function handler(req, res) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).json(WEEKLY_SCHEDULE);
};
