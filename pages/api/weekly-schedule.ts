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
            day: 'December 2, 2024',
            bell: BellType.REGULAR,
            block: Block.A,
            testing: 'No Testing',
            announcement: null,
        },
        {
            day: 'December 3, 2024',
            bell: BellType.EXTENDED_HOMEROOM,
            block: Block.B1,
            testing: 'Science Testing',
            announcement: 'Homeroom Activity',
        },
        {
            day: 'December 4, 2024',
            bell: BellType.CONFERENCE,
            block: Block.A1,
            testing: 'WL, ELA, and Health Testing',
            announcement: null,
        },
        {
            day: 'December 5, 2024',
            bell: null,
            block: null,
            testing: 'Math, Music, and Art Testing',
            announcement: 'Spanish Honor Society Induction Ceremony – 4:00pm',
        },
        {
            day: 'December 6, 2024',
            bell: null,
            block: null,
            testing: 'CS, SS, and Testing',
            announcement: 'End of MP2\nChoral Hoiday Concert and Art Show - 6:00pm',
        },
    ]
};

export default async function handler(req, res) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).json(WEEKLY_SCHEDULE);
};
