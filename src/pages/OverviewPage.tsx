import React from 'react';
import { CustomHeader, ReceiptOverview } from '../organisms';
import { OverviewTemplate } from '../templates';
import { ExampleData } from '../data/ReceiptData';

const OverviewPage = () => {
  return (
      <div>
        <OverviewTemplate 
          headerComponent={
            <CustomHeader title="Overview" />
          }
          leftContent={
            <ReceiptOverview 
              data={ExampleData} 
              onAddReceipt={() => console.log("ADDING A RECEIPT")}
            />
          }
          rightContent={
            <div>Statistics</div>
          }
        />
      </div>
  );
}

export default OverviewPage;