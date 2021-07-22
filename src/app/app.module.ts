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
import { TextInputComponent } from './text-input/text-input.component';
import { SimpleInputComponent } from './text-input/simple-input/simple-input.component';
import { ButtonComponent } from './button/button.component';
import { PrimaryButtonComponent } from './button/primary/primary.component';
import { SecondaryButtonComponent } from './button/secondary/secondary.component';
import { TertiaryButtonComponent } from './button/tertiary/tertiary.component';
import { SingleAutocompleteComponent } from './single-autocomplete/single-autocomplete.component';
import { SimpleSingleSelectComponent } from './single-autocomplete/simple-single-select/simple-single-select.component';
import { BlueBandComponent } from './blue-band/blue-band.component';
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
    SimpleComponent,
    TextInputComponent,
    SimpleInputComponent,
    ButtonComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    TertiaryButtonComponent,
    SingleAutocompleteComponent,
    SimpleSingleSelectComponent,
    BlueBandComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
