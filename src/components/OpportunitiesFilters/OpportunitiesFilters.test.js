import React from 'react';
import { shallow } from 'enzyme';
import OpportunitiesFilters from './OpportunitiesFilters';

describe('Testing OpportunitiesFilters Component', () => {
  it('renders without crashing', () => {
    shallow(<OpportunitiesFilters />);
  });
});