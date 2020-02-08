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
      <div className={styles.CompanyAvatar}>
        <img className="avatar" src={company.avatar} alt={company.name} />
      </div>

      <div className={styles.Main}>
        <div className='headerContent'>
          <div className="title">
            {title.length > 50 ? `${title.substring(0, 50)}...` : title}
          </div>
          <div className="companyName">{company.name}</div>
          <div className="location">{company.region}</div>
        </div>

        <div className='footer'>
          <div className="info">
            <Icon type="clock-circle" className="icon" />
            <span>{workType}</span>
          </div>
          <div className="info">
            <Icon type="calendar" className="icon" />
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
      
      {/* <div className={styles.Header}>
        <div className="headerContent">
          
        </div>
        <div className="headerAction">
          <Icon type="heart" />
        </div>
      </div>

      <div className={styles.Main}>
        <div className="title">{title}</div>
      </div>

      <div className={styles.Footer}>
        <div className="info align-end">
          <Icon className="icon"type="ellipsis" />
        </div>
      </div> */}

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