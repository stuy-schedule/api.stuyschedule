/*

This file contains most of the regular school schedules.
you can use these in pages/api/weekly-schedule.ts

*/

const BellType = {
    REGULAR: {
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
    CONFERENCE: {
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
    HOMEROOM: {
        scheduleType: 'homeroom',
        scheduleName: 'Homeroom Schedule',
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
                duration: 5
            },
            {
                name: 'Period 2',
                startTime: '8:45',
                duration: 40
            },
            {
                name: 'Before Period 3',
                startTime: '9:25',
                duration: 4
            },
            {
                name: 'Period 3',
                startTime: '9:29',
                duration: 40
            },
            {
                name: 'Before Homeroom',
                startTime: '10:09',
                duration: 4
            },
            {
                name: 'Homeroom',
                startTime: '10:13',
                duration: 12
            },
            {
                name: 'Before Period 4',
                startTime: '10:25',
                duration: 5
            },
            {
                name: 'Period 4',
                startTime: '10:30',
                duration: 40
            },
            {
                name: 'Before Period 5',
                startTime: '11:10',
                duration: 4
            },
            {
                name: 'Period 5',
                startTime: '11:14',
                duration: 40
            },
            {
                name: 'Before Period 6',
                startTime: '11:54',
                duration: 4
            },
            {
                name: 'Period 6',
                startTime: '11:58',
                duration: 40
            },
            {
                name: 'Before Period 7',
                startTime: '12:42',
                duration: 5
            },
            {
                name: 'Period 7',
                startTime: '12:47',
                duration: 41
            },
            {
                name: 'Before Period 8',
                startTime: '13:22',
                duration: 4
            },
            {
                name: 'Period 8',
                startTime: '13:26',
                duration: 40
            },
            {
                name: 'Before Period 9',
                startTime: '14:06',
                duration: 4
            },
            {
                name: 'Period 9',
                startTime: '14:10',
                duration: 40
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
    EXTENDED_HOMEROOM: {
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
                duration: 40
            },
            {
                name: 'Before Period 3',
                startTime: '9:25',
                duration: 4
            },
            {
                name: 'Period 3',
                startTime: '9:29',
                duration: 39
            },
            {
                name: 'Before Homeroom',
                startTime: '10:08',
                duration: 4
            },
            {
                name: 'Homeroom',
                startTime: '10:12',
                duration: 21
            },
            {
                name: 'Before Period 4',
                startTime: '10:33',
                duration: 4
            },
            {
                name: 'Period 4',
                startTime: '10:37',
                duration: 39
            },
            {
                name: 'Before Period 5',
                startTime: '11:16',
                duration: 4
            },
            {
                name: 'Period 5',
                startTime: '11:20',
                duration: 39
            },
            {
                name: 'Before Period 6',
                startTime: '11:59',
                duration: 4
            },
            {
                name: 'Period 6',
                startTime: '12:03',
                duration: 39
            },
            {
                name: 'Before Period 7',
                startTime: '12:42',
                duration: 4
            },
            {
                name: 'Period 7',
                startTime: '12:46',
                duration: 39
            },
            {
                name: 'Before Period 8',
                startTime: '13:25',
                duration: 4
            },
            {
                name: 'Period 8',
                startTime: '13:29',
                duration: 39
            },
            {
                name: 'Before Period 9',
                startTime: '14:08',
                duration: 4
            },
            {
                name: 'Period 9',
                startTime: '14:12',
                duration: 38
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
    FIRST_WEEK: {
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
    PSAT: {
        scheduleType: 'psat',
        scheduleName: 'PSAT Schedule',
        schedule: [
            {
                name: 'Before School Opens',
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
                duration: 45
            },
            {
                name: 'PSAT',
                startTime: '9:00',
                duration: 180
            },
            {
                name: 'Lunch',
                startTime: '12:00',
                duration: 50
            },
            {
                name: 'Before Period 1',
                startTime: '12:50',
                duration: 4
            },
            {
                name: 'Period 1',
                startTime: '12:54',
                duration: 20
            },
            {
                name: 'Before Period 2',
                startTime: '13:14',
                duration: 4
            },
            {
                name: 'Period 2',
                startTime: '13:18',
                duration: 20
            },
            {
                name: 'Before Period 3',
                startTime: '13:38',
                duration: 4
            },
            {
                name: 'Period 3',
                startTime: '13:42',
                duration: 20
            },
            {
                name: 'Before Period 4',
                startTime: '14:02',
                duration: 4
            },
            {
                name: 'Period 4',
                startTime: '14:06',
                duration: 20
            },
            {
                name: 'Before Period 5',
                startTime: '14:26',
                duration: 4
            },
            {
                name: 'Period 5',
                startTime: '14:30',
                duration: 20
            },
            {
                name: 'After School',
                startTime: '14:50',
                duration: 549
            }
        ]
    },
    SAT: {
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
    HALF_DAY: {
        scheduleType: 'halfday',
        scheduleName: 'Half Day Schedule',
        schedule: [
            {
                name: 'Before School',
                startTime: '7:30',
                duration: 45
            },
            {
                name: 'Period 1',
                startTime: '8:15',
                duration: 20
            },
            {
                name: 'Before Period 2',
                startTime: '8:35',
                duration: 4
            },
            {
                name: 'Period 2',
                startTime: '8:39',
                duration: 20
            },
            {
                name: 'Before Period 3',
                startTime: '8:59',
                duration: 4
            },
            {
                name: 'Period 3',
                startTime: '9:03',
                duration: 20
            },
            {
                name: 'Before Period 4',
                startTime: '9:23',
                duration: 4
            },
            {
                name: 'Period 4',
                startTime: '9:27',
                duration: 20
            },
            {
                name: 'Before Period 5',
                startTime: '9:47',
                duration: 4
            },
            {
                name: 'Period 5',
                startTime: '9:51',
                duration: 20
            },
            {
                name: 'Before Period 6',
                startTime: '10:11',
                duration: 4
            },
            {
                name: 'Period 6',
                startTime: '10:15',
                duration: 20
            },
            {
                name: 'Before Period 7',
                startTime: '10:35',
                duration: 4
            },
            {
                name: 'Period 7',
                startTime: '10:39',
                duration: 20
            },
            {
                name: 'Before Period 8',
                startTime: '10:59',
                duration: 4
            },
            {
                name: 'Period 8',
                startTime: '11:03',
                duration: 20
            },
            {
                name: 'Before Period 9',
                startTime: '11:23',
                duration: 4
            },
            {
                name: 'Period 9',
                startTime: '11:27',
                duration: 20
            },
            {
                name: 'Before Period 10',
                startTime: '11:47',
                duration: 4
            },
            {
                name: 'Period 10',
                startTime: '11:51',
                duration: 20
            },
            {
                name: 'After School',
                startTime: '12:11',
                duration: 708
            }
        ]
    },
    LAST_DAY: {
        scheduleType: 'lastday',
        scheduleName: 'Last Day Schedule',
        schedule: [
            {
                name: 'Before Period 1',
                startTime: '8:00',
                duration: 60
            },
            {
                name: 'Period 1',
                startTime: '9:20',
                duration: 25
            },
            {
                name: 'Before Period 2',
                startTime: '9:45',
                duration: 4
            },
            {
                name: 'Period 2',
                startTime: '9:49',
                duration: 25
            },
            {
                name: 'Before Period 3',
                startTime: '10:14',
                duration: 4
            },
            {
                name: 'Period 3',
                startTime: '10:18',
                duration: 25
            },
            {
                name: 'Before Homeroom',
                startTime: '10:43',
                duration: 4
            },
            {
                name: 'Homeroom',
                startTime: '10:47',
                duration: 40
            },
            {
                name: 'Before Period 4',
                startTime: '11:27',
                duration: 4
            },
            {
                name: 'Period 4',
                startTime: '11:31',
                duration: 25
            },
            {
                name: 'Before Period 5',
                startTime: '11:56',
                duration: 4
            },
            {
                name: 'Period 5',
                startTime: '12:00',
                duration: 25
            },
            {
                name: 'Before Period 6',
                startTime: '12:25',
                duration: 4
            },
            {
                name: 'Period 6',
                startTime: '12:29',
                duration: 25
            },
            {
                name: 'Before Period 7',
                startTime: '12:54',
                duration: 4
            },
            {
                name: 'Period 7',
                startTime: '12:58',
                duration: 25
            },
            {
                name: 'Before Period 8',
                startTime: '13:23',
                duration: 4
            },
            {
                name: 'Period 8',
                startTime: '13:27',
                duration: 25
            },
            {
                name: 'Before Period 9',
                startTime: '13:52',
                duration: 4
            },
            {
                name: 'Period 9',
                startTime: '13:56',
                duration: 25
            },
            {
                name: 'Before Period 10',
                startTime: '14:21',
                duration: 4
            },
            {
                name: 'Period 10',
                startTime: '14:25',
                duration: 25
            }
        ]
    }
}

export default BellType;
