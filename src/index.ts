import type { App } from 'vue';
import FilterForm from './components/FilterForm';
import './style.css'

const components = [FilterForm];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name!, component);
  });
};

export { install, FilterForm };

export default {
  install
};