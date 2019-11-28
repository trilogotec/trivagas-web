import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Dropdown, Menu } from 'antd';

import styles from './Header.module.scss';
import userDefault from '../../assets/images/user_default.jpg';

export default function Header() {
  const userDropdownOptions = (
    <Menu className="userMenuDropdownOptions">
      <Menu.Item key="1">
        <span>Perfil</span>
      </Menu.Item>
      <Menu.Item key="2">
        <span>Sair</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.Header}>
      <Row type="flex" justify="end" align="middle">

        <Col span={20}>
          <span className="logo">Trivagas</span>
        </Col>
        
        <Col span={4}>
          <div className="actionsContainer">
            <Icon type="bell" theme="filled" />
            <Dropdown overlay={userDropdownOptions}>
              <div className="userInfos">
                <img src={userDefault} alt="user avatar" className="userImg" />
              </div>
            </Dropdown>
          </div>
        </Col>

      </Row>
    </div>
  );
}

Header.defaultProps = {};
Header.propTypes = {};