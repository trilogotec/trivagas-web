import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Testing Login Component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });
});