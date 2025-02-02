<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
  <div class="sidebar-collapse-button" @click="appStore.toggleCollapse"></div>
</template>

<style lang="scss">
.sidebar-collapse-button {
  position: absolute;
  inset-block-start: 24px;
  inset-inline-end: 0;
  z-index: 10000;
  transform: translateX(50%);

  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: var(--el-bg-color);
  box-shadow: var(--el-box-shadow-light);
  cursor: pointer;
}
</style>
