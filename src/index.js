import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import ptBR from 'antd/lib/locale-provider/pt_BR';

import createStore from './models/createStore';
import App from './App';

import './styles/app.scss';

const { store } = createStore();

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={ptBR}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);
