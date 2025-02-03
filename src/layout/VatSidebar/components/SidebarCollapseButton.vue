<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
  <div
    class="sidebar-collapse-button"
    :class="{ 'is-collapse': appStore.collapse }"
    @click="appStore.toggleCollapse"
  >
    <el-icon><ArrowDownBold /></el-icon>
  </div>
</template>

<style lang="scss">
.sidebar-collapse-button {
  position: absolute;
  inset-block-start: 18px;
  z-index: 101;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  inset-inline-end: -13px;
  transition: transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  text-align: center;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.25);
  cursor: pointer;
  box-shadow:
    0 2px 8px -2px rgba(0, 0, 0, 0.05),
    0 1px 4px -1px rgba(25, 15, 15, 0.07),
    0 0 1px 0 rgba(0, 0, 0, 0.08);
  transform: rotate(90deg);

  &:hover {
    color: rgba(0, 0, 0, 0.65);
  }

  &.is-collapse {
    transform: rotate(-90deg);
  }
}
</style>
