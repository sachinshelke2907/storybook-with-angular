import { Component, OnInit } from '@angular/core';
import { simpleGridColumn, simpleGridRowData } from '../ag-grid.mock';

@Component({
    selector: 'app-ag-simple',
    templateUrl: './simple.component.html'
})
export class SimpleComponent implements OnInit {

    columnDefs = [
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ];
    
    rowData = simpleGridRowData;

    constructor() {
    }

    ngOnInit(): void {
        console.log(this.columnDefs);
    }

}
