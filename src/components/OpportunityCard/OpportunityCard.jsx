import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import styles from './OpportunityCard.module.scss';

export default function OpportunityCard() {
  return (
    <div className={styles.OpportunityCard}>
      
      <div className="header">
        <img className="avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/adityasutomo/128.jpg" />
        <div className="headerContent">
          <div className="title">Trivagas</div>
          <div className="location">Fortaleza, Ceara, Brasil</div>
        </div>
        <div className="headerAction">
          <Icon type="heart" />
        </div>
      </div>

      <div className="main">
        <div className="title">UI/UX Designer</div>
        <div className="description">
          DailyRounds is India's largest Doctor network. (Think StackOverflow for Doctors) Over 500,000+ Doctors, nurses and other healthcare practitioners collaborate and learn using DailyRounds products ( DailyRounds & Marrow ). We take pride in the fact that we directly influence the young Doctors in the country and enable to provide them better care.
        </div>
      </div>

      <div className="footer">
        <div className="info">
          <Icon className="icon" type="book" />
          <span>Full time</span>
        </div>
        <div className="info">
          <Icon className="icon" type="calendar" />
          <span>Há um dia</span>
        </div>
        <div className="info align-end">
          <Icon className="icon"type="ellipsis" />
        </div>
      </div>

    </div>
  );
}

OpportunityCard.defaultProps = {};
OpportunityCard.propTypes = {};