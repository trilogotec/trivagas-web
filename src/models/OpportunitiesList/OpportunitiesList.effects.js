import { parseError } from '../../services/Http';
import * as Opportunities from '../../services/Opportunities.service';

export const findOpportunities = dispatch => {
  const { opportunitiesList } = dispatch;

  return async (payload, rootState) => {
    try {
      opportunitiesList.startLoading();
      const response = await Opportunities.find();
      opportunitiesList.setOpportunities(response);  
    } catch(err) {
      parseError(err);
    } finally {
      opportunitiesList.stopLoading();
    }
  };
}

export default (dispatch) => ({
  findOpportunities: findOpportunities(dispatch),
});