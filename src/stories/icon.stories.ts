import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { IconComponent } from 'src/app/icon/icon.component';
// import { categories } from 'src/app/icon/material-icons-list-json.json';
import { getIconList } from 'src/app/icon/icon-function';
import { HttpClientModule } from '@angular/common/http';

export default {
  title: 'Example/Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        IconComponent,
      ],
      imports: [BrowserAnimationsModule, MatIconModule, HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['outlined', 'filled']
      }
    }
  },
  parameters: {
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    'in-dsm': {
      versionFilePath: '',
      componentPath: ''
    }
    // ,
    // docs: {
    //   source: {
    //     type: 'code',
    //   }
    // }
  }
} as Meta;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: args,
});

export const Action = Template.bind({});
Action.argTypes = {
  label: {
    control: {
      type: 'select',
      options: getIconList('action')
    }
  }
}
Action.args = {
  label: 'edit'
};

export const AV = Template.bind({});
AV.args = {
  label: '4k'
};
AV.argTypes = {
  label: {
    control: {
      type: 'select',
      options: getIconList('av')
    }
  }
}

export const Communication = Template.bind({});
Communication.args = {
  label: 'alternate_email'
};
Communication.argTypes = {
  label: {
    control: {
      type: 'select',
      options: getIconList('communication')
    }
  }
}