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
        day: 'June 3, 2024',
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
        testing: 'Science Testing',
        announcement: null
      },
      {
        day: 'June 4, 2024',
        bell: null,
        block: null,
        testing: null,
        announcement: 'Algebra I Regents, German Exam'
      },
      {
        day: 'June 5, 2024',
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
        block: 'A1',
        testing: 'Math, Music, Art & Technology Testing',
        announcement: null
      },
      {
        day: 'June 6, 2024',
        bell: null,
        block: null,
        testing: null,
        announcement: "Chancellor's Conference Day"
      },
      {
        day: 'June 7, 2024',
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
        block: 'B1',
        testing: 'WL, ELA, CS & SS Testing',
        announcement: null
      }
    ]
  });
}
