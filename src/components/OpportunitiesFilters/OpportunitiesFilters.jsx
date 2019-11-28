import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Dropdown } from 'antd';

import styles from './OpportunitiesFilters.module.scss';

export default function OpportunitiesFilters(props) {
  return (
    <div className={styles.OpportunitiesFilters}>
      <div className="container">
        <Icon className="iconSearch" type="search" />
        <input
          className="inputSearch"
          placeholder="Buscar trívagas por palavra-chave"
          allowClear
        />
        <div className="selectContainer">
          <span className="selectTitle">Todos os tipos de trabalho</span>
          <Icon className="iconDown" type="down" />
        </div>
        <span className="divider" />
        <div className="selectContainer">
          <span className="selectTitle">Tds. campos de atuação</span>
          <Icon className="iconDown" type="down" />
        </div>
      </div>
    </div>
  );
}

OpportunitiesFilters.defaultProps = {};
OpportunitiesFilters.propTypes = {};