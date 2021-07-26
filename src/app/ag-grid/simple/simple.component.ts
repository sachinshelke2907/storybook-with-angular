import { Component, OnInit } from '@angular/core';
import 'ag-grid-enterprise';
import { simpleGridColumn, simpleGridRowData } from '../ag-grid.mock';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
@Component({
    selector: 'app-ag-simple',
    templateUrl: './simple.component.html'
})
export class SimpleComponent implements OnInit {
    columnDefs = simpleGridColumn;
    rowData = simpleGridRowData;
    defaultColDef = {
        flex: 1,
        minWidth: 150,
        filter: true,
        SingleClickEdit: true,
        sortable: true,
        resizable: true,
    };
    sortingOrder = ['desc', 'asc', null];
    rowSelection = 'multiple';
    suppressRowClickSelection = true;
    suppressAggFuncInHeader = true;
    pivotMode = false;
    suppressColumnVirtualisation = true;
    debounceVerticalScrollbar =  true;
    rowClass = 'white-bg';



    constructor() {
    }

    ngOnInit(): void {
        console.log(this.columnDefs);
    }

}
