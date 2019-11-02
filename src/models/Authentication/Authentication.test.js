import Immutable from 'seamless-immutable';
import AuthenticationModel from './Authentication.model';

const defaultState = Immutable({
  count: 0,
});

describe("AuthenticationModel model", () => {
  it("reducer: my increment should do something", () => {
    const payload = 10;
    const expectState = { count: 10 };

    expect(AuthenticationModel.reducers.increment(defaultState, payload)).toEqual(expectState);
  });
});