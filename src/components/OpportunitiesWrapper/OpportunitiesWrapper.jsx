import React from 'react';

import styles from './OpportunitiesWrapper.module.scss';
import OpportunitiesList from '../../containers/Opportunities/OpportunitiesList';
import OpportunityDetails from '../../containers/Opportunities/OpportunityDetails';

export default function OpportunityWrapper(props) {
  return (
    <div className={styles.OpportunityWrapper}>
      <OpportunitiesList />
      <OpportunityDetails />
    </div>
  );
}
