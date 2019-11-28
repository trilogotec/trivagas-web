import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Testing Header Component', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
});