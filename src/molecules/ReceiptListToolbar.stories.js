import ReceiptListToolbar from './ReceiptListToolbar';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Molecules/ReceiptListToolbar',
  component: ReceiptListToolbar
}


export const Default = () => (
  <ReceiptListToolbar 
    onAddReceipt={action('Add Receipt')} 
    onSearchChange={action('Search Changed')}
    autocompleteOptions={["test1", "test2"]}
  />
);