import React, {FC, Reducer} from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import CustomButton from '../atoms/CustomButton';
import { ArticleData } from '../data';

export interface ArticleInputProps {
    articleNames?: Array<String>,
    onAddArticle: (article: ArticleData) => void
}

interface IAction {
    type: string,
    value?: string | number
}
const INITIAL_ARTICLE_INPUT_STATE: ArticleData = {
    name: '',
    price: 0.0,
    amount: 1
}

const reducer = (state: ArticleData, action: IAction) => {
    if (action.type === 'reset')
        return INITIAL_ARTICLE_INPUT_STATE;

    const result: ArticleData = {...state};
    if (action.value)
        result[action.type] = action.value;
    return result;
}
  
const ArticleInput: FC<ArticleInputProps> = ({
    articleNames, 
    onAddArticle
}) => {
    const [state, dispatch] = React
        .useReducer<Reducer<ArticleData, IAction>, ArticleData>(
            reducer, 
            INITIAL_ARTICLE_INPUT_STATE, 
            () => INITIAL_ARTICLE_INPUT_STATE
        );
    const [autoCompleteVals, setAutoCompleteVals] = React.useState(articleNames);
    let btnRef: React.RefObject<HTMLInputElement> = React.useRef(null);
  
    const handleOnAddArticle = () => {
        const newArticle = {
            ...state
        };
        dispatch({type: 'reset'})
        onAddArticle(newArticle);
        if(btnRef.current) btnRef.current.focus();
    }
  
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
          options={autoCompleteVals || []}
          value={state.name}
          onInputChange={(e, value) => { 
              console.log("InputChange Name", e, value);
              dispatch({type: 'name', value})
              if(articleNames)
                setAutoCompleteVals(
                    articleNames.filter(v => v.startsWith(value))
                );
          }}
          renderInput={(params) => (
            <TextField 
              inputRef={btnRef}
              style={{width: '100%'}}
              label="Article Name"
              margin="dense"
              variant="outlined" 
              {...params} 
            />
          )}
        />
        <TextField 
          style={{width: 120}} 
          value={state.price}
          label="Price" 
          margin="dense" 
          variant="outlined" 
          type="number"
          onChange={(e) => 
            dispatch({type: 'price', value: parseFloat(e.target.value)})
          }
        />
        <TextField 
          style={{width: 120}} 
          value={state.amount}
          label="Amount" 
          margin="dense" 
          variant="outlined" 
          type="number"
          onChange={(e) => dispatch({type: 'amount', value: parseInt(e.target.value)})}
        />
        <CustomButton
          title="Add"
          onClick={handleOnAddArticle}
        />
      </div>
    );
}

export default ArticleInput;
  