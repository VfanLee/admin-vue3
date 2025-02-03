<script setup lang="ts">
import SidebarMenu from './components/SidebarMenu.vue'
import SidebarCollapseButton from './components/SidebarCollapseButton.vue'
</script>

<template>
  <div class="vat-sidebar"></div>
  <aside class="vat-sidebar vat-sidebar--fixed">
    <div class="vat-sidebar__inner">
      <SidebarMenu />
      <SidebarCollapseButton />
    </div>
  </aside>
</template>

<style lang="scss">
:root.vat {
  --el-menu-bg-color: transparent;
  --el-menu-item-height: 40px;
  --el-menu-sub-item-height: 40px;
}

.vat-sidebar__inner {
  overflow: hidden auto;
  height: 100%;
  width: 100%;
}

.sidebar-menu {
  width: 100%;
  border-inline-end-width: 0px;
}

.sidebar-memu--popper {
  border-radius: 8px;

  .el-menu {
    padding: 0;
    box-shadow: none;
  }
}

.el-menu-item,
.el-sub-menu__title {
  margin: 4px;
  border-radius: 8px;
  user-select: none;

  &:hover,
  &.is-active {
    background-color: rgba(0, 0, 0, 0.04);
    color: var(--el-text-color-primary);
  }
}
</style>
