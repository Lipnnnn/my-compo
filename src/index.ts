import type { App } from 'vue';
import FilterForm from './components/FilterForm';
import type { FilterFormConfig } from './components/FilterForm/types'

import './index.css'

const components = [FilterForm];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name!, component);
  });
};

export { install, FilterForm, type FilterFormConfig };

export default {
  install
};