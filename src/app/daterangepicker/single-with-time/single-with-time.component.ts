import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { LocaleConfig } from 'ngx-daterangepicker-material';

@Component({
    selector: 'app-single-with-time',
    templateUrl: './single-with-time.component.html'
})
export class SingleWithTimeComponent implements OnInit {

    alwaysShowCalendars: boolean;

    constructor() {
        this.alwaysShowCalendars = true;
    }

    ngOnInit(): void {
    }

    locale: LocaleConfig = {
        applyLabel: 'Appliquer',
        customRangeLabel: ' - ',
        daysOfWeek: moment.weekdaysMin(),
        monthNames: moment.monthsShort(),
        firstDay: moment.localeData().firstDayOfWeek(),
    }

    isInvalidDate(date) {
        return date.weekday() === 0;
    }

    isCustomDate(date) {
        return (
            date.weekday() === 0 ||
            date.weekday() === 6
        ) ? 'mycustomdate' : false;
    }
}
