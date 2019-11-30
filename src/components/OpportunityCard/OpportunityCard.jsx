import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import styles from './OpportunityCard.module.scss';

export default function OpportunityCard(props) {
  const {
    company,
    title,
    description,
    workType,
    createdAt,
  } = props;

  return (
    <div className={styles.OpportunityCard}>
      
      <div className="header">
        <img className="avatar" src={company.avatar} />
        <div className="headerContent">
          <div className="title">{company.name}</div>
          <div className="location">{company.region}</div>
        </div>
        <div className="headerAction">
          <Icon type="heart" />
        </div>
      </div>

      <div className="main">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>

      <div className="footer">
        <div className="info">
          <Icon className="icon" type="book" />
          <span>{workType}</span>
        </div>
        <div className="info">
          <Icon className="icon" type="calendar" />
          <span>{createdAt}</span>
        </div>
        <div className="info align-end">
          <Icon className="icon"type="ellipsis" />
        </div>
      </div>

    </div>
  );
}

OpportunityCard.defaultProps = {};
OpportunityCard.propTypes = {
  company: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    region: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  workType: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};