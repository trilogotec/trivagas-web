import Http from './Http';

export function find() {
  return Promise.resolve([{
    company: {
      id: 1,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sindresorhus/128.jpg',
      name: 'Trilogo',
      region: 'Fortaleza, Ceará, Brasil',
    },
    title: 'UI/UX Designer',
    description: 'DailyRounds is Indias largest Doctor network. (Think StackOverflow for Doctors) Over 500,000+ Doctors, nurses and other healthcare practitioners DailyRounds is Indias largest Doctor network. (Think StackOverflow for Doctors) Over 500,000+ Doctors, nurses and other healthcare practitioners',
    workType: 'Full time',
    createdAt: 'Há um dia',
  }]);
}