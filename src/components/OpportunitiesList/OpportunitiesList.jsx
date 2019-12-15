import React from 'react';
import PropTypes from 'prop-types';
import { List, Row, Col } from 'antd';

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
          <div className={styles.FiltersContainer}>
            
          </div>

          <Row>
            <Col span={8}>
              <List
                loading={loading}
                dataSource={opportunities}
                renderItem={item => (
                  <List.Item>
                    <OpportunityCard {...item} />
                  </ List.Item>
                )}
              />
            </Col>

            <Col span={16}>
              Hello World!
            </Col>
          </Row>
        </div>
    </div>
  );
}

OpportunitiesList.defaultProps = {};
OpportunitiesList.propTypes = {
  loading: PropTypes.bool.isRequired,
  opportunities: PropTypes.array.isRequired,
};