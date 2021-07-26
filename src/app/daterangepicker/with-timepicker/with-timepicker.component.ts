import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-with-timepicker',
    templateUrl: './with-timepicker.component.html'
})
export class WithTimepickerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    isInvalidDate(date): boolean {
        return date.weekday() === 0;
    }
}
