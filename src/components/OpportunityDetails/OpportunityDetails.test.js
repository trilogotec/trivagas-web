import React from 'react';
import { shallow } from 'enzyme';
import OpportunityDetails from './OpportunityDetails';

const defaultProps = {
  loading: false,
  data: {
    company: {
      id: 1,
      avatar: '',
      name: '',
      region: '',
    },
    title: '',
    description: 'DailyRounds is Indias largest Doctor network. (Think StackOverflow for Doctors) Over 500,000+ Doctors, nurses and other healthcare practitioners DailyRounds is Indias largest Doctor network. (Think StackOverflow for Doctors) Over 500,000+ Doctors, nurses and other healthcare practitioners',
    workType: 'Full time',
    createdAt: 'Há um dia',
  },
};

describe('Testing OpportunityDetails Component', () => {
  it('renders without crashing', () => {
    shallow(<OpportunityDetails {...defaultProps} />);
  });
});