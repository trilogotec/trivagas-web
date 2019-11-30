import React, { useEffect, useCallback } from 'react';
import { List } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../Commons/Header';
import Footer from '../../components/Footer/Footer';
import OpportunityDetails from '../../components/OpportunityDetails/OpportunityDetails';

export default function OpportunityDetailsContainer() {
  return (
    <>
      <Header />
      <OpportunityDetails />
      <Footer />
    </>
  );
}