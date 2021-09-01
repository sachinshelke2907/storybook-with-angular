// import { setCompodocJson } from "@storybook/addon-docs/angular";
// import docJson from "../documentation.json";
// setCompodocJson(docJson);

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
//   docs: { inlineStories: true },
// }

import { withDsm } from '@invisionapp/dsm-storybook';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [withDsm];