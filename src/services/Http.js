import axios from 'axios';
import buildFormData from 'object-to-formdata';
import { baseURL } from '../config';

const Http = axios.create({
  baseURL: baseURL,
  timeout: 10000, 
});

function get(url, config) {
  return Http.get(url, config);
}

function post(url, data, config) {
  return Http.post(url, buildFormData(data), config);
}

function patch(url, data, config) {
  return Http.patch(url, buildFormData(data), config);
}

function put(url, data, config) {
  return Http.put(url, buildFormData(data), config);
}

function deleteHttp(url, config) {
  return Http.delete(url, config);
}

export default {
  get,
  post,
  patch,
  put,
  delete: deleteHttp,
};