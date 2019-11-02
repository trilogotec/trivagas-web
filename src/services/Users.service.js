import Http from './Http';

export function createUser(user) {
  return Http.post('users', user);
}