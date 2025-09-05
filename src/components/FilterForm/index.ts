import FilterForm from "./FilterForm.vue";
import type { App } from 'vue';

FilterForm.install = (app: App) => {
  app.component(FilterForm.name!, FilterForm);
};

export default FilterForm;
export * from './types';