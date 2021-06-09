import * as React from 'react';

import ListItem from '@material-ui/core/ListItem';
import { 
  ListItemText, 
  ListItemIcon, 
  Checkbox, 
  makeStyles, 
  Theme, 
  createStyles 
} from '@material-ui/core';

import {ReceiptData} from '../data/ReceiptData';

import { Typography } from '@material-ui/core';


export interface ReceiptListItemProps{
  data: ReceiptData;
  selected: boolean;
  checked: boolean;
  onClick?: (data: ReceiptData) => void;
  onChecked?: () => void;
}

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      borderWidth: 1,
      borderColor: theme.palette.primary.main,
      borderStyle: 'solid',
      borderRadius: 5,
    },
  }),
); 


const ReceiptListItem: React.FC<ReceiptListItemProps> = ({
  data, 
  selected, 
  checked,
  onClick, 
  onChecked,
}) => {
  const classes = useStyles();
  return (
    <ListItem 
      classes={classes}
      button 
      dense
      selected={selected}
      onClick={() => {
        if (onClick)
          onClick(data)
      }}
    >
      <ListItemIcon>
        <Checkbox 
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          onChange={onChecked}
        />
      </ListItemIcon>
      <ListItemText 
        primary={data.storeName}
      />
      <ListItemText 
        primary={data.receiptId}
      />
      <ListItemText 
        primary={
          <Typography variant="subtitle2" >
            {data.sum + " €"}
          </Typography>
          }
      />
      <ListItemText 
        primary={data.date.toDateString()}
      />
    </ListItem>
  );
}

export default ReceiptListItem;