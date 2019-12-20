import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Input, Button } from 'antd';
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
        <Button type="primary" className={styles.ButtonSearch}>
          Pesquisar
        </Button>
      </div>
    </div>
  );
}

HeaderFilters.defaultProps = {};
HeaderFilters.propTypes = {};