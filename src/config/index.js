import defaultConfig from './default.json';
import productionConfig from './production.json';

export default process.env.REACT_APP_ENV === 'production'
  ? productionConfig
  : defaultConfig;
