import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
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
        DaterangepickerComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        NgxDaterangepickerMd.forRoot()
    ],
    exports: [
        SimpleDaterangepickerComponent,
        SingleDaterangepickerComponent,
        CustomRangeComponent,
        SingleWithTimeComponent,
        WithTimepickerComponent,
        DaterangepickerComponent
    ]
})
export class DogmaDesignsModule { }
