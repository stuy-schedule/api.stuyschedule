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
        day: 'June 20, 2023',
        bell: null,
        block: null,
        testing: 'No Testing',
        announcement: null
      },
      {
        day: 'June 21, 2023',
        bell: null,
        block: null,
        testing: 'No Testing',
        announcement: 'Geometry Regents (8:30 am), LOTE Regents (12:30 pm)'
      },
      {
        day: 'June 22, 2023',
        bell: null,
        block: null,
        testing: 'No Testing',
        announcement: 'Algebra II Regents (8:30 am)'
      },
      {
        day: 'June 23, 2023',
        bell: null,
        block: null,
        testing: 'No Testing',
        announcement: 'Physics (8:30 am)'
      },
      {
        day: 'June 24, 2023',
        bell: null,
        block: null,
        testing: 'No Testing',
        announcement: null
      }
    ]
  });
}
