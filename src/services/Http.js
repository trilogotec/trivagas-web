import axios from 'axios';
// import buildFormData from 'object-to-formdata';
import { message } from 'antd';
import config from '../config';

const { baseURL } = config;

const Http = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

function get(url, config) {
  return Http.get(url, config);
}

function post(url, data, config) {
  return Http.post(url, (data), config);
}

function patch(url, data, config) {
  return Http.patch(url, (data), config);
}

function put(url, data, config) {
  return Http.put(url, (data), config);
}

function deleteHttp(url, config) {
  return Http.delete(url, config);
}

/**
|--------------------------------------------------
| helper functions
|--------------------------------------------------
*/
function parseErrorMessage(responseBody) {
  return responseBody.message || responseBody.exceptionMessage || responseBody.Message || 'Erro inesperado';
}

export function parseError(error) {
  if (axios.isCancel(error)) {
    return;
  }

  if (error.response && error.response.status && error.response.status === 401) {
    return;
  }

  if (error.response && error.response.data) {
    if (error.response.status && error.response.status === 400) {
      if (error.response.data.type && error.response.data.type === 1) {
        message.warning(parseErrorMessage(error.response.data));
      } else {
        message.info(parseErrorMessage(error.response.data));
      }
    } else {
      message.error(parseErrorMessage(error.response.data));
    }
  } else {
    message.error('Erro inesperado');
  }

  console.log(error); // for developers to identify internal bugs
}

export default {
  get,
  post,
  patch,
  put,
  delete: deleteHttp,
};