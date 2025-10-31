/*

This file contains most of the regular school schedules.
you can use these in pages/api/weekly-schedule.ts

*/

const BellType = {
  REGULAR: {
    scheduleType: "regular",
    scheduleName: "Regular Schedule",
    schedule: [
      {
        name: "Before School",
        startTime: "0:00",
        duration: 420,
      },
      {
        name: "Before Period 1",
        startTime: "7:00",
        duration: 60,
      },
      {
        name: "Period 1",
        startTime: "8:00",
        duration: 41,
      },
      {
        name: "Before Period 2",
        startTime: "8:41",
        duration: 4,
      },
      {
        name: "Period 2",
        startTime: "8:45",
        duration: 41,
      },
      {
        name: "Before Period 3",
        startTime: "9:26",
        duration: 5,
      },
      {
        name: "Period 3",
        startTime: "9:31",
        duration: 44,
      },
      {
        name: "Before Period 4",
        startTime: "10:15",
        duration: 5,
      },
      {
        name: "Period 4",
        startTime: "10:20",
        duration: 41,
      },
      {
        name: "Before Period 5",
        startTime: "11:01",
        duration: 5,
      },
      {
        name: "Period 5",
        startTime: "11:06",
        duration: 41,
      },
      {
        name: "Before Period 6",
        startTime: "11:47",
        duration: 5,
      },
      {
        name: "Period 6",
        startTime: "11:52",
        duration: 41,
      },
      {
        name: "Before Period 7",
        startTime: "12:33",
        duration: 5,
      },
      {
        name: "Period 7",
        startTime: "12:38",
        duration: 41,
      },
      {
        name: "Before Period 8",
        startTime: "13:19",
        duration: 5,
      },
      {
        name: "Period 8",
        startTime: "13:24",
        duration: 41,
      },
      {
        name: "Before Period 9",
        startTime: "14:05",
        duration: 4,
      },
      {
        name: "Period 9",
        startTime: "14:09",
        duration: 41,
      },
      {
        name: "Before Period 10",
        startTime: "14:50",
        duration: 4,
      },
      {
        name: "Period 10",
        startTime: "14:54",
        duration: 41,
      },
      {
        name: "After School",
        startTime: "15:35",
        duration: 504,
      },
    ],
  },
  CONFERENCE: {
    scheduleType: "conference",
    scheduleName: "Conference Schedule",
    schedule: [
      {
        name: "Before Period 1",
        startTime: "7:00",
        duration: 60,
      },
      {
        name: "Period 1",
        startTime: "8:00",
        duration: 37,
      },
      {
        name: "Before Period 2",
        startTime: "8:37",
        duration: 4,
      },
      {
        name: "Period 2",
        startTime: "8:41",
        duration: 37,
      },
      {
        name: "Before Period 3",
        startTime: "9:18",
        duration: 4,
      },
      {
        name: "Period 3",
        startTime: "9:22",
        duration: 37,
      },
      {
        name: "Before Period 4",
        startTime: "9:59",
        duration: 4,
      },
      {
        name: "Period 4",
        startTime: "10:03",
        duration: 37,
      },
      {
        name: "Before Period 5",
        startTime: "10:40",
        duration: 4,
      },
      {
        name: "Period 5",
        startTime: "10:44",
        duration: 37,
      },
      {
        name: "Before Period 6",
        startTime: "11:21",
        duration: 4,
      },
      {
        name: "Period 6",
        startTime: "11:25",
        duration: 37,
      },
      {
        name: "Before Period 7",
        startTime: "12:02",
        duration: 4,
      },
      {
        name: "Period 7",
        startTime: "12:06",
        duration: 37,
      },
      {
        name: "Before Period 8",
        startTime: "12:43",
        duration: 4,
      },
      {
        name: "Period 8",
        startTime: "12:47",
        duration: 37,
      },
      {
        name: "Before Period 9",
        startTime: "13:24",
        duration: 4,
      },
      {
        name: "Period 9",
        startTime: "13:28",
        duration: 37,
      },
      {
        name: "Before Period 10",
        startTime: "14:05",
        duration: 4,
      },
      {
        name: "Period 10",
        startTime: "14:09",
        duration: 37,
      },
      {
        name: "Before Meeting",
        startTime: "14:46",
        duration: 4,
      },
      {
        name: "Meeting",
        startTime: "14:50",
        duration: 40,
      },
    ],
  },
  HOMEROOM: {
    scheduleType: "homeroom",
    scheduleName: "Homeroom Schedule",
    schedule: [
      {
        name: "Before Period 1",
        startTime: "7:00",
        duration: 60,
      },
      {
        name: "Period 1",
        startTime: "8:00",
        duration: 40,
      },
      {
        name: "Before Period 2",
        startTime: "8:40",
        duration: 5,
      },
      {
        name: "Period 2",
        startTime: "8:45",
        duration: 40,
      },
      {
        name: "Before Period 3",
        startTime: "9:25",
        duration: 4,
      },
      {
        name: "Period 3",
        startTime: "9:29",
        duration: 40,
      },
      {
        name: "Before Homeroom",
        startTime: "10:09",
        duration: 4,
      },
      {
        name: "Homeroom",
        startTime: "10:13",
        duration: 12,
      },
      {
        name: "Before Period 4",
        startTime: "10:25",
        duration: 5,
      },
      {
        name: "Period 4",
        startTime: "10:30",
        duration: 40,
      },
      {
        name: "Before Period 5",
        startTime: "11:10",
        duration: 4,
      },
      {
        name: "Period 5",
        startTime: "11:14",
        duration: 40,
      },
      {
        name: "Before Period 6",
        startTime: "11:54",
        duration: 4,
      },
      {
        name: "Period 6",
        startTime: "11:58",
        duration: 40,
      },
      {
        name: "Before Period 7",
        startTime: "12:42",
        duration: 5,
      },
      {
        name: "Period 7",
        startTime: "12:47",
        duration: 41,
      },
      {
        name: "Before Period 8",
        startTime: "13:22",
        duration: 4,
      },
      {
        name: "Period 8",
        startTime: "13:26",
        duration: 40,
      },
      {
        name: "Before Period 9",
        startTime: "14:06",
        duration: 4,
      },
      {
        name: "Period 9",
        startTime: "14:10",
        duration: 40,
      },
      {
        name: "Before Period 10",
        startTime: "14:50",
        duration: 5,
      },
      {
        name: "Period 10",
        startTime: "14:55",
        duration: 40,
      },
    ],
  },
  EXTENDED_HOMEROOM: {
    scheduleType: "extendedhomeroom",
    scheduleName: "Extended Homeroom Schedule",
    schedule: [
      {
        name: "Before Period 1",
        startTime: "7:00",
        duration: 60,
      },
      {
        name: "Period 1",
        startTime: "8:00",
        duration: 41,
      },
      {
        name: "Before Period 2",
        startTime: "8:41",
        duration: 4,
      },
      {
        name: "Period 2",
        startTime: "8:45",
        duration: 40,
      },
      {
        name: "Before Period 3",
        startTime: "9:25",
        duration: 4,
      },
      {
        name: "Period 3",
        startTime: "9:29",
        duration: 39,
      },
      {
        name: "Before Homeroom",
        startTime: "10:08",
        duration: 4,
      },
      {
        name: "Homeroom",
        startTime: "10:12",
        duration: 21,
      },
      {
        name: "Before Period 4",
        startTime: "10:33",
        duration: 4,
      },
      {
        name: "Period 4",
        startTime: "10:37",
        duration: 39,
      },
      {
        name: "Before Period 5",
        startTime: "11:16",
        duration: 4,
      },
      {
        name: "Period 5",
        startTime: "11:20",
        duration: 39,
      },
      {
        name: "Before Period 6",
        startTime: "11:59",
        duration: 4,
      },
      {
        name: "Period 6",
        startTime: "12:03",
        duration: 39,
      },
      {
        name: "Before Period 7",
        startTime: "12:42",
        duration: 4,
      },
      {
        name: "Period 7",
        startTime: "12:46",
        duration: 39,
      },
      {
        name: "Before Period 8",
        startTime: "13:25",
        duration: 4,
      },
      {
        name: "Period 8",
        startTime: "13:29",
        duration: 39,
      },
      {
        name: "Before Period 9",
        startTime: "14:08",
        duration: 4,
      },
      {
        name: "Period 9",
        startTime: "14:12",
        duration: 38,
      },
      {
        name: "Before Period 10",
        startTime: "14:50",
        duration: 5,
      },
      {
        name: "Period 10",
        startTime: "14:55",
        duration: 40,
      },
    ],
  },
  FIRST_WEEK: {
    scheduleType: "firstweek",
    scheduleName: "First Week Schedule",
    schedule: [
      {
        name: "Before Homeroom",
        startTime: "7:50",
        duration: 30,
      },
      {
        name: "Homeroom",
        startTime: "8:20",
        duration: 40,
      },
      {
        name: "Before Period 1",
        startTime: "9:00",
        duration: 5,
      },
      {
        name: "Period 1",
        startTime: "9:05",
        duration: 30,
      },
      {
        name: "Before Period 2",
        startTime: "9:35",
        duration: 5,
      },
      {
        name: "Period 2",
        startTime: "9:40",
        duration: 30,
      },
      {
        name: "Before Period 3",
        startTime: "10:10",
        duration: 5,
      },
      {
        name: "Period 3",
        startTime: "10:15",
        duration: 30,
      },
      {
        name: "Before Period 4",
        startTime: "10:45",
        duration: 5,
      },
      {
        name: "Period 4",
        startTime: "10:50",
        duration: 30,
      },
      {
        name: "Before Period 5",
        startTime: "11:20",
        duration: 5,
      },
      {
        name: "Period 5",
        startTime: "11:25",
        duration: 30,
      },
      {
        name: "Before Period 6",
        startTime: "11:55",
        duration: 5,
      },
      {
        name: "Period 6",
        startTime: "12:00",
        duration: 30,
      },
      {
        name: "Before Period 7",
        startTime: "12:30",
        duration: 5,
      },
      {
        name: "Period 7",
        startTime: "12:35",
        duration: 30,
      },
      {
        name: "Before Period 8",
        startTime: "13:05",
        duration: 5,
      },
      {
        name: "Period 8",
        startTime: "13:10",
        duration: 30,
      },
      {
        name: "Before Period 9",
        startTime: "13:40",
        duration: 5,
      },
      {
        name: "Period 9",
        startTime: "13:45",
        duration: 30,
      },
      {
        name: "Before Period 10",
        startTime: "14:15",
        duration: 5,
      },
      {
        name: "Period 10",
        startTime: "14:20",
        duration: 30,
      },
    ],
  },
  PSAT: {
    scheduleType: "psat",
    scheduleName: "PSAT Schedule",
    schedule: [
      {
        name: "Before School Open",
        startTime: "6:30",
        duration: 60,
      },
      {
        name: "School Open",
        startTime: "7:30",
        duration: 45,
      },
      {
        name: "Report to Testing Rooms",
        startTime: "8:15",
        duration: 15,
      },
      {
        name: "PSAT",
        startTime: "8:30",
        duration: 210,
      },
      {
        name: "Before Period 1",
        startTime: "12:00",
        duration: 54,
      },
      {
        name: "Period 1",
        startTime: "12:54",
        duration: 8,
      },
      {
        name: "Before Period 2",
        startTime: "13:02",
        duration: 4,
      },
      {
        name: "Period 2",
        startTime: "13:06",
        duration: 8,
      },
      {
        name: "Before Period 3",
        startTime: "13:14",
        duration: 4,
      },
      {
        name: "Period 3",
        startTime: "13:18",
        duration: 8,
      },
      {
        name: "Before Period 4",
        startTime: "13:26",
        duration: 4,
      },
      {
        name: "Period 4",
        startTime: "13:30",
        duration: 8,
      },
      {
        name: "Before Period 5",
        startTime: "13:38",
        duration: 4,
      },
      {
        name: "Period 5",
        startTime: "13:42",
        duration: 8,
      },
      {
        name: "Before Period 6",
        startTime: "13:50",
        duration: 4,
      },
      {
        name: "Period 6",
        startTime: "13:54",
        duration: 8,
      },
      {
        name: "Before Period 7",
        startTime: "14:02",
        duration: 4,
      },
      {
        name: "Period 7",
        startTime: "14:06",
        duration: 8,
      },
      {
        name: "Before Period 8",
        startTime: "14:14",
        duration: 4,
      },
      {
        name: "Period 8",
        startTime: "14:18",
        duration: 8,
      },
      {
        name: "Before Period 9",
        startTime: "14:26",
        duration: 4,
      },
      {
        name: "Period 9",
        startTime: "14:30",
        duration: 8,
      },
      {
        name: "Before Period 10",
        startTime: "14:38",
        duration: 4,
      },
      {
        name: "Period 10",
        startTime: "14:42",
        duration: 8,
      },
      {
        name: "After School",
        startTime: "14:50",
        duration: 549,
      },
    ],
  },

  SAT: {
    scheduleType: "sat",
    scheduleName: "SAT Schedule",
    schedule: [
      {
        name: "Before School Open",
        startTime: "6:30",
        duration: 60,
      },
      {
        name: "School Open",
        startTime: "7:30",
        duration: 45,
      },
      {
        name: "Report to Testing Rooms",
        startTime: "8:15",
        duration: 15,
      },
      {
        name: "SAT",
        startTime: "8:30",
        duration: 210,
      },
      {
        name: "Before Period 1",
        startTime: "12:00",
        duration: 54,
      },
      {
        name: "Period 1",
        startTime: "12:54",
        duration: 8,
      },
      {
        name: "Before Period 2",
        startTime: "13:02",
        duration: 4,
      },
      {
        name: "Period 2",
        startTime: "13:06",
        duration: 8,
      },
      {
        name: "Before Period 3",
        startTime: "13:14",
        duration: 4,
      },
      {
        name: "Period 3",
        startTime: "13:18",
        duration: 8,
      },
      {
        name: "Before Period 4",
        startTime: "13:26",
        duration: 4,
      },
      {
        name: "Period 4",
        startTime: "13:30",
        duration: 8,
      },
      {
        name: "Before Period 5",
        startTime: "13:38",
        duration: 4,
      },
      {
        name: "Period 5",
        startTime: "13:42",
        duration: 8,
      },
      {
        name: "Before Period 6",
        startTime: "13:50",
        duration: 4,
      },
      {
        name: "Period 6",
        startTime: "13:54",
        duration: 8,
      },
      {
        name: "Before Period 7",
        startTime: "14:02",
        duration: 4,
      },
      {
        name: "Period 7",
        startTime: "14:06",
        duration: 8,
      },
      {
        name: "Before Period 8",
        startTime: "14:14",
        duration: 4,
      },
      {
        name: "Period 8",
        startTime: "14:18",
        duration: 8,
      },
      {
        name: "Before Period 9",
        startTime: "14:26",
        duration: 4,
      },
      {
        name: "Period 9",
        startTime: "14:30",
        duration: 8,
      },
      {
        name: "Before Period 10",
        startTime: "14:38",
        duration: 4,
      },
      {
        name: "Period 10",
        startTime: "14:42",
        duration: 8,
      },
      {
        name: "After School",
        startTime: "14:50",
        duration: 549,
      },
    ],
  },
  HALF_DAY: {
    scheduleType: "halfday",
    scheduleName: "Half Day Schedule",
    schedule: [
      {
        name: "Before School",
        startTime: "7:30",
        duration: 45,
      },
      {
        name: "Period 1",
        startTime: "8:15",
        duration: 20,
      },
      {
        name: "Before Period 2",
        startTime: "8:35",
        duration: 4,
      },
      {
        name: "Period 2",
        startTime: "8:39",
        duration: 20,
      },
      {
        name: "Before Period 3",
        startTime: "8:59",
        duration: 4,
      },
      {
        name: "Period 3",
        startTime: "9:03",
        duration: 20,
      },
      {
        name: "Before Period 4",
        startTime: "9:23",
        duration: 4,
      },
      {
        name: "Period 4",
        startTime: "9:27",
        duration: 20,
      },
      {
        name: "Before Period 5",
        startTime: "9:47",
        duration: 4,
      },
      {
        name: "Period 5",
        startTime: "9:51",
        duration: 20,
      },
      {
        name: "Before Period 6",
        startTime: "10:11",
        duration: 4,
      },
      {
        name: "Period 6",
        startTime: "10:15",
        duration: 20,
      },
      {
        name: "Before Period 7",
        startTime: "10:35",
        duration: 4,
      },
      {
        name: "Period 7",
        startTime: "10:39",
        duration: 20,
      },
      {
        name: "Before Period 8",
        startTime: "10:59",
        duration: 4,
      },
      {
        name: "Period 8",
        startTime: "11:03",
        duration: 20,
      },
      {
        name: "Before Period 9",
        startTime: "11:23",
        duration: 4,
      },
      {
        name: "Period 9",
        startTime: "11:27",
        duration: 20,
      },
      {
        name: "Before Period 10",
        startTime: "11:47",
        duration: 4,
      },
      {
        name: "Period 10",
        startTime: "11:51",
        duration: 20,
      },
      {
        name: "After School",
        startTime: "12:11",
        duration: 708,
      },
    ],
  },
  LAST_DAY: {
    scheduleType: "lastday",
    scheduleName: "Last Day Schedule",
    schedule: [
      {
        name: "Before Period 1",
        startTime: "8:00",
        duration: 60,
      },
      {
        name: "Period 1",
        startTime: "9:20",
        duration: 25,
      },
      {
        name: "Before Period 2",
        startTime: "9:45",
        duration: 4,
      },
      {
        name: "Period 2",
        startTime: "9:49",
        duration: 25,
      },
      {
        name: "Before Period 3",
        startTime: "10:14",
        duration: 4,
      },
      {
        name: "Period 3",
        startTime: "10:18",
        duration: 25,
      },
      {
        name: "Before Homeroom",
        startTime: "10:43",
        duration: 4,
      },
      {
        name: "Homeroom",
        startTime: "10:47",
        duration: 40,
      },
      {
        name: "Before Period 4",
        startTime: "11:27",
        duration: 4,
      },
      {
        name: "Period 4",
        startTime: "11:31",
        duration: 25,
      },
      {
        name: "Before Period 5",
        startTime: "11:56",
        duration: 4,
      },
      {
        name: "Period 5",
        startTime: "12:00",
        duration: 25,
      },
      {
        name: "Before Period 6",
        startTime: "12:25",
        duration: 4,
      },
      {
        name: "Period 6",
        startTime: "12:29",
        duration: 25,
      },
      {
        name: "Before Period 7",
        startTime: "12:54",
        duration: 4,
      },
      {
        name: "Period 7",
        startTime: "12:58",
        duration: 25,
      },
      {
        name: "Before Period 8",
        startTime: "13:23",
        duration: 4,
      },
      {
        name: "Period 8",
        startTime: "13:27",
        duration: 25,
      },
      {
        name: "Before Period 9",
        startTime: "13:52",
        duration: 4,
      },
      {
        name: "Period 9",
        startTime: "13:56",
        duration: 25,
      },
      {
        name: "Before Period 10",
        startTime: "14:21",
        duration: 4,
      },
      {
        name: "Period 10",
        startTime: "14:25",
        duration: 25,
      },
    ],
  },

  ADMINISTRATIVE_HOMEROOM_DISTRIBUTION: {
    scheduleType: "administrativehomeroomdistribution",
    scheduleName: "Administrative Homeroom Distribution Schedule",
    schedule: [
      {
        name: "Before Period 1",
        startTime: "7:00",
        duration: 60, // same pre-school buffer as other schedules
      },
      {
        name: "Period 1",
        startTime: "8:00",
        duration: 36, // 8:00–8:36
      },
      {
        name: "Administrative Distribution 1",
        startTime: "8:36",
        duration: 5, // 8:36–8:41
      },
      {
        name: "Before Period 2",
        startTime: "8:41",
        duration: 4, // 8:41–8:45
      },
      {
        name: "Period 2",
        startTime: "8:45",
        duration: 35, // 8:45–9:20
      },
      {
        name: "Before Period 3",
        startTime: "9:20",
        duration: 5, // 9:20–9:25
      },
      {
        name: "Setup for Period 3",
        startTime: "9:25",
        duration: 4, // 9:25–9:29
      },
      {
        name: "Period 3",
        startTime: "9:29",
        duration: 34, // 9:29–10:03
      },
      {
        name: "Before Distribution Block",
        startTime: "10:03",
        duration: 5, // 10:03–10:08
      },
      {
        name: "Distribution Setup",
        startTime: "10:08",
        duration: 4, // 10:08–10:12
      },
      {
        name: "Administrative Distribution (Mid)",
        startTime: "10:12",
        duration: 21, // 10:12–10:33
      },
      {
        name: "Before Period 4",
        startTime: "10:33",
        duration: 4, // 10:33–10:37
      },
      {
        name: "Period 4",
        startTime: "10:37",
        duration: 34, // 10:37–11:11
      },
      {
        name: "Before Period 5",
        startTime: "11:11",
        duration: 5, // 11:11–11:16
      },
      {
        name: "Setup for Period 5",
        startTime: "11:16",
        duration: 4, // 11:16–11:20
      },
      {
        name: "Period 5",
        startTime: "11:20",
        duration: 34, // 11:20–11:54
      },
      {
        name: "Before Period 6",
        startTime: "11:54",
        duration: 5, // 11:54–11:59
      },
      {
        name: "Setup for Period 6",
        startTime: "11:59",
        duration: 4, // 11:59–12:03
      },
      {
        name: "Period 6",
        startTime: "12:03",
        duration: 34, // 12:03–12:37
      },
      {
        name: "Before Period 7",
        startTime: "12:37",
        duration: 5, // 12:37–12:42
      },
      {
        name: "Setup for Period 7",
        startTime: "12:42",
        duration: 4, // 12:42–12:46
      },
      {
        name: "Period 7",
        startTime: "12:46",
        duration: 34, // 12:46–1:20
      },
      {
        name: "Before Period 8",
        startTime: "13:20",
        duration: 5, // 1:20–1:25
      },
      {
        name: "Setup for Period 8",
        startTime: "13:25",
        duration: 4, // 1:25–1:29
      },
      {
        name: "Period 8",
        startTime: "13:29",
        duration: 34, // 1:29–2:03
      },
      {
        name: "Before Period 9",
        startTime: "14:03",
        duration: 5, // 2:03–2:08
      },
      {
        name: "Setup for Period 9",
        startTime: "14:08",
        duration: 4, // 2:08–2:12
      },
      {
        name: "Period 9",
        startTime: "14:12",
        duration: 34, // 2:12–2:46
      },
      {
        name: "Setup for Period 10 (part 1)",
        startTime: "14:46",
        duration: 4, // 2:46–2:50
      },
      {
        name: "Setup for Period 10 (part 2)",
        startTime: "14:50",
        duration: 5, // 2:50–2:55
      },
      {
        name: "Before Period 10",
        startTime: "14:55",
        duration: 35, // 2:55–3:30
      },
      {
        name: "Period 10",
        startTime: "15:30",
        duration: 5, // 3:30–3:35
      },
      {
        name: "After School",
        startTime: "15:35",
        duration: 504,
      },
    ],
  },
};

export default BellType;
