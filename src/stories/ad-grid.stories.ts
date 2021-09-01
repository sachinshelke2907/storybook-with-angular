import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AgGridModule } from 'ag-grid-angular';
import { MatIconModule } from '@angular/material/icon';
import { AgGridComponent, BlueBandComponent, SimpleComponent } from 'projects/dogma-designs/src/public-api';

export default {
    title: 'Example/AG Grid',
    component: AgGridComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                SimpleComponent,
                BlueBandComponent
            ],
            imports: [
                MatIconModule,
                AgGridModule.withComponents([])
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

const Template: Story<AgGridComponent> = (args: AgGridComponent) => ({
    props: args,
});

export const Simple = Template.bind({});
Simple.args = {};