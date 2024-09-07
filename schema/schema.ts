type Schedule = {
    scheduleType: String,
    days: Day[],
};

type Day = {
    /**
     * Format: 'Month, DD, YYYY'
     */
    day: string,
    bell: Bell | null,
    block: Block | null,
    testing: String,
    announcement: String | null,
};

type Bell = {
    scheduleType: String,
    scheduleName: string,
    schedule: Period[],
};

type Period = {
    name: string,
    /**
     * Format: 'HH:MM'
     */
    startTime: string,
    duration: number,
};

enum Block {
    A = 'A',
    B = 'B',
    A1 = 'A1',
    B1 = 'B1',
    A2 = 'A2',
    B2 = 'B2',
};

export type {
    Schedule,
    Day,
    Bell,
    Period,
};

export { Block };
