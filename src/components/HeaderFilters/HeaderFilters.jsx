import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Input } from 'antd';
import { useMediaQuery } from 'react-responsive'

import styles from './HeaderFilters.module.scss';

export default function HeaderFilters(props) {
  const isMobile = useMediaQuery({ maxWidth: 540 });

  return (
    <div className={styles.HeaderFilters}>
      <div className={styles.Container}>
        <Input
          className={styles.InputSearch}
          placeholder="Buscar trivagas por palavra-chave"
          prefix={<Icon className={styles.IconSearch} type="search" />}
        />
        <button
          className={styles.ButtonSearch}
          size="large"
        >
          Pesquisar
        </button>
      </div>
    </div>
  );
}

HeaderFilters.defaultProps = {};
HeaderFilters.propTypes = {};