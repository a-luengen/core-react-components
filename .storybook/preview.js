
import { muiTheme } from 'storybook-addon-material-ui';
import { BaseThemeOptions } from '../src/theme/BaseTheme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  muiTheme([BaseThemeOptions])
];