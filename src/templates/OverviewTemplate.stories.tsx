import React from 'react';

import OverviewTemplate from './OverviewTemplate';
import CustomHeader from '../organisms/CustomHeader';

export default {
  title: 'Templates/OverviewTemplate',
  component: OverviewTemplate
}

interface TestContentProps {
  h: number,
  w: number,
}

const TestContent: React.FC<TestContentProps> = ({h, w, ...props}) => {
  return (
    <div style={{height: h, width: w, backgroundColor: 'grey'}}>Test Content2</div>
  );
}

export const SimpleExample = () => (
  <OverviewTemplate 
    headerComponent={
      <CustomHeader 
        title="Test"
      />
    }
    leftContent={
      <TestContent h={300} w={60}/>
    }
    rightContent={
      <TestContent h={250} w={210} />
    }
  />
);

export const WithOverflowExample = () => (
  <OverviewTemplate 
    headerComponent={
      <CustomHeader title="Test" />
    }
    leftContent={
      <TestContent h={300} w={1000} />
    }
    rightContent={
      <TestContent h={40} w={300} />
    }
  />
);