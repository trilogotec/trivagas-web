import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

import LayoutImageHeader from '../LayoutImageHeader/LayoutImageHeader';
import OpportunitiesFilters from '../OpportunitiesFilters/OpportunitiesFilters';
import OpportunityCard from '../OpportunityCard/OpportunityCard';

import styles from './OpportunitiesList.module.scss';

export default function OpportunitiesList(props) {
  const {
    loading,
    opportunities,
  } = props;

  const optionsGrid = {
    gutter: 10,
    xs: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 4,
    xxl: 5,
  };

  return (
    <div className={styles.OpportunitiesList}>
      <LayoutImageHeader
        src="https://images.unsplash.com/photo-1414690165279-49ab0a9a7e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        title="Encontre trabalhos"
        description="Descubra seu próximo passo profissional, trabalho, frellance ou estágio."
      >
        <div className={styles.ListContent}>
          <div className={styles.FiltersContainer}>
            <OpportunitiesFilters

            />
          </div>
          <List
            grid={optionsGrid}
            loading={loading}
            dataSource={opportunities}
            renderItem={item => (
              <List.Item>
                <OpportunityCard {...item} />
              </ List.Item>
            )}
          />
        </div>
      </LayoutImageHeader>
    </div>
  );
}

OpportunitiesList.defaultProps = {};
OpportunitiesList.propTypes = {
  loading: PropTypes.bool.isRequired,
  opportunities: PropTypes.array.isRequired,
};