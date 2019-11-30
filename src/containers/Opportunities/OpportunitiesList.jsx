import React, { useEffect, useCallback } from 'react';
import { List } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../Commons/Header';
import Footer from '../../components/Footer/Footer';
import OpportunitiesList from '../../components/OpportunitiesList/OpportunitiesList';

export default function OpportunitiesListContainer() {
  return (
    <>
      <Header />
      <OpportunitiesList />
      <Footer />
    </>
  );
}