import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

import OpportunityCard from '../OpportunityCard/OpportunityCard';

import styles from './OpportunitiesList.module.scss';

export default function OpportunitiesList(props) {
  const {
    loading,
    opportunities,
  } = props;

  return (
    <div className={styles.OpportunitiesList}>
      <div className={styles.ListContent}>
        <List
          loading={loading}
          dataSource={opportunities}
          split={false}
          renderItem={item => (
            <List.Item>
              <OpportunityCard {...item} />
            </ List.Item>
          )}
        />
      </div>
    </div>
  );
}

OpportunitiesList.defaultProps = {};
OpportunitiesList.propTypes = {
  loading: PropTypes.bool.isRequired,
  opportunities: PropTypes.array.isRequired,
};