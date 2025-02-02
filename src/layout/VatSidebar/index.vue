<script setup lang="ts">
import SidebarMenu from './components/SidebarMenu.vue'
import SidebarCollapseButton from './components/SidebarCollapseButton.vue'
</script>

<template>
  <aside class="vat-sidebar"></aside>
  <aside class="vat-sidebar vat-sidebar--fixed">
    <div class="vat-sidebar__inner">
      <SidebarMenu />
      <SidebarCollapseButton />
    </div>
  </aside>
</template>

<style lang="scss">
.vat-sidebar__inner {
  --el-menu-bg-color: transparent;
  --el-menu-item-height: 40px;
  --el-menu-sub-item-height: 40px;

  overflow: hidden auto;
  height: 100%;
  font-size: 14px;
}
</style>
