import React, { useEffect, useCallback } from 'react';
import { List } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import OpportunityCard from '../../components/OpportunityCard/OpportunityCard';
// import OpportunitiesList from '../components/OpportunitiesList/OpportunitiesList';

export default function OpportunitiesListContainer() {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={[{}, {}, {}, {}, {}, {}]}
      renderItem={item => <OpportunityCard />}
    />
  );
}