import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export interface CustomHeaderProps {
    title: string;
    logo?: React.FC | React.Component;
}


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    title: {
      flexGrow: 1,
    },
  }),
);

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  logo,
  ...props
}) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        {logo}
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomHeader;