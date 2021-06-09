import React from 'react';
import { ReceiptData } from '../data';
import { Backdrop, Fade, makeStyles, Theme, Modal, Paper, createStyles, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import CustomButton from '../atoms/CustomButton';


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      padding: theme.spacing(2, 4, 3),
      minWidth: '50%',
    }
  }),
);

export interface ArticleInputProps {
  articleNames: Array<String>,
}

const ArticleInputComponent: React.FC<ArticleInputProps> = ({articleNames, ...props}) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0.0);
  const [amount, setAmount] = React.useState(1);
  
  return (
    <div style={{
      display: 'flex',
      flex: 1, 
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'center',
      borderStyle: 'solid', 
      borderWidth: 1, 
      borderColor: 'black'
    }}>
      <Autocomplete 
        style={{width: '50%'}}
        freeSolo
        id="auto-complete-article-name"
        options={articleNames}
        renderInput={(params) => (
          <TextField 
            style={{width: '100%'}}
            label="Article Name"
            defaultValue={name}
            margin="dense" 
            onChange={(e) => setName(e.target.value)}
            variant="outlined" 
            {...params} 
          />
        )}
      />
      <TextField 
        style={{width: 120}} 
        defaultValue={price} 
        label="Price" 
        margin="dense" 
        variant="outlined" 
        type="number"
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />
      <TextField 
        style={{width: 120}} 
        defaultValue={amount} 
        label="Amount" 
        margin="dense" 
        variant="outlined" 
        type="number"
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
    </div>
  );
}

export interface AddReceiptModalProps {
  open: boolean,
  storeNames?: Array<string>,
  articleNames?: Array<string>,
  onAddReceipt: (data: ReceiptData) => void;
  onHandleClose: () => void;
}

const AddReceiptModal: React.FC<AddReceiptModalProps> = ({
  open, 
  onAddReceipt,
  onHandleClose, 
  storeNames = [], 
  articleNames = [],
  ...props
}) => {
  const classes = useStyles();

  const [receiptData, setArticles] = React.useState<ReceiptData>({
    storeName: "Store Name",
    receiptId: "",
    date: Date.now().toLocaleString(),
    sum: 0.0,
    articleList: []
  });

  return (
    <Modal
      className={classes.modal}
      open={open}
      closeAfterTransition
      onClose={onHandleClose}
      BackdropComponent={Backdrop}
      BackdropProps={{timeout: 500}}
    >
      <Fade in={open}>
        <Paper className={classes.paper}>
          <p>Add new Receipt</p>
          <p>{receiptData.sum} €</p>
          <Autocomplete 
            freeSolo
            id="auto-complete-storename"
            options={storeNames}
            renderInput={(params) => (
              <TextField 
                {...params}
                label="Add Store Name"
                margin="dense"
                variant="outlined"
              />
            )}
          />
          <TextField 
            id="auto-complete-date"
            label="Receipt Date"
            variant="outlined"
            margin="dense"
            defaultValue={Date.parse(receiptData.date)}
            type="date"
            InputLabelProps={{
              shrink: true
            }}
          />
          <ArticleInputComponent articleNames={articleNames} />
          <CustomButton title="Add" onClick={() => onAddReceipt(receiptData)}/>
        </Paper>
      </Fade>
    </Modal>
  ); 
}


export default AddReceiptModal;