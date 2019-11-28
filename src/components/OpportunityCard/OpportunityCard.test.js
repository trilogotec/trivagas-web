import React from 'react';
import { shallow } from 'enzyme';
import OpportunityCard from './OpportunityCard';

describe('Testing OpportunityCard Component', () => {
  it('renders without crashing', () => {
    shallow(<OpportunityCard />);
  });
});