import type { App } from 'vue';
import FilterForm from './components/FilterForm';

import './index.css'

const components = [FilterForm];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name!, component);
  });
};

export { install, FilterForm };
export * from './components/FilterForm/types'

export default {
  install
};