import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingleDaterangepickerComponent } from './daterangepicker/single-daterangepicker/single-daterangepicker.component';
import { CustomRangeComponent } from './daterangepicker/custom-range/custom-range.component';
import { WithTimepickerComponent } from './daterangepicker/with-timepicker/with-timepicker.component';
import { SimpleDaterangepickerComponent } from './daterangepicker/simple-daterangepicker/simple-daterangepicker.component';
import DaterangepickerComponent from './daterangepicker/daterangepicker.component';
import { SingleWithTimeComponent } from './daterangepicker/single-with-time/single-with-time.component';
import { SimpleComponent } from './ag-grid/simple/simple.component';
import AgGridComponent from './ag-grid/ag-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleDaterangepickerComponent,
    CustomRangeComponent,
    WithTimepickerComponent,
    SimpleDaterangepickerComponent,
    DaterangepickerComponent,
    SingleWithTimeComponent,
    AgGridComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
