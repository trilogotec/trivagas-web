import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <span>Trívagas® 2019</span>
    </div>
  );
}

Footer.defaultProps = {};
Footer.propTypes = {};