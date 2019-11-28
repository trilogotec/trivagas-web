import Immutable from 'seamless-immutable';
import OpportunitiesListModel from './OpportunitiesList.model';


const defaultState = Immutable({
  count: 0,
});

describe("OpportunitiesListModel model", () => {
  it("reducer: my increment should do something", () => {
    const payload = 10;
    const expectState = { count: 10 };

    store.dispatch.opportunitiesList.increment(payload);

    expect(store.getState().opportunitiesList).toBe(expectState);
    expect(OpportunitiesListModel.reducers.increment(defaultState, payload)).toEqual(expectState);
  });
});
