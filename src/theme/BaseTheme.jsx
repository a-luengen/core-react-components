import { createMuiTheme } from '@material-ui/core/styles';


export const BaseThemeOptions = {
  themeName: 'Custom Theme 1',
  palette: {
    primary: {
      light: '#e4f3ff',
      main: '#b9e1ff',
      dark: '#80c8ff',
    },
  }
};

const MuiBaseTheme = createMuiTheme(BaseThemeOptions);

export default MuiBaseTheme;