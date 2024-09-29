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
            day: 'September 30, 2024',
            bell: BellType.REGULAR,
            block: Block.B,
            testing: 'No Testing',
            announcement: null
        },
        {
            day: 'October 1, 2024',
            bell: BellType.PSAT,
            block: Block.A,
            testing: 'No Testing',
            announcement: 'PSAT/NMSQT for grade 10\nSchool schedule: Periods 1-5'
        },
        {
            day: 'October 2, 2024',
            bell: BellType.PSAT,
            block: Block.B,
            testing: 'No Testing',
            announcement: 'PSAT/NMSQT for grade 10\nSchool schedule: Periods 6-10'
        },
        {
            day: 'October 3, 2024',
            bell: null,
            block: null,
            testing: 'No Testing',
            announcement: 'School closed for observance of Rosh Hashanah'
        },
        {
            day: 'October 4, 2024',
            bell: null,
            block: null,
            testing: 'No Testing',
            announcement: 'School closed for observance of Rosh Hashanah',
        },
    ]
};

export default async function handler(req, res) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).json(WEEKLY_SCHEDULE);
};
