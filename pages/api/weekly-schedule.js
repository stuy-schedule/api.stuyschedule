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
                day: 'June 24, 2024',
                bell: null,
                block: null,
                testing: 'Algebra II Regents (Morning)\nLOTE (Afternoon)',
                announcement: null
            },
            {
                day: 'June 25, 2024',
                bell: null,
                block: null,
                testing: 'Physics Regents (Morning)',
                announcement: null
            },
            {
                day: 'June 26, 2024',
                bell: {
                    scheduleType: 'homeroom',
                    scheduleName: 'Homeroom Schedule',
                    schedule: [
                        {
                            name: 'Before Homeroom',
                            startTime: '8:15',
                            duration: 60
                        },
                        {
                            name: 'Homeroom',
                            startTime: '9:15',
                            duration: 105
                        },
                    ]
                },
                block: 'N/A',
                testing: 'No Testing',
                announcement: 'Last Day of School\nNon-Attendance Day for non-Seniors\nSeniors Pick up Diplomas at Homeroom\nDistribution of Report Cards (Electronically)'
            },
            {
                day: 'June 27, 2024',
                bell: null,
                block: null,
                testing: 'No Testing',
                announcement: null
            },
            {
                day: 'June 28, 2024',
                bell: null,
                block: null,
                testing: 'No Testing',
                announcement: 'Last Day for 10 Month Supervisors, School Counselors & Secretaries'
            }
        ]
    });
}
