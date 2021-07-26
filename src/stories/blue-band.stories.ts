import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MatIconModule } from '@angular/material/icon';
import BlueBandComponent from 'src/app/blue-band/blue-band.component';

export default {
    title: 'Example/Blue Band',
    component: BlueBandComponent,
    decorators: [
        moduleMetadata({
            imports: [BrowserAnimationsModule, MatIconModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }),
    ],
    argTypes: {
        iconsOption: {
            control: {
                type: 'radio',
                options: [true, false]
            }
        },
    },
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

const Template: Story<BlueBandComponent> = (args: BlueBandComponent) => ({
    props: args,
});

export const Simple = Template.bind({});
Simple.args = {
    iconsOption: false,
};