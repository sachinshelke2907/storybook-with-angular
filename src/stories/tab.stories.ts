import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Story, Meta } from '@storybook/angular/types-6-0';
import {MatTabsModule} from '@angular/material/tabs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { TabsComponent } from 'src/app/tabs/tabs.component';

export default {
    title: 'Example/Tabs',
    component: TabsComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                TabsComponent,
            ],
            imports: [BrowserAnimationsModule, MatTabsModule],
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

const Template: Story<TabsComponent> = (args: TabsComponent) => ({
    props: args,
});

export const Simple = Template.bind({});
Simple.args = {};



