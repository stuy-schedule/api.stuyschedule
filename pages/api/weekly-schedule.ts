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
            day: 'October 21, 2024',
            bell: BellType.REGULAR,
            block: Block.B1,
            testing: 'Science Testing',
            announcement: null,
        },
        {
            day: 'October 22, 2024',
            bell: BellType.REGULAR,
            block: Block.A1,
            testing: 'WL, ELA, and Health Testing',
            announcement: null,
        },
        {
            day: 'October 23, 2024',
            bell: BellType.REGULAR,
            block: Block.B2,
            testing: 'Math, Music, and Art Testing',
            announcement: null,
        },
        {
            day: 'October 24, 2024',
            bell: BellType.REGULAR,
            block: Block.A2,
            testing: 'CS, SS, and Technology Testing',
            announcement: null,
        },
        {
            day: 'October 25, 2024',
            bell: {
                scheduleType: 'special',
                scheduleName: 'Special Schedule',
                schedule: [
                    {
                        name: 'Before School Opens',
                        startTime: '6:30',
                        duration: 60
                    },
                    {
                        name: 'Breakfast for Juniors',
                        startTime: '7:30',
                        duration: 45
                    },
                    {
                        name: 'Report to Testing Rooms',
                        startTime: '8:15',
                        duration: 45
                    },
                    {
                        name: 'PSAT',
                        startTime: '8:45',
                        duration: 195
                    },
                    {
                        name: 'Lunch',
                        startTime: '12:00',
                        duration: 50
                    },
                    {
                        name: 'Before Career Fair',
                        startTime: '12:50',
                        duration: 4
                    },
                    {
                        name: 'Career Fair',
                        startTime: '12:54',
                        duration: 116
                    },
                    {
                        name: 'After School',
                        startTime: '14:50',
                        duration: 180
                    }
                ]
            },
            block: Block.B,
            testing: 'No Testing',
            announcement: 'Morning PSAT for Juniors\nAfternoon Career Fair\nSTC Fall Musical',
        },
    ]
};

export default async function handler(req, res) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).json(WEEKLY_SCHEDULE);
};
