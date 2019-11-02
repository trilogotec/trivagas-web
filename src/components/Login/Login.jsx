import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styles from './Login.module.scss';

export default function Login() {
  return (
    <div className={styles.Login}>
      Login
      <Button>Login</Button>

      <span>SALVE-ME</span>
    </div>
  );
}

Login.defaultProps = {};
Login.propTypes = {};