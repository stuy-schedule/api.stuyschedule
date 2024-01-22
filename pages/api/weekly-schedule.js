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
        day: 'January 22, 2024',
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
        testing: 'Makeup Exams',
        announcement: 'End of MP3'
      },
      {
        day: 'January 23, 2024',
        bell: null,
        block: null,
        testing: 'Geometry Finals (9:30 am - 11:00 am)',
        announcement: 'ELA Regents, LE Regents'
      },
      {
        day: 'January 24, 2024',
        bell: null,
        block: null,
        testing: 'Pre-Calculus Finals (9:30 am - 11:00 am)',
        announcement:
          'Geometry Regents, US History Regents, Algebra I Regents, Physics Regents'
      },
      {
        day: 'January 25, 2024',
        bell: null,
        block: null,
        testing: 'Algebra II Finals (9:30 am - 11:00 am)',
        announcement: 'Global Regents, Algebra II Regents'
      },
      {
        day: 'January 26, 2024',
        bell: null,
        block: null,
        testing: 'AP Computer Science Finals (9:30 am - 11:00 am)',
        announcement: 'Chemistry Regents; Senior Grades Due 8:00 am'
      }
    ]
  });
}
