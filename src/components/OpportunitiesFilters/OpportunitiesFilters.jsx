import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Dropdown } from 'antd';
import { useMediaQuery } from 'react-responsive'

import styles from './OpportunitiesFilters.module.scss';

export default function OpportunitiesFilters(props) {
  const isMobile = useMediaQuery({ maxWidth: 540 });

  return (
    <div className={styles.OpportunitiesFilters}>
      <div className={styles.Container}>
        <Icon className={styles.IconSearch} type="search" />
        <input
          className={styles.InputSearch}
          placeholder="Buscar trívagas por palavra-chave"
          allowClear
        />

        {!isMobile && (
          <>
            <div className={styles.SelectContainer}>
              <span className="selectTitle">Todos os tipos de trabalho</span>
              <Icon className="iconDown" type="down" />
            </div>
            <span className={styles.Divider} />
            <div className={styles.SelectContainer}>
              <span className="selectTitle">Tds. campos de atuação</span>
              <Icon className="iconDown" type="down" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

OpportunitiesFilters.defaultProps = {};
OpportunitiesFilters.propTypes = {};