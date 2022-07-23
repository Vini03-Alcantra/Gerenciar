interface IDateProvider {
    convertToUTC(date: Date): string;
    dateNow(): Date;
    addDays(days: number): Date;
    addHours(hours: number): Date;
    firstDayMonth(): Date;
}

export {IDateProvider}