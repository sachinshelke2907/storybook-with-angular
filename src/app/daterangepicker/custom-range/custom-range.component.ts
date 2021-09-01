import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-custom-range',
    templateUrl: './custom-range.component.html'
})
export class CustomRangeComponent implements OnInit {

    alwaysShowCalendars: boolean;
    ranges: any = {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    };
    invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];

    constructor() {
        this.alwaysShowCalendars = true;
     }

    ngOnInit(): void {
    }

    isInvalidDate = (m: moment.Moment) => {
        return this.invalidDates.some(d => d.isSame(m, 'day'));
    }

}
