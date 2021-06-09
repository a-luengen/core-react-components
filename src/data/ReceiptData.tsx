import { ArticleData } from './ArticleData';

export interface ReceiptData {
  storeName: string;
  receiptId: string;
  date: string;
  sum: Number;
  articleList: Array<ArticleData>;
}

export const ExampleData = [{
  storeName: "LIDL",
  receiptId: "0aslkjas-asdfnas-f-das",
  date: new Date(2021, 10, 3).toString(),
  sum: 52.34,
  articleList: [],
}, {
  storeName: "ALDI",
  receiptId: "0asddlkjas-asdfnas-f-dasdawasas",
  date: new Date(2021, 3, 31).toString(),
  sum: 114.34,
  articleList: [],
}, {
  storeName: "Alnatura",
  receiptId: "some-fancy-id-guid-stufff-dasdawasas",
  date: new Date(2020, 3, 31).toString(),
  sum: 4.34,
  articleList: [],
}];