import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../Commons/Header';
import Footer from '../../components/Footer/Footer';
import OpportunitiesList from '../../components/OpportunitiesList/OpportunitiesList';

export default function OpportunitiesListContainer() {
  const loading = useSelector(state => state.opportunitiesList.loading);
  const opportunities = useSelector(state => state.opportunitiesList.opportunities);

  const dispatch = useDispatch();

  const handleFindOpportunities = useCallback(() => {
    dispatch.opportunitiesList.findOpportunities();
  }, [dispatch]);

  useEffect(() => {
    handleFindOpportunities();
  }, [handleFindOpportunities]);

  return (
    <>
      <Header />
      <OpportunitiesList
        loading={loading}
        opportunities={opportunities}
      />
      <Footer />
    </>
  );
}