import { createStyles, makeStyles, Theme, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';

export interface SpendingsOverviewProps {
  headerComponent?: JSX.Element,
  leftContent?: JSX.Element,
  rightContent?: JSX.Element,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    contentContainer: {
      display: 'flex',
      height: '100%',
      margin: theme.spacing(1),
      alignItems: 'start',
      justifyContent: 'center',
      overflow: 'hidden',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 3,
      borderColor: theme.palette.primary.light,
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
    }
  }),
);

const OverviewTemplate: React.FC<SpendingsOverviewProps> = (props: SpendingsOverviewProps) => {
  const classes = useStyles();
  const head = props.headerComponent ? props.headerComponent : null;
  const left = props.leftContent ? props.leftContent : null;
  const right = props.rightContent ? props.rightContent : null;

  return (
    <div className={classes.root}>
      {head}
      <Grid 
        container 
        spacing={2} 
        direction='row'
      >
        <Grid item md>
          <Box className={classes.contentContainer}>
            {left}
          </Box>
        </Grid>
        <Grid item md>
          <Box className={classes.contentContainer}>
            {right}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}


export default OverviewTemplate;