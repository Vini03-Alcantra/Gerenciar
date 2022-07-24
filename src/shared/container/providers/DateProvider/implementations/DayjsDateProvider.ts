import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import { IDateProvider } from "../IDateProvider"

dayjs.extend(utc)

class DayjsDateProvider implements IDateProvider {
    convertToUTC(date: Date): string {
        return dayjs(date).utc().local().format()
    }
    dateNow(): Date {
        return dayjs().toDate()
    }
    addDays(days: number): Date {
        return dayjs().add(days, "days").toDate()
    }
    addHours(hours: number): Date {
        return dayjs().add(hours, "hour").toDate()
    }    
    firstDayMonth(): Date {
        const firstDayMonth = dayjs().startOf('month').toDate()
        
        return firstDayMonth
    }

}

export {DayjsDateProvider}