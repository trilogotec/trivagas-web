import React from 'react';
import Immutable from 'seamless-immutable';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import OpportunitiesList from '../OpportunitiesList';

const defaultState = Immutable({
  opportunitiesList: {
    loading: false,
    opportunities: [],
  },
});

const storeFake = state => ({
  default: jest.fn(),
  subscribe: jest.fn(),
  dispatch: {
    opportunitiesList: {
      findOpportunities: jest.fn(),
    }
  },
  getState: () => state,
});


describe('Testing OpportunitiesList Component', () => {
  let wrapper;
  let container;

  beforeEach(() => {
    jest.resetAllMocks();

    const store = storeFake(defaultState);

    wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <OpportunitiesList />
        </Provider>
      </BrowserRouter>,
    );

    container = wrapper.find(OpportunitiesList);
  });


  it('should render both the container and the component ', () => {
    expect(container.length).toBeTruthy();
  });
});