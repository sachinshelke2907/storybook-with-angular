import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MatInputModule } from '@angular/material/input';
import DaterangepickerComponent from 'src/app/daterangepicker/daterangepicker.component';
import { SimpleDaterangepickerComponent } from 'src/app/daterangepicker/simple-daterangepicker/simple-daterangepicker.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { SingleDaterangepickerComponent } from 'src/app/daterangepicker/single-daterangepicker/single-daterangepicker.component';
import { CustomRangeComponent } from 'src/app/daterangepicker/custom-range/custom-range.component';
import { WithTimepickerComponent } from 'src/app/daterangepicker/with-timepicker/with-timepicker.component';
import { SingleWithTimeComponent } from 'src/app/daterangepicker/single-with-time/single-with-time.component';

export default {
    title: 'Example/Date Picker',
    component: DaterangepickerComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                SimpleDaterangepickerComponent,
                SingleDaterangepickerComponent,
                CustomRangeComponent,
                WithTimepickerComponent,
                SingleWithTimeComponent
            ],
            imports: [BrowserAnimationsModule, MatInputModule, NgxDaterangepickerMd.forRoot()],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }),
    ],
} as Meta;

const Template: Story<DaterangepickerComponent> = (args: DaterangepickerComponent) => ({
    props: args,
});

export const Simple = Template.bind({});
Simple.args = {};

export const Single = Template.bind({});
Single.args = {
    datePickerType: 'single'
};

export const CustomRange = Template.bind({});
CustomRange.args = {
    datePickerType: 'customRange'
};

export const WithTime = Template.bind({});
WithTime.args = {
    datePickerType: 'withTime'
};

export const SingleWithTime = Template.bind({});
SingleWithTime.args = {
    datePickerType: 'singleWithTime'
};