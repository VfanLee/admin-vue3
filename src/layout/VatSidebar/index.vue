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
.vat-sidebar {
  --el-menu-bg-color: transparent;
  --el-menu-item-height: 40px;
  --el-menu-sub-item-height: 40px;

  .vat-sidebar__inner {
    overflow: hidden auto;
    height: 100%;
  }
}
</style>
