import Immutable from 'seamless-immutable';
import configureEffect from './OpportunitiesList.effects';

export default {
  state: Immutable({
    loading: false,
    opportunities: [],
  }),
  reducers: {
    startLoading: state => state.set('loading', true),
    stopLoading: state => state.set('loading', false),
    setOpportunities: (state, opportunities) => state.set('opportunities', opportunities),
  },
  effects: configureEffect,
};