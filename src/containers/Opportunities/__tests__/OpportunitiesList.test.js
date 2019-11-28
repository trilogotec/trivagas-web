import React from 'react';
import { shallow } from 'enzyme';
import OpportunitiesList from '../OpportunitiesList';

describe('Testing Header Component', () => {
  it('renders without crashing', () => {
    shallow(<OpportunitiesList />);
  });
});