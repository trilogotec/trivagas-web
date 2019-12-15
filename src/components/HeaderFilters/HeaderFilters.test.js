import React from 'react';
import { shallow } from 'enzyme';
import HeaderFilters from './HeaderFilters';

describe('Testing HeaderFilters Component', () => {
  it('renders without crashing', () => {
    shallow(<HeaderFilters />);
  });
});