// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/*
IMPORTANT IF FILLING OUT THE JSON
scheduleType, days, day, and testing will NEVER BE null.

bell name is: scheduletype_schedule
scheduletype: regular, conference, homeroom

see api/master-schedules.js for all bell schedules
*/

export default function handler(req, res) {
  res.status(200).json(
    {
      "scheduleType": "week",
      "days": [
        {
          "day": "March 27, 2023",
          "bell": {
            "scheduleType": "regular",
            "scheduleName": "Regular Schedule",
            "schedule": [
              {
                "name": "Before School",
                "startTime": "0:00",
                "duration": 420
              },
              {
                "name": "Before Period 1",
                "startTime": "7:00",
                "duration": 60
              },
              {
                "name": "Period 1",
                "startTime": "8:00",
                "duration": 41
              },
              {
                "name": "Before Period 2",
                "startTime": "8:41",
                "duration": 4
              },
              {
                "name": "Period 2",
                "startTime": "8:45",
                "duration": 41
              },
              {
                "name": "Before Period 3",
                "startTime": "9:26",
                "duration": 5
              },
              {
                "name": "Period 3",
                "startTime": "9:31",
                "duration": 44
              },
              {
                "name": "Before Period 4",
                "startTime": "10:15",
                "duration": 5
              },
              {
                "name": "Period 4",
                "startTime": "10:20",
                "duration": 41
              },
              {
                "name": "Before Period 5",
                "startTime": "11:01",
                "duration": 5
              },
              {
                "name": "Period 5",
                "startTime": "11:06",
                "duration": 41
              },
              {
                "name": "Before Period 6",
                "startTime": "11:47",
                "duration": 5
              },
              {
                "name": "Period 6",
                "startTime": "11:52",
                "duration": 41
              },
              {
                "name": "Before Period 7",
                "startTime": "12:33",
                "duration": 5
              },
              {
                "name": "Period 7",
                "startTime": "12:38",
                "duration": 41
              },
              {
                "name": "Before Period 8",
                "startTime": "13:19",
                "duration": 5
              },
              {
                "name": "Period 8",
                "startTime": "13:24",
                "duration": 41
              },
              {
                "name": "Before Period 9",
                "startTime": "14:05",
                "duration": 4
              },
              {
                "name": "Period 9",
                "startTime": "14:09",
                "duration": 41
              },
              {
                "name": "Before Period 10",
                "startTime": "14:50",
                "duration": 4
              },
              {
                "name": "Period 10",
                "startTime": "14:54",
                "duration": 41
              },
              {
                "name": "After School",
                "startTime": "15:35",
                "duration": 504
              }
            ]
          },
          "block": "B1",
          "testing": "Science Testing",
          "announcement": null
        },
        {
          "day": "March 28, 2023",
          "bell": {
            "scheduleType": "regular",
            "scheduleName": "Regular Schedule",
            "schedule": [
              {
                "name": "Before School",
                "startTime": "0:00",
                "duration": 420
              },
              {
                "name": "Before Period 1",
                "startTime": "7:00",
                "duration": 60
              },
              {
                "name": "Period 1",
                "startTime": "8:00",
                "duration": 41
              },
              {
                "name": "Before Period 2",
                "startTime": "8:41",
                "duration": 4
              },
              {
                "name": "Period 2",
                "startTime": "8:45",
                "duration": 41
              },
              {
                "name": "Before Period 3",
                "startTime": "9:26",
                "duration": 5
              },
              {
                "name": "Period 3",
                "startTime": "9:31",
                "duration": 44
              },
              {
                "name": "Before Period 4",
                "startTime": "10:15",
                "duration": 5
              },
              {
                "name": "Period 4",
                "startTime": "10:20",
                "duration": 41
              },
              {
                "name": "Before Period 5",
                "startTime": "11:01",
                "duration": 5
              },
              {
                "name": "Period 5",
                "startTime": "11:06",
                "duration": 41
              },
              {
                "name": "Before Period 6",
                "startTime": "11:47",
                "duration": 5
              },
              {
                "name": "Period 6",
                "startTime": "11:52",
                "duration": 41
              },
              {
                "name": "Before Period 7",
                "startTime": "12:33",
                "duration": 5
              },
              {
                "name": "Period 7",
                "startTime": "12:38",
                "duration": 41
              },
              {
                "name": "Before Period 8",
                "startTime": "13:19",
                "duration": 5
              },
              {
                "name": "Period 8",
                "startTime": "13:24",
                "duration": 41
              },
              {
                "name": "Before Period 9",
                "startTime": "14:05",
                "duration": 4
              },
              {
                "name": "Period 9",
                "startTime": "14:09",
                "duration": 41
              },
              {
                "name": "Before Period 10",
                "startTime": "14:50",
                "duration": 4
              },
              {
                "name": "Period 10",
                "startTime": "14:54",
                "duration": 41
              },
              {
                "name": "After School",
                "startTime": "15:35",
                "duration": 504
              }
            ]
          },
          "block": "A1",
          "testing": "WL, ELA, Health Testing",
          "announcement": null
        },
        {
          "day": "March 29, 2023",
          "bell": {
            "scheduleType": "regular",
            "scheduleName": "Regular Schedule",
            "schedule": [
              {
                "name": "Before School",
                "startTime": "0:00",
                "duration": 420
              },
              {
                "name": "Before Period 1",
                "startTime": "7:00",
                "duration": 60
              },
              {
                "name": "Period 1",
                "startTime": "8:00",
                "duration": 41
              },
              {
                "name": "Before Period 2",
                "startTime": "8:41",
                "duration": 4
              },
              {
                "name": "Period 2",
                "startTime": "8:45",
                "duration": 41
              },
              {
                "name": "Before Period 3",
                "startTime": "9:26",
                "duration": 5
              },
              {
                "name": "Period 3",
                "startTime": "9:31",
                "duration": 44
              },
              {
                "name": "Before Period 4",
                "startTime": "10:15",
                "duration": 5
              },
              {
                "name": "Period 4",
                "startTime": "10:20",
                "duration": 41
              },
              {
                "name": "Before Period 5",
                "startTime": "11:01",
                "duration": 5
              },
              {
                "name": "Period 5",
                "startTime": "11:06",
                "duration": 41
              },
              {
                "name": "Before Period 6",
                "startTime": "11:47",
                "duration": 5
              },
              {
                "name": "Period 6",
                "startTime": "11:52",
                "duration": 41
              },
              {
                "name": "Before Period 7",
                "startTime": "12:33",
                "duration": 5
              },
              {
                "name": "Period 7",
                "startTime": "12:38",
                "duration": 41
              },
              {
                "name": "Before Period 8",
                "startTime": "13:19",
                "duration": 5
              },
              {
                "name": "Period 8",
                "startTime": "13:24",
                "duration": 41
              },
              {
                "name": "Before Period 9",
                "startTime": "14:05",
                "duration": 4
              },
              {
                "name": "Period 9",
                "startTime": "14:09",
                "duration": 41
              },
              {
                "name": "Before Period 10",
                "startTime": "14:50",
                "duration": 4
              },
              {
                "name": "Period 10",
                "startTime": "14:54",
                "duration": 41
              },
              {
                "name": "After School",
                "startTime": "15:35",
                "duration": 504
              }
            ]
          },
          "block": "B2",
          "testing": "Math, Music, & Art Testing",
          "announcement": null
        },
        {
          "day": "March 30, 2023",
          "bell": {
            "scheduleType": "regular",
            "scheduleName": "Regular Schedule",
            "schedule": [
              {
                "name": "Before School",
                "startTime": "0:00",
                "duration": 420
              },
              {
                "name": "Before Period 1",
                "startTime": "7:00",
                "duration": 60
              },
              {
                "name": "Period 1",
                "startTime": "8:00",
                "duration": 41
              },
              {
                "name": "Before Period 2",
                "startTime": "8:41",
                "duration": 4
              },
              {
                "name": "Period 2",
                "startTime": "8:45",
                "duration": 41
              },
              {
                "name": "Before Period 3",
                "startTime": "9:26",
                "duration": 5
              },
              {
                "name": "Period 3",
                "startTime": "9:31",
                "duration": 44
              },
              {
                "name": "Before Period 4",
                "startTime": "10:15",
                "duration": 5
              },
              {
                "name": "Period 4",
                "startTime": "10:20",
                "duration": 41
              },
              {
                "name": "Before Period 5",
                "startTime": "11:01",
                "duration": 5
              },
              {
                "name": "Period 5",
                "startTime": "11:06",
                "duration": 41
              },
              {
                "name": "Before Period 6",
                "startTime": "11:47",
                "duration": 5
              },
              {
                "name": "Period 6",
                "startTime": "11:52",
                "duration": 41
              },
              {
                "name": "Before Period 7",
                "startTime": "12:33",
                "duration": 5
              },
              {
                "name": "Period 7",
                "startTime": "12:38",
                "duration": 41
              },
              {
                "name": "Before Period 8",
                "startTime": "13:19",
                "duration": 5
              },
              {
                "name": "Period 8",
                "startTime": "13:24",
                "duration": 41
              },
              {
                "name": "Before Period 9",
                "startTime": "14:05",
                "duration": 4
              },
              {
                "name": "Period 9",
                "startTime": "14:09",
                "duration": 41
              },
              {
                "name": "Before Period 10",
                "startTime": "14:50",
                "duration": 4
              },
              {
                "name": "Period 10",
                "startTime": "14:54",
                "duration": 41
              },
              {
                "name": "After School",
                "startTime": "15:35",
                "duration": 504
              }
            ]
          },
          "block": "A2",
          "testing": "CS, SS, & Tech Testing",
          "announcement": null
        },
        {
          "day": "March 31, 2023",
          "bell": {
            "scheduleType": "halfday",
            "scheduleName": "Half Day Schedule",
            "schedule": [
              {
                "name": "Before School",
                "startTime": "7:30",
                "duration": 45
              },
              {
                "name": "Period 1",
                "startTime": "8:15",
                "duration": 20
              },
              {
                "name": "Before Period 2",
                "startTime": "8:35",
                "duration": 4
              },
              {
                "name": "Period 2",
                "startTime": "8:39",
                "duration": 20
              },
              {
                "name": "Before Period 3",
                "startTime": "8:59",
                "duration": 4
              },
              {
                "name": "Period 3",
                "startTime": "9:03",
                "duration": 20
              },
              {
                "name": "Before Period 4",
                "startTime": "9:23",
                "duration": 4
              },
              {
                "name": "Period 4",
                "startTime": "9:27",
                "duration": 20
              },
              {
                "name": "Before Period 5",
                "startTime": "9:47",
                "duration": 4
              },
              {
                "name": "Period 5",
                "startTime": "9:51",
                "duration": 20
              },
              {
                "name": "Before Period 6",
                "startTime": "10:11",
                "duration": 4
              },
              {
                "name": "Period 6",
                "startTime": "10:15",
                "duration": 20
              },
              {
                "name": "Before Period 7",
                "startTime": "10:35",
                "duration": 4
              },
              {
                "name": "Period 7",
                "startTime": "10:39",
                "duration": 20
              },
              {
                "name": "Before Period 8",
                "startTime": "10:59",
                "duration": 4
              },
              {
                "name": "Period 8",
                "startTime": "11:03",
                "duration": 20
              },
              {
                "name": "Before Period 9",
                "startTime": "11:23",
                "duration": 4
              },
              {
                "name": "Period 9",
                "startTime": "11:27",
                "duration": 20
              },
              {
                "name": "Before Period 10",
                "startTime": "11:47",
                "duration": 4
              },
              {
                "name": "Period 10",
                "startTime": "11:51",
                "duration": 20
              },
              {
                "name": "After School",
                "startTime": "12:11",
                "duration": 708
              }
            ]
          },
          "block": "B",
          "testing": "No Testing",
          "announcement": "Half Day. PTC after school."
        }
      ]
    }
  )
}