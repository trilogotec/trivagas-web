import Immutable from 'seamless-immutable';
import configureEffect from './Authentication.effects';

export default {
  state: Immutable({
    count: 0,
  }),
  reducers: {
    increment: (state, payload) => state.set('count', state.count + payload)
  },
  effects: configureEffect,
};