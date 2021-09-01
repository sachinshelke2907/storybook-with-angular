import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-daterangepicker',
    templateUrl: './daterangepicker.component.html'
})
export default class DaterangepickerComponent implements OnInit {

    @Input()
    datePickerType ? = 'simple';

    constructor() { }

    ngOnInit(): void {}

    public isSimple(): boolean {
        return ('simple' === this.datePickerType);
    }

    public isSingle(): boolean {
        return ('single' === this.datePickerType);
    }

    public isCustomRange(): boolean {
        return ('customRange' === this.datePickerType);
    }

    public isWithTime(): boolean {
        return ('withTime' === this.datePickerType);
    }

    public isSingleWithTime(): boolean {
        return ('singleWithTime' === this.datePickerType);
    }

}
