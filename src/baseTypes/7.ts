/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const enum Days {
  Mondey = 0,
  Tuesday = 0,
  Wednesday = 0,
  Thursday = 0,
  Friday = 0,
  Saturday = 1,
  Sunday = 1,
}

function isWeekend(day: Days): boolean {
  return !!day;
}

const isMondayWeekend = isWeekend(Days.Mondey);
const isSaturdayWeekend = isWeekend(Days.Saturday);
console.log(`Monday is a ${isMondayWeekend ? "day off" : "working day"}`);
console.log(`Saturday is a ${isSaturdayWeekend ? "day off" : "working day"}`);
