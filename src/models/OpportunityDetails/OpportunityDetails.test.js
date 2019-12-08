import Immutable from 'seamless-immutable';
import OpportunityDetailsModel from './OpportunityDetails.model';

const defaultState = Immutable({
  loading: false,
  opportunities: [],
});

describe("OpportunityDetailsModel model", () => {
  it('should handle startLoading', () => {
    const expectedState = defaultState
      .set('loading', true);

    expect(OpportunityDetailsModel.reducers.startLoading(defaultState)).toEqual(expectedState);
  });

  it('should handle stopLoading', () => {
    const state = defaultState.set('loading', true);
    const expectedState = defaultState.set('loading', false);

    expect(OpportunityDetailsModel.reducers.stopLoading(state)).toEqual(expectedState);
  });

  it('should handle setOpportunityData', () => {
    const payload = {
      id: 1,
      title: 'title',
    };
    const expectedState = defaultState.set('data', payload);
    
    expect(OpportunityDetailsModel.reducers.setOpportunityData(defaultState, payload)).toEqual(expectedState);
  });
});
