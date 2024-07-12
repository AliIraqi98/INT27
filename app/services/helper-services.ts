import { Injectable } from '@angular/core';
import * as moment from "moment/moment";

@Injectable()
export class HelperServices {

    constructor () {

    }

    timeFromNow (datetime) {
        return moment(datetime).fromNow();
    }

    timeActual (dateTime) {
        return moment.utc(dateTime).format('YYYY-MM-DDTHH:mm:ssZ');
    }

    currentTime() {
        return moment.utc();
    }

    timeDuration(startTime, endTime){
        return moment.utc(startTime).from(endTime, true)
    }

    timeFormattedLong(datetime){
        return moment.utc(datetime).format('YYYY-MM-DD HH:mm');
    }

    isToday(dtg){
        return moment().isSame(dtg, 'day');
    }

    isYesterday(dtg){
        const deltaOneDay = moment(dtg).add(1, 'days');
        return moment().isSame(deltaOneDay, 'day');
    }

    isPlural(number){
        if(number===1||number==='1'){
            return "";
        }else  {
            return "s";
        }
    }

}
