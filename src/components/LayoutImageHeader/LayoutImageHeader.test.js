import React from 'react';
import { shallow } from 'enzyme';
import LayoutImageHeader from './LayoutImageHeader';

describe('Testing LayoutImageHeader Component', () => {
  it('renders without crashing', () => {
    shallow(<LayoutImageHeader />);
  });
});