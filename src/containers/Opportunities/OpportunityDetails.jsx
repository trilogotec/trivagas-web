import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../Commons/Header';
import Footer from '../../components/Footer/Footer';
import OpportunityDetails from '../../components/OpportunityDetails/OpportunityDetails';

export default function OpportunityDetailsContainer() {
  const loading = useSelector(state => state.opportunityDetails.loading);
  const data = useSelector(state => state.opportunityDetails.data);

  const dispatch = useDispatch();

  const handleFetchOpportunity = useCallback(() => {
    dispatch.opportunityDetails.fetchOpportunity();
  }, [dispatch]);

  useEffect(() => {
    handleFetchOpportunity();
  }, [handleFetchOpportunity]);
  
  
  return (
    <OpportunityDetails 
      loading={loading}
      data={data}
    />
  );
}