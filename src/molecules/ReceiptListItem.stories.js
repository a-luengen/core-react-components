import React from 'react';
import ReceiptListItem from "./ReceiptListitem"

export default {
  title: 'Molecules/ReceiptListItem',
  component: ReceiptListItem,
}

const ExampleData = {
  storeName: "TestStore",
  receiptId: "salsf-asdf-a-sefasdfs--asdfase",
  date: new Date(2021, 10, 10),
  sum: 55.67,
  articleList: [],
}

export const ExampleReceiptListItem = () => (
  <ReceiptListItem data={ExampleData}/>
);

export const ReceiptListItemChecked = () => (
  <ReceiptListItem data={ExampleData} checked={true}/>
);


export const ReceiptListItemWithClick = () => {
  
  let [isChecked, setChecked] = React.useState(false);
  
  return (
    <ReceiptListItem 
      data={ExampleData} 
      onClick={() => setChecked(!isChecked)} 
      checked={isChecked}
    />
  );
};