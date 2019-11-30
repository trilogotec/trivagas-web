import React from 'react';
import { shallow } from 'enzyme';
import OpportunitiesList from './OpportunitiesList';

const defaultProps = {
  loading: false,
  opportunities: [],
};

describe('Testing OpportunitiesList Component', () => {
  it('renders without crashing', () => {
    shallow(<OpportunitiesList {...defaultProps} />);
  });
});