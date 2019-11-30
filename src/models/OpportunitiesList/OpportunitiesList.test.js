import Immutable from 'seamless-immutable';
import OpportunitiesListModel from './OpportunitiesList.model';

const defaultState = Immutable({
  loading: false,
  opportunities: [],
});

describe("OpportunitiesListModel model", () => {
  it('should handle startLoading', () => {
    const expectedState = defaultState
      .set('loading', true);

    expect(OpportunitiesListModel.reducers.startLoading(defaultState)).toEqual(expectedState);
  });

  it('should handle stopLoading', () => {
    const state = defaultState.set('loading', true);
    const expectedState = defaultState.set('loading', false);

    expect(OpportunitiesListModel.reducers.stopLoading(state)).toEqual(expectedState);
  });

  it('should handle setOpportunities', () => {
    const payload = [{
      id: 1,
      title: 'title',
    }];
    const expectedState = defaultState.set('opportunities', payload);
    
    expect(OpportunitiesListModel.reducers.setOpportunities(defaultState, payload)).toEqual(expectedState);
  });
});
