import * as React from 'react';
import { 
  DataGrid, 
  GridRowSelectedParams, 
  GridRowParams
} from '@material-ui/data-grid';

import ReceiptData from '../data/ReceiptData';

export interface ReceiptDataProps {
  /**
   * rows
   */
  data: Array<ReceiptData>;

  isLoading?: boolean;

  onRowSelected?: (param: GridRowSelectedParams) => void;

  onRowClick?: (param: GridRowParams, event: React.MouseEvent) => void;
}

const columns = [
  { field: 'receiptId', headerName: 'ID', width: 300 },
  { field: 'storeName', headerName: 'Supermarkt', width: 150 },
  { field: 'date', headerName: 'Datum', width: 300 },
  { field: 'sum', headerName: 'Summe', width: 150, type: 'number' }
];


const ReceiptDataTable: React.FC<ReceiptDataProps> = ({
  data, 
  isLoading,
  onRowSelected,
  onRowClick,
  ...props
}) => {
  data = data.map((el, index) => {
    return {id: el.receiptId, ...el}
  });
  return (
    <DataGrid 
      disableSelectionOnClick={true}
      onRowSelected={onRowSelected}
      onRowClick={onRowClick}
      loading={isLoading}
      rows={data} 
      columns={columns} 
      pageSize={10} 
      autoPageSize
      checkboxSelection
    />
  );
}

export default ReceiptDataTable;