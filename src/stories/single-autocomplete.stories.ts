import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MatInputModule } from '@angular/material/input';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SingleAutocompleteComponent} from 'src/app/single-autocomplete/single-autocomplete.component';
import { SimpleSingleSelectComponent } from 'src/app/single-autocomplete/simple-single-select/simple-single-select.component';

export default {
    title: 'Example/Single Autocomplete',
    decorators: [
        moduleMetadata({
            declarations: [
                SimpleSingleSelectComponent
            ],
            imports: [
                BrowserAnimationsModule,
                MatAutocompleteModule,
                MatInputModule,
                FormsModule
                ,ReactiveFormsModule
            ],
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

const Template: Story<SingleAutocompleteComponent> = (args: SingleAutocompleteComponent) => ({
    props: args,
});

export const Simple = Template.bind({});
Simple.args = {};