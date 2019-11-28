import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Testing Footer Component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });
});