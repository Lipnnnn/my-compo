export interface FilterFormConfig {
  key: string;
  label: string;
  component: 'input' | 'select' | 'range-picker';
  defaultValue?: any;
  width?: string;
  maxLength?: number;
  options?: Array<{ label: string; value: any }>;
}