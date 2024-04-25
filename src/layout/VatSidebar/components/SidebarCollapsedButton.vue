<script setup>
import useAppStore from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
  <div class="sidebar-collapsed-button" @click="appStore.setCollapse(!appStore.isCollapse)">
    <el-icon>
      <ArrowRight v-show="appStore.isCollapse" />
      <ArrowLeft v-show="!appStore.isCollapse" />
    </el-icon>
  </div>
</template>

<style lang="scss">
.sidebar-collapsed-button {
  position: absolute;
  inset-block-start: 18px;
  inset-inline-end: 0;
  z-index: 101;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: #fff;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.25);
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(25, 15, 15, 0.07), 0 0 1px 0 rgba(0, 0, 0, 0.08);
  transform: translateX(50%);
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: rgba(0, 0, 0, 0.65);
  }
}
</style>
