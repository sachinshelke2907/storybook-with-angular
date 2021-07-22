import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AgGridModule } from 'ag-grid-angular';
import AgGridComponent from 'src/app/ag-grid/ag-grid.component';
import { MatIconModule } from '@angular/material/icon';

import { SimpleComponent } from 'src/app/ag-grid/simple/simple.component';
import { BlueBandComponent } from 'src/app/blue-band/blue-band.component';

export default {
    title: 'Example/AG Grid',
    component: AgGridComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                SimpleComponent,BlueBandComponent
            ],
            imports: [
                MatIconModule,
                AgGridModule.withComponents([])
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }),
    ],
} as Meta;

const Template: Story<AgGridComponent> = (args: AgGridComponent) => ({
    props: args,
});

export const Simple = Template.bind({});
Simple.args = {};