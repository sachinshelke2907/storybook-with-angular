import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MatInputModule } from '@angular/material/input';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { TextInputComponent } from 'src/app/text-input/text-input.component';
import { SimpleInputComponent } from 'src/app/text-input/simple-input/simple-input.component';

export default {
    title: 'Example/Input',
    component: TextInputComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                SimpleInputComponent,
            ],
            imports: [BrowserAnimationsModule, MatInputModule],
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

const Template: Story<TextInputComponent> = (args: TextInputComponent) => ({
    props: args,
});

export const SimpleInput = Template.bind({});
SimpleInput.args = {};



