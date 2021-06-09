import { createMuiTheme } from '@material-ui/core/styles';


export const BaseThemeOptions = {
  themeName: 'Custom Theme 1',
  palette: {
    primary: {
      light: '#e4f3ff',
      main: '#26c6da',
      dark: '#00838f',
    },
  }
};

const MuiBaseTheme = createMuiTheme(BaseThemeOptions);

export default MuiBaseTheme;