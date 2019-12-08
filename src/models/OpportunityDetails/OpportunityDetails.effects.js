import { parseError } from '../../services/Http';
import * as OpportunityDetails from '../../services/OpportunityDetails.service';

export const fetchOpportunity = dispatch => {
  const { opportunityDetails } = dispatch;

  return async (payload, rootState) => {
    try {
      opportunityDetails.startLoading();
      const response = await OpportunityDetails.find();
      opportunityDetails.setOpportunityData(response);  
    } catch(err) {
      parseError(err);
    } finally {
      opportunityDetails.stopLoading();
    }
  };
}

export default (dispatch) => ({
  fetchOpportunity: fetchOpportunity(dispatch),
});