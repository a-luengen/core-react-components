import ReceiptOverview from './ReceiptOverview'
import { ExampleData } from '../data/ReceiptData';

export default {
  title: 'Organisms/ReceiptOverview',
  component: ReceiptOverview
}



export const Default = () => <ReceiptOverview data={ExampleData} />