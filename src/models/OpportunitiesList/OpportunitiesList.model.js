import Immutable from 'seamless-immutable';
import configureEffect from './OpportunitiesList.effects';

export default {
  state: Immutable({
    count: 0,
  }),
  reducers: {
    increment: (state, payload) => state.set('count', state.count + payload)
  },
  effects: configureEffect,
};