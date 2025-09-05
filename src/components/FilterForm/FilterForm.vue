<template>
  <div ref="boxRef" class="filter-box">
    <div
      class="filter-fields"
      :class="showMore ? 'filter-fields--expanded' : 'filter-fields--collapsed'"
      :style="{ width: `calc(100% - ${width}px - 10px)` }"
    >
      <a-button @click="handleShowMore">更多筛选</a-button>
      <!-- 动态渲染字段 -->
      <div v-for="field in fields" :key="field.key">
        <!-- 输入框 -->
        <a-input
          v-if="field.component === 'input'"
          v-model="filters[field.key]"
          :placeholder="field.label"
          :max-length="field.maxLength || 255"
          :style="{ width: field.width || '200px' }"
          allow-clear
        />

        <!-- 下拉选择 -->
        <a-select
          v-else-if="field.component === 'select'"
          v-model="filters[field.key]"
          :placeholder="field.label"
          :style="{ width: field.width || '200px' }"
          allow-clear
        >
          <a-option
            v-for="opt in field.options || []"
            :key="opt.value"
            :value="opt.value"
          >
            {{ opt.label }}
          </a-option>
        </a-select>

        <!-- 日期范围选择 -->
        <a-range-picker
          v-else-if="field.component === 'range-picker'"
          v-model="filters[field.key]"
          :placeholder="getPlaceholder(field.label)"
          :style="{ width: '300px' }"
        />
      </div>
    </div>

    <!-- 操作按钮 -->
    <div ref="rightRef" class="filter-actions">
      <a-button type="primary" @click="emitSearch"><icon-search /></a-button>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue';
  import type { PropType } from 'vue';
  import type { FilterFormConfig } from './types';
  import { useElementSize } from '@vueuse/core';
  import useClickOuter from '../../hooks/useClickOuter';
  import { Message } from '@arco-design/web-vue';
  import { IconSearch } from '@arco-design/web-vue/es/icon';

  defineOptions({
    name: 'p-filter-form'
  })

  defineProps({
    fields: {
      type: Array as PropType<FilterFormConfig[]>,
      required: true,
    },
  });

  const emit = defineEmits<{
    search: [filters: Record<string, any>];
  }>();

  const filters = reactive<Record<string, any>>({});

  // 获取 range-picker placeholder
  function getPlaceholder(label: string) {
    const target = label.split(' ');
    return target;
  }

  // 显示更多筛选项
  const showMore = ref(false);
  function handleShowMore() {
    showMore.value = !showMore.value;
  }

  function emitSearch() {
    showMore.value = false;
    if (Object.keys(filters).length === 0) {
      Message.warning('请至少选择一个筛选条件');
      return;
    }
    emit('search', { ...filters });
  }

  const rightRef = ref<HTMLElement | null>(null);
  const { width } = useElementSize(rightRef);

  const boxRef = ref<HTMLElement | null>(null);
  useClickOuter(boxRef, () => {
    showMore.value = false;
  });
</script>

