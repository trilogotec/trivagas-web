import Immutable from 'seamless-immutable';
import configureEffect from './OpportunityDetails.effects';

export default {
  state: Immutable({
    loading: false,
    data: {
      company: {
        id: 1,
        avatar: '',
        name: '',
        region: '',
      },
      title: '',
      description: 'DailyRounds is Indias largest Doctor network. (Think StackOverflow for Doctors) Over 500,000+ Doctors, nurses and other healthcare practitioners DailyRounds is Indias largest Doctor network. (Think StackOverflow for Doctors) Over 500,000+ Doctors, nurses and other healthcare practitioners',
      workType: 'Full time',
      createdAt: 'Há um dia',
    },
  }),
  reducers: {
    startLoading: state => state.set('loading', true),
    stopLoading: state => state.set('loading', false),
    setOpportunityData: (state, data) => state.set('data', data),
  },
  effects: configureEffect,
};


