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
                day: 'Sept 7, 2024',
                bell: {
                    scheduleType: 'firstweek',
                    scheduleName: 'First Week Schedule',
                    schedule: [
                      {
                        name: 'Before Homeroom',
                        startTime: '7:30',
                        duration: 60
                      },
                      {
                        name: 'Homeroom',
                        startTime: '8:30',
                        duration: 30
                      },
                      {
                        name: 'Before Period 1',
                        startTime: '9:00',
                        duration: 5
                      },
                      {
                        name: 'Period 1',
                        startTime: '9:05',
                        duration: 30
                      },
                      {
                        name: 'Before Period 2',
                        startTime: '9:35',
                        duration: 4
                      },
                      {
                        name: 'Period 2',
                        startTime: '9:40',
                        duration: 30
                      },
                      {
                        name: 'Before Period 3',
                        startTime: '10:10',
                        duration: 5
                      },
                      {
                        name: 'Period 3',
                        startTime: '10:15',
                        duration: 30
                      },
                      {
                        name: 'Before Period 4',
                        startTime: '10:45',
                        duration: 5
                      },
                      {
                        name: 'Period 4',
                        startTime: '10:50',
                        duration: 30
                      },
                      {
                        name: 'Before Period 5',
                        startTime: '11:20',
                        duration: 5
                      },
                      {
                        name: 'Period 5',
                        startTime: '11:25',
                        duration: 30
                      },
                      {
                        name: 'Before Period 6',
                        startTime: '11:55',
                        duration: 5
                      },
                      {
                        name: 'Period 6',
                        startTime: '12:00',
                        duration: 30
                      },
                      {
                        name: 'Before Period 7',
                        startTime: '12:30',
                        duration: 5
                      },
                      {
                        name: 'Period 7',
                        startTime: '12:35',
                        duration: 30
                      },
                      {
                        name: 'Before Period 8',
                        startTime: '13:05',
                        duration: 5
                      },
                      {
                        name: 'Period 8',
                        startTime: '13:10',
                        duration: 30
                      },
                      {
                        name: 'Before Period 9',
                        startTime: '13:40',
                        duration: 5
                      },
                      {
                        name: 'Period 9',
                        startTime: '13:45',
                        duration: 30
                      },
                      {
                        name: 'Before Period 10',
                        startTime: '14:15',
                        duration: 5
                      },
                      {
                        name: 'Period 10',
                        startTime: '14:20',
                        duration: 30
                      }
                    ]
                  },
                block: 'A',
                testing: 'No Testing',
                announcement: 'First day of school!'
            },
            {
                day: 'Sept 8, 2024',
                bell: {
                    scheduleType: 'regular',
                    scheduleName: 'Regular Schedule',
                    schedule: [
                      {
                        name: 'Before School',
                        startTime: '0:00',
                        duration: 420
                      },
                      {
                        name: 'Before Period 1',
                        startTime: '7:00',
                        duration: 60
                      },
                      {
                        name: 'Period 1',
                        startTime: '8:00',
                        duration: 41
                      },
                      {
                        name: 'Before Period 2',
                        startTime: '8:41',
                        duration: 4
                      },
                      {
                        name: 'Period 2',
                        startTime: '8:45',
                        duration: 41
                      },
                      {
                        name: 'Before Period 3',
                        startTime: '9:26',
                        duration: 5
                      },
                      {
                        name: 'Period 3',
                        startTime: '9:31',
                        duration: 44
                      },
                      {
                        name: 'Before Period 4',
                        startTime: '10:15',
                        duration: 5
                      },
                      {
                        name: 'Period 4',
                        startTime: '10:20',
                        duration: 41
                      },
                      {
                        name: 'Before Period 5',
                        startTime: '11:01',
                        duration: 5
                      },
                      {
                        name: 'Period 5',
                        startTime: '11:06',
                        duration: 41
                      },
                      {
                        name: 'Before Period 6',
                        startTime: '11:47',
                        duration: 5
                      },
                      {
                        name: 'Period 6',
                        startTime: '11:52',
                        duration: 41
                      },
                      {
                        name: 'Before Period 7',
                        startTime: '12:33',
                        duration: 5
                      },
                      {
                        name: 'Period 7',
                        startTime: '12:38',
                        duration: 41
                      },
                      {
                        name: 'Before Period 8',
                        startTime: '13:19',
                        duration: 5
                      },
                      {
                        name: 'Period 8',
                        startTime: '13:24',
                        duration: 41
                      },
                      {
                        name: 'Before Period 9',
                        startTime: '14:05',
                        duration: 4
                      },
                      {
                        name: 'Period 9',
                        startTime: '14:09',
                        duration: 41
                      },
                      {
                        name: 'Before Period 10',
                        startTime: '14:50',
                        duration: 4
                      },
                      {
                        name: 'Period 10',
                        startTime: '14:54',
                        duration: 41
                      },
                      {
                        name: 'After School',
                        startTime: '15:35',
                        duration: 504
                      }
                    ]
                  },
                block: 'B',
                testing: 'No Testing',
                announcement: null
            },
        ]
    });
}
