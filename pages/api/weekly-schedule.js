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
        day: 'May 1, 2023',
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
        block: 'A',
        testing: 'Science Testing',
        announcement: 'AP Gov'
      },
      {
        day: 'May 2, 2023',
        bell: {
          scheduleType: 'extendedhomeroom',
          scheduleName: 'Extended Homeroom Schedule',
          schedule: [
            {
              name: 'Before Period 1',
              startTime: '7:00',
              duration: 60
            },
            {
              name: 'Period 1',
              startTime: '8:00',
              duration: 40
            },
            {
              name: 'Before Period 2',
              startTime: '8:40',
              duration: 4
            },
            {
              name: 'Period 2',
              startTime: '8:44',
              duration: 39
            },
            {
              name: 'Before Period 3',
              startTime: '9:23',
              duration: 4
            },
            {
              name: 'Period 3',
              startTime: '9:27',
              duration: 39
            },
            {
              name: 'Before Homeroom',
              startTime: '10:06',
              duration: 4
            },
            {
              name: 'Homeroom',
              startTime: '10:10',
              duration: 22
            },
            {
              name: 'Before Period 4',
              startTime: '10:32',
              duration: 4
            },
            {
              name: 'Period 4',
              startTime: '10:36',
              duration: 39
            },
            {
              name: 'Before Period 5',
              startTime: '11:15',
              duration: 4
            },
            {
              name: 'Period 5',
              startTime: '11:19',
              duration: 39
            },
            {
              name: 'Before Period 6',
              startTime: '11:58',
              duration: 4
            },
            {
              name: 'Period 6',
              startTime: '12:02',
              duration: 39
            },
            {
              name: 'Before Period 7',
              startTime: '12:41',
              duration: 4
            },
            {
              name: 'Period 7',
              startTime: '12:45',
              duration: 39
            },
            {
              name: 'Before Period 8',
              startTime: '13:24',
              duration: 4
            },
            {
              name: 'Period 8',
              startTime: '13:28',
              duration: 39
            },
            {
              name: 'Before Period 9',
              startTime: '14:07',
              duration: 4
            },
            {
              name: 'Period 9',
              startTime: '14:11',
              duration: 39
            },
            {
              name: 'Before Period 10',
              startTime: '14:50',
              duration: 5
            },
            {
              name: 'Period 10',
              startTime: '14:55',
              duration: 40
            }
          ]
        },
        block: 'B1',
        testing: 'Science Testing',
        announcement: 'APES, AP Psych'
      },
      {
        day: 'May 3, 2023',
        bell: {
          scheduleType: 'conference',
          scheduleName: 'Conference Schedule',
          schedule: [
            {
              name: 'Before Period 1',
              startTime: '7:00',
              duration: 60
            },
            {
              name: 'Period 1',
              startTime: '8:00',
              duration: 37
            },
            {
              name: 'Before Period 2',
              startTime: '8:37',
              duration: 4
            },
            {
              name: 'Period 2',
              startTime: '8:41',
              duration: 37
            },
            {
              name: 'Before Period 3',
              startTime: '9:18',
              duration: 4
            },
            {
              name: 'Period 3',
              startTime: '9:22',
              duration: 37
            },
            {
              name: 'Before Period 4',
              startTime: '9:59',
              duration: 4
            },
            {
              name: 'Period 4',
              startTime: '10:03',
              duration: 37
            },
            {
              name: 'Before Period 5',
              startTime: '10:40',
              duration: 4
            },
            {
              name: 'Period 5',
              startTime: '10:44',
              duration: 37
            },
            {
              name: 'Before Period 6',
              startTime: '11:21',
              duration: 4
            },
            {
              name: 'Period 6',
              startTime: '11:25',
              duration: 37
            },
            {
              name: 'Before Period 7',
              startTime: '12:02',
              duration: 4
            },
            {
              name: 'Period 7',
              startTime: '12:06',
              duration: 37
            },
            {
              name: 'Before Period 8',
              startTime: '12:43',
              duration: 4
            },
            {
              name: 'Period 8',
              startTime: '12:47',
              duration: 37
            },
            {
              name: 'Before Period 9',
              startTime: '13:24',
              duration: 4
            },
            {
              name: 'Period 9',
              startTime: '13:28',
              duration: 37
            },
            {
              name: 'Before Period 10',
              startTime: '14:05',
              duration: 4
            },
            {
              name: 'Period 10',
              startTime: '14:09',
              duration: 37
            },
            {
              name: 'Before Meeting',
              startTime: '14:46',
              duration: 4
            },
            {
              name: 'Meeting',
              startTime: '14:50',
              duration: 40
            }
          ]
        },
        block: 'A1',
        testing: 'WL, ELA, & Health Testing',
        announcement: 'AP Lit, AP CSA'
      },
      {
        day: 'May 4, 2023',
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
        block: 'B2',
        testing: 'Math, Music, & Art',
        announcement: 'AP Macro, AP Stats'
      },
      {
        day: 'May 5, 2023',
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
        block: 'A2',
        testing: 'CS, SS, & Tech Testing',
        announcement: 'APUSH, AP Art, AP Micro'
      }
    ]
  });
}
