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
        day: 'April 15, 2024',
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
        testing: 'Science Testing',
        announcement: null
      },
      {
        day: 'April 16, 2024',
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
        testing: 'WL, ELA & Health Testing',
        announcement: null
      },
      {
        day: 'April 17, 2024',
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
        block: 'A2',
        testing: 'Math, Music & Art Testing',
        announcement: null
      },
      {
        day: 'April 18, 2024',
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
        testing: 'CS, SS & Technology Testing',
        announcement: 'Spring Orchestra Concert at 6:00pm'
      },
      {
        day: 'April 19, 2024',
        bell: {
          scheduleType: 'sat',
          scheduleName: 'SAT Schedule',
          schedule: [
            {
              name: 'Before School Open',
              startTime: '6:30',
              duration: 60
            },
            {
              name: 'School Open',
              startTime: '7:30',
              duration: 45
            },
            {
              name: 'Report to Testing Rooms',
              startTime: '8:15',
              duration: 15
            },
            {
              name: 'SAT',
              startTime: '8:30',
              duration: 210
            },
            {
              name: 'Before Period 1',
              startTime: '12:00',
              duration: 54
            },
            {
              name: 'Period 1',
              startTime: '12:54',
              duration: 8
            },
            {
              name: 'Before Period 2',
              startTime: '13:02',
              duration: 4
            },
            {
              name: 'Period 2',
              startTime: '13:06',
              duration: 8
            },
            {
              name: 'Before Period 3',
              startTime: '13:14',
              duration: 4
            },
            {
              name: 'Period 3',
              startTime: '13:18',
              duration: 8
            },
            {
              name: 'Before Period 4',
              startTime: '13:26',
              duration: 4
            },
            {
              name: 'Period 4',
              startTime: '13:30',
              duration: 8
            },
            {
              name: 'Before Period 5',
              startTime: '13:38',
              duration: 4
            },
            {
              name: 'Period 5',
              startTime: '13:42',
              duration: 8
            },
            {
              name: 'Before Period 6',
              startTime: '13:50',
              duration: 4
            },
            {
              name: 'Period 6',
              startTime: '13:54',
              duration: 8
            },
            {
              name: 'Before Period 7',
              startTime: '14:02',
              duration: 4
            },
            {
              name: 'Period 7',
              startTime: '14:06',
              duration: 8
            },
            {
              name: 'Before Period 8',
              startTime: '14:14',
              duration: 4
            },
            {
              name: 'Period 8',
              startTime: '14:18',
              duration: 8
            },
            {
              name: 'Before Period 9',
              startTime: '14:26',
              duration: 4
            },
            {
              name: 'Period 9',
              startTime: '14:30',
              duration: 8
            },
            {
              name: 'Before Period 10',
              startTime: '14:38',
              duration: 4
            },
            {
              name: 'Period 10',
              startTime: '14:42',
              duration: 8
            },
            {
              name: 'After School',
              startTime: '14:50',
              duration: 549
            }
          ]
        },
        block: 'A',
        testing: 'No Testing',
        announcement: 'SAT Exam'
      }
    ]
  });
}
