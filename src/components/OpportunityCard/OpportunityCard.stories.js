import React from 'react';
import { List } from 'antd';
import OpportunityCard from './OpportunityCard';

export default {
  title: 'OpportunityCard',
};

const defaultProps = {
  company: {
    id: 1,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sindresorhus/128.jpg',
    name: 'Trilogo',
    region: 'Fortaleza, Ceará, Brasil',
  },
  title: 'UI/UX Designer',
  description: 'DailyRounds is Indias largest Doctor network. (Think StackOverflow for Doctors) Over 500,000+ Doctors, nurses and other healthcare practitioners DailyRounds is Indias largest Doctor network. (Think StackOverflow for Doctors) Over 500,000+ Doctors, nurses and other healthcare practitioners',
  workType: 'Full time',
  createdAt: 'Há um dia',
};

export const withDefault = () => <OpportunityCard {...defaultProps} />;

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
        <OpportunityCard {...defaultProps} />
      </ List.Item>
    )}
  />
);