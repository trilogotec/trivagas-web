import { init } from '@rematch/core';
import models from './models';

export default () => {
  const store = init({ models });

  return { store };
};