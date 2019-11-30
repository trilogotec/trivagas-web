import React from 'react';
import OpportunitiesList from './OpportunitiesList';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default {
  title: 'OpportunitiesList',
};

const defaultProps = {
  loading: false,
  opportunities: [],
};

const opportunities = [{
  company: {
    id: 1,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sindresorhus/128.jpg',
    name: 'Trivagas',
    region: 'Fortaleza, Ceará, Brasil',
  },
  title: 'UI/UX Designer',
  description: 'DailyRounds is Indias largest Doctor network. (Think StackOverflow for Doctors) Over 500,000+ Doctors, nurses and other healthcare practitioners DailyRounds is Indias largest Doctor network. (Think StackOverflow for Doctors) Over 500,000+ Doctors, nurses and other healthcare practitioners',
  workType: 'Full time',
  createdAt: 'Há um dia',
}, {
  company: {
    id: 1,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sindresorhus/128.jpg',
    name: 'Trivagas',
    region: 'Fortaleza, Ceará, Brasil',
  },
  title: 'UI/UX Designer',
  description: 'DailyRounds is Indias largest Doctor network. (Think StackOverflow for Doctors) Over 500,000+ Doctors, nurses and other healthcare practitioners DailyRounds is Indias largest Doctor network. (Think StackOverflow for Doctors) Over 500,000+ Doctors, nurses and other healthcare practitioners',
  workType: 'Full time',
  createdAt: 'Há um dia',
}];

export const withDefault = () => <OpportunitiesList {...defaultProps} />;

export const withData = () => (
  <OpportunitiesList
    {...defaultProps}
    opportunities={opportunities}
  />
);

export const withLoading = () => (
  <OpportunitiesList
    {...defaultProps}
    loading={true}
  />
);
export const withLayoutImageHeader = () => (
  <>
    <Header />
    <OpportunitiesList
      {...defaultProps}
      opportunities={opportunities}
    />
    <Footer />
  </>
);