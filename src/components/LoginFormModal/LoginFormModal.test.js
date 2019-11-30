import React from 'react';
import { shallow } from 'enzyme';
import LoginFormModal from './LoginFormModal';

describe('Testing LoginFormModal Component', () => {
  it('renders without crashing', () => {
    shallow(<LoginFormModal />);
  });
});