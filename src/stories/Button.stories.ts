import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import {MatButtonModule} from '@angular/material/button';
import { ButtonComponent } from 'src/app/button/button.component';
import { PrimaryButtonComponent } from 'src/app/button/primary/primary.component';
import { SecondaryButtonComponent } from 'src/app/button/secondary/secondary.component';
import { TertiaryButtonComponent } from 'src/app/button/tertiary/tertiary.component';


export default {
    title: 'Example/Button',
    component: ButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [
              PrimaryButtonComponent,
              SecondaryButtonComponent,
              TertiaryButtonComponent
            ],
            imports: [
              BrowserAnimationsModule,
              MatButtonModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }),
    ],
    parameters: {
      // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
      'in-dsm': {
        id: '6089ce8af30bd43d693b6082',
        versionFilePath: 'src/app/versionFile.json',
        componentPath: 'src/app/button/button.component'
      }
    }
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {};


export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: 'secondary'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  buttonType: 'tertiary'
};

