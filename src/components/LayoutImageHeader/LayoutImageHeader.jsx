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
      <div className='image' style={{ backgroundImage: `url(${src})` }}>
        <div className="titleContainer">
          <h1 className="title">{title}</h1>
          <h2 className="description">{description}</h2>
        </div>
      </div>
      <div className="main">
        <div className="content">
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