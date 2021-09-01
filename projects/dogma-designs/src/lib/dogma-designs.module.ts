import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AgGridModule } from 'ag-grid-angular';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { AgGridComponent } from './component/ag-grid/ag-grid.component';
import { SimpleComponent } from './component/ag-grid/simple/simple.component';
import { BlueBandComponent } from './component/blue-band/blue-band.component';
import { CustomRangeComponent } from './component/daterangepicker/custom-range/custom-range.component';
import { DaterangepickerComponent } from './component/daterangepicker/daterangepicker.component';
import { SimpleDaterangepickerComponent } from './component/daterangepicker/simple-daterangepicker/simple-daterangepicker.component';
import { SingleDaterangepickerComponent } from './component/daterangepicker/single-daterangepicker/single-daterangepicker.component';
import { SingleWithTimeComponent } from './component/daterangepicker/single-with-time/single-with-time.component';
import { WithTimepickerComponent } from './component/daterangepicker/with-timepicker/with-timepicker.component';



@NgModule({
    declarations: [
        SimpleDaterangepickerComponent,
        SingleDaterangepickerComponent,
        CustomRangeComponent,
        SingleWithTimeComponent,
        WithTimepickerComponent,
        DaterangepickerComponent,
        AgGridComponent,
        SimpleComponent,
        BlueBandComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatIconModule,
        AgGridModule.withComponents([]),
        NgxDaterangepickerMd.forRoot()
    ],
    exports: [
        SimpleDaterangepickerComponent,
        SingleDaterangepickerComponent,
        CustomRangeComponent,
        SingleWithTimeComponent,
        WithTimepickerComponent,
        DaterangepickerComponent,
        AgGridComponent,
        SimpleComponent,
        BlueBandComponent
    ]
})
export class DogmaDesignsModule { }
