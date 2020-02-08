import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Dropdown, Menu, Input, Select, Button } from 'antd';

import styles from './Header.module.scss';
import userDefault from '../../assets/images/user_default.jpg';

const { Option } = Select;

export default function Header(props) {
  const {
    onSearchFieldChange,
    onLocationChange,
    onSearch,
  } = props;

  const userDropdownOptions = (
    <Menu className={styles.UserMenuDropdownOptions}>
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

        <Col span={6}>
          <span className={styles.Logo}>Trivagas</span>
        </Col>

        <Col span={12}>
          <Row gutter={12}>
            <Col span={10}>
              <Input
                className={styles.Input}
                placeholder="Buscar trivagas"
                prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                onChange={(e) => onSearchFieldChange(e.target.value)}
              />
            </Col>
            <Col span={10}>
              <Select className={styles.SelectLocation} defaultValue="CE" onChange={onLocationChange}>
                <Option value="" disabled>Pesquisar localidade</Option>
                <Option value="CE">Ceará</Option>
              </Select>
            </Col>
            <Col span={4}>
              <Button className={styles.Button} type="primary" onClick={onSearch}>
                Pesquisar
              </Button>
            </Col>
          </Row>
        </Col>

        <Col span={6}>
          <div className={styles.ActionsContainer}>
            <Icon type="bell" theme="filled" />
            <Dropdown overlay={userDropdownOptions}>
              <div className={styles.UserInfos}>
                <img src={userDefault} alt="user avatar" className={styles.UserImg} />
              </div>
            </Dropdown>
          </div>
        </Col>

      </Row>
    </div>
  );
}

Header.defaultProps = {};
Header.propTypes = {
  onSearchFieldChange: PropTypes.func.isRequired,
  onLocationChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};