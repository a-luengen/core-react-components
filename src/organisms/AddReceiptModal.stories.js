import React from 'react';
import AddReceiptModal from './AddReceiptModal';


export default {
  title: 'organisms/AddReceiptModal',
  component: AddReceiptModal,
  argTypes: {
    open: {
      options: [true, false],
      control: {type: 'radio'}
    },
    onHandleClose: {
      action: 'ClosingModal'
    }
  }
}

export const Default = (args) => <AddReceiptModal {...args} />
Default.args = {open: true}