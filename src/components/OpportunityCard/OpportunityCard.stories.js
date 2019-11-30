import React from 'react';
import { List } from 'antd';
import OpportunityCard from './OpportunityCard';

export default {
  title: 'OpportunityCard',
};

export const withDefault = () => <OpportunityCard />;

export const withDefaultInGrid = () => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 4,
      xxl: 3,
    }}
    dataSource={[{}, {}, {}, {}, {}, {}]}
    renderItem={item => (
      <List.Item>
        <OpportunityCard />
      </ List.Item>
    )}
  />
);