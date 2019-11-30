import React from 'react';
import PropTypes from 'prop-types';
import styles from './LayoutImageHeader.module.scss';

export default function LayoutImageHeader(props) {
  const {
    title,
    description,
    src,
    children,
  } = props;

  return (
    <div className={styles.LayoutImageHeader}>
      <div className={styles.Image} style={{ backgroundImage: `url(${src})` }}>
        <div className={styles.TitleContainer}>
          <h1 className={styles.Title}>{title}</h1>
          <h2 className={styles.Description}>{description}</h2>
        </div>
      </div>
      <div className={styles.Main}>
        <div className={styles.Content}>
          {children}
        </div>
      </div>
    </div>
  );
}

LayoutImageHeader.defaultProps = {};
LayoutImageHeader.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};