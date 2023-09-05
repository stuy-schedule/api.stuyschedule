// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/*
IMPORTANT IF FILLING OUT THE JSON
scheduleType, days, day, and testing will NEVER BE null.

bell name is: scheduletype_schedule
scheduletype: regular, conference, homeroom

see api/master-schedules.js for all bell schedules
*/

export default function handler(req, res) {
  res.status(200).json({
    scheduleType: 'week',
    days: [
      {
        day: 'September 7, 2023',
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
        announcement: null
      },
      {
        day: 'September 8, 2023',
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
        block: 'B',
        testing: 'No Testing',
        announcement: null
      }
    ]
  });
}
