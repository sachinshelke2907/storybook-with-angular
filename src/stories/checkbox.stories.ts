import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Story, Meta } from '@storybook/angular/types-6-0';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from 'src/app/checkbox/checkbox.component';

export default {
    title: 'Example/Checkbox',
    component: CheckboxComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                CheckboxComponent,
            ],
            imports: [BrowserAnimationsModule, MatCheckboxModule],
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

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
    props: args,
});

export const Simple = Template.bind({});
Simple.args = {};



