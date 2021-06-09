import ReceiptDataTable from './ReceiptDataTable';
import { action } from '@storybook/addon-actions';
import { ExampleData } from '../data/ReceiptData';

export default {
  title: 'Organisms/ReceiptDataTable',
  component: ReceiptDataTable
}

const TestData = ExampleData;

export const Default = () => (
  <div style={{height: 400, width: '100%' }}>
    <ReceiptDataTable data={[]} />
  </div>
);

export const WithTestData = () => (
  <div style={{height: 400, width: '100%' }}>
    <ReceiptDataTable data={TestData} />
  </div>
);

export const WithSelectRowAction = () => (
  <div style={{ height: 400, width: '100%' }}>
    <ReceiptDataTable 
      data={TestData} 
      onRowSelected={action('OnRowSelected')}
    />
  </div>
);

export const WithSelectAndRowClickAction = () => (
  <div style={{ height: 400, width: '100%' }}>
    <ReceiptDataTable 
      data={TestData} 
      onRowSelected={action('OnRowSelected')}
      onRowClick={action('OnRowClick')}
    />
  </div>
);