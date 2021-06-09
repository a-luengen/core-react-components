import * as React from 'react';

import ReceiptDataTable from './ReceiptDataTable';
import ReceiptListToolbar from '../molecules/ReceiptListToolbar';
import { ReceiptData } from '../data/ReceiptData';

export interface ReceiptOverviewProps {
  /**
   * Data
   */
  data: Array<ReceiptData>;

  onAddReceipt: () => void;
}

const ReceiptOverview: React.FC<ReceiptOverviewProps> = ({
  data,
  onAddReceipt
}) => {

  let [filter, setFilter] = React.useState("");

  const storeNames = data.map(el => el.storeName);
  const listData = filter ? data.filter(el => filter === el.storeName) : data;
  return (
    <div style={{ width: '100%', minHeight: 400, height: 400}}>
      <ReceiptListToolbar 
        onAddReceipt={onAddReceipt}
        autocompleteOptions={storeNames}
        onSearchChange={(event, value, reason) => setFilter(value)}
      />
      <ReceiptDataTable 
        isLoading={false}
        data={listData}
      />
    </div>
  );
}

export default ReceiptOverview;