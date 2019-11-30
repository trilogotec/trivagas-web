import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Checkbox, Icon } from 'antd';
import { Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";

import * as yup from 'yup';

import styles from './LoginFormModal.module.scss';

const validationSchema = yup.object().shape({
  login: yup.string()
    .required('Email é requerido')
    .email('Formatação de email incorreta'),
  password: yup
    .string()
    .required('Email é requerido')
    .min(6, 'Mínimo de 6 caracteres'),
});

export default function LoginFormModal() {
  return (
    <Modal
      visible={true}
      title="Faça seu login"
      footer={null}
    >
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {}}
      >
        {formik => (
          <>
            <Input
              name="login"
              className={styles.LoginInput}
              placeholder="Login"
              size="large"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
            <Input.Password
              name="password"
              className={styles.PasswordInput}
              placeholder="Senha"
              size="large"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
            <div className={styles.SettingsContainer}>
              <Checkbox onChange={() => {}}>Lembrar minha senha</Checkbox>
              <span className={styles.Link}>Esqueci minha senha</span>
            </div>
            <SubmitButton
              className={styles.Enter}
              // onClick={() => {
              //   console.log('asdfasdf');
              //   formik.handleSubmit();
              // }}
              type="primary"
              size="large"
            >
              Entrar
            </SubmitButton>
          </>
        )}
      </Formik>

      <div className={styles.RegisterContainer}>
        <span>Outros métodos de login</span>
        <div className={styles.IconsContainer}>
          <Icon type="facebook" />
          <span className={styles.Divider} />
          <Icon type="linkedin" />
          <span className={styles.Divider} />
          <Icon type="twitter" />
        </div>
        <span className={styles.Link}>Se cadastrar</span>
      </div>
    </Modal>
  );
}

LoginFormModal.defaultProps = {};
LoginFormModal.propTypes = {};