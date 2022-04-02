import React from 'react';
import { ReceiptData } from '../data';
import { Backdrop, Fade, makeStyles, Theme, Modal, Paper, createStyles, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import CustomButton from '../atoms/CustomButton';
import ArticleInput from '../molecules/ArticleInput';


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
  articleNames = []
}) => {
  const classes = useStyles();

  const [receiptData, setReceiptData] = React.useState<ReceiptData>({
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
          {receiptData.articleList.map((article) => {
            return (
              <div key={article.name}>
                {article.name}, {article.price}, {article.amount}
              </div>
            );
          })}
          <ArticleInput articleNames={articleNames} onAddArticle={(article) => {
            receiptData.articleList.push(article);
            setReceiptData({
              ...receiptData
            })
          }}/>
          <CustomButton title="Add" onClick={() => onAddReceipt(receiptData)}/>
        </Paper>
      </Fade>
    </Modal>
  ); 
}


export default AddReceiptModal;