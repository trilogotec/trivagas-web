import React from 'react';
import { shallow } from 'enzyme';
import OpportunitiesList from './OpportunitiesList';

describe('Testing OpportunitiesList Component', () => {
  it('renders without crashing', () => {
    shallow(<OpportunitiesList />);
  });
});