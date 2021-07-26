import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import BlueBandComponent from './blue-band/blue-band.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { TabsComponent } from './tabs/tabs.component';
import { IconComponent } from './icon/icon.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AgGridModule } from 'ag-grid-angular';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
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
    BlueBandComponent,
    CheckboxComponent,
    RadioButtonComponent,
    TabsComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AgGridModule.withComponents([]),
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    NgxDaterangepickerMd.forRoot(),
    HttpClientModule,
    MatAutocompleteModule

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
