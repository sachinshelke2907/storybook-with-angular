import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MatIconModule } from '@angular/material/icon';

import { BlueBandComponent } from 'src/app/blue-band/blue-band.component';

export default {
    title: 'Example/Blue Band',
    component: BlueBandComponent,
    decorators: [
        moduleMetadata({
            declarations: [

            ],
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
} as Meta;

const Template: Story<BlueBandComponent> = (args: BlueBandComponent) => ({
    props: args,
});

export const Simple = Template.bind({});
Simple.args = {
    iconsOption: false,
};