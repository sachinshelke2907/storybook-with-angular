import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Story, Meta } from '@storybook/angular/types-6-0';
import {MatRadioModule} from '@angular/material/radio';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { RadioButtonComponent } from 'src/app/radio-button/radio-button.component';

export default {
    title: 'Example/Radio Button',
    component: RadioButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                RadioButtonComponent,
            ],
            imports: [BrowserAnimationsModule, MatRadioModule],
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
          source: {
            type: 'code',
          }
        }
      }
} as Meta;

const Template: Story<RadioButtonComponent> = (args: RadioButtonComponent) => ({
    props: args,
});

export const Simple = Template.bind({});
Simple.args = {};



