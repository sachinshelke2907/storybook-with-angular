import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MatInputModule } from '@angular/material/input';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { CustomRangeComponent, DaterangepickerComponent, SimpleDaterangepickerComponent, SingleDaterangepickerComponent, SingleWithTimeComponent, WithTimepickerComponent } from 'projects/dogma-designs/src/public-api';
import { MatIconModule } from '@angular/material/icon';

export default {
    title: 'Example/DatePicker',
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
            imports: [BrowserAnimationsModule, MatInputModule, MatIconModule, NgxDaterangepickerMd.forRoot()],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }),
    ],
    parameters: {
        // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
        'in-dsm': {
            versionFilePath: '',
            componentPath: ''
        },
        docs: {
            //   source: {
            //     type: 'code',
            //   }
        }
    }
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