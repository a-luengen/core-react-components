import React from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../atoms/CustomButton';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';

export interface ReceiptListToolbarProps {
  /**
   * Function triggered when new Receipt 
   * should be added.
   */
  onAddReceipt: () => void;

  /**
   * Optional Strings to search for.
   */
  autocompleteOptions: Array<string>;

  /**
   * 
   */
  onSearchChange: (event: object, value: any, reason: string) => void;
}

const useStyle = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      minWidth: 300,
      width: 300,
    }
  }),
);

const ReceiptListToolbar: React.FC<ReceiptListToolbarProps> = ({
  onAddReceipt,
  autocompleteOptions,
  onSearchChange,
  ...props
}) => {

  const classes = useStyle();

  return (
    <div style={{ width: '100%' }}> 
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Autocomplete
          size="small"
          freeSolo={true}
          autoComplete={true}
          autoHighlight={true}
          classes={classes}
          options={autocompleteOptions}
          onChange={onSearchChange}
          renderInput={(params) => (
            <TextField 
              {...params}
              label="Search receipts"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />
        <CustomButton 
          title="Add Receipt" 
          onClick={onAddReceipt}
        />
      </Box>
    </div>
  );
};

export default ReceiptListToolbar;