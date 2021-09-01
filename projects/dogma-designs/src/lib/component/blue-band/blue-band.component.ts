import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-blue-band',
    templateUrl: './blue-band.component.html',
    styleUrls: ['./blue-band.component.scss']
})
export class BlueBandComponent implements OnInit {

    @Input()
    iconsOption = false;

    constructor() { }
    
    ngOnInit(): void {
    }

}
