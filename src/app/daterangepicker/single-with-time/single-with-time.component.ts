import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { LocaleConfig } from 'ngx-daterangepicker-material';

@Component({
    selector: 'app-single-with-time',
    templateUrl: './single-with-time.component.html'
})
export class SingleWithTimeComponent implements OnInit {

    constructor() {
        this.alwaysShowCalendars = true;
    }

    alwaysShowCalendars: boolean;

    locale: LocaleConfig = {
        applyLabel: 'Appliquer',
        customRangeLabel: ' - ',
        daysOfWeek: moment.weekdaysMin(),
        monthNames: moment.monthsShort(),
        firstDay: moment.localeData().firstDayOfWeek(),
    };

    ngOnInit(): void {
    }

    isInvalidDate(date): boolean {
        return date.weekday() === 0;
    }

    isCustomDate(date): boolean | string {
        return (
            date.weekday() === 0 ||
            date.weekday() === 6
        ) ? 'mycustomdate' : false;
    }
}
