<script setup lang="ts">
import FilterForm from './components/FilterForm/FilterForm.vue'
import type { FilterFormConfig } from './components/FilterForm/types'

const filterFields: FilterFormConfig[] = [
  {
    key: 'title',
    label: '推送标题',
    component: 'input',
    defaultValue: '',
  },
  {
    key: 'status',
    label: '推送状态',
    component: 'select',
    defaultValue: '',
    options: [
      { label: '关闭推送', value: '1' },
      { label: '待推送', value: '2' },
      { label: '正在推送', value: '3' },
      { label: '已推送', value: '4' },
    ],
  },
  {
    key: 'type',
    label: '人群类型',
    component: 'select',
    defaultValue: '',
    options: [
      { label: '未登录用户', value: '1' },
      { label: '已登录未入金用户', value: '2' },
      { label: '已登录已入金用户', value: '3' },
    ],
  },
  {
    key: 'push_time',
    label: '推送开始日期 推送截止日期',
    component: 'range-picker',
    defaultValue: '',
  },
  {
    key: 'create_time',
    label: '创建开始日期 创建截止日期',
    component: 'range-picker',
    defaultValue: '',
  },
    {
    key: 'operation_time',
    label: '操作开始日期 操作截止日期',
    component: 'range-picker',
    defaultValue: '',
  },
];
</script>

<template>
  <div style="padding: 20px;">
    <FilterForm :fields="filterFields" >
      <template #right>
          <a-button type="primary">新增</a-button>
        </template>
    </FilterForm>
  </div>
</template>



