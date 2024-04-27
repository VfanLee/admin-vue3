<script setup>
import useAppStore from '@/stores/app'
import { asyncRoutes, constantRoutes } from '@/router/routes'
import { generateRouteMenus } from '@/utils/route'
import SidebarMenuItem from './SidebarMenuItem.vue'

const appStore = useAppStore()

const routeMenus = computed(() => generateRouteMenus([...constantRoutes, ...asyncRoutes]))
</script>

<template>
  <el-menu class="sidebar-menu" router :default-active="$route.meta.activeMenu || $route.fullPath" :collapse="appStore.isCollapse">
    <SidebarMenuItem v-for="menuItem in routeMenus" :key="menuItem.path" :item="menuItem" />
  </el-menu>
</template>

<style lang="scss">
.sidebar-menu {
  --el-menu-active-color: rgba(0, 0, 0, 0.95);
  --el-menu-text-color: rgba(0, 0, 0, 0.65);
  --el-menu-hover-text-color: rgba(0, 0, 0, 0.88);
  --el-menu-bg-color: transparent;
  --el-menu-hover-bg-color: rgba(0, 0, 0, 0.03);
  --el-menu-active-bg-color: rgba(0, 0, 0, 0.15);
  --el-menu-select-bg-color: rgba(0, 0, 0, 0.03);
  --el-menu-item-height: 40px;
  --el-menu-sub-item-height: 40px;
  --el-menu-horizontal-height: 60px;
  --el-menu-horizontal-sub-item-height: 36px;
  --el-menu-item-font-size: var(--el-font-size-base);
  --el-menu-item-hover-fill: var(--el-color-primary-light-9);
  --el-menu-border-color: var(--el-border-color);
  --el-menu-base-level-padding: 12px;
  --el-menu-level-padding: 20px;
  --el-menu-icon-width: 24px;
}

.sidebar-menu {
  border-right: none;
  user-select: none;
  &.el-menu--collapse {
    .el-sub-menu {
      &.is-active {
        > .el-sub-menu__title {
          background-color: var(--el-menu-select-bg-color);
        }
      }
      .el-sub-menu__title,
      .el-menu-item {
        border-radius: 4px;
      }
    }
  }
  .el-sub-menu {
    &.is-active {
      > .el-sub-menu__title {
        color: var(--el-menu-active-color);
      }
    }
  }
  .el-sub-menu__title {
    gap: 8px;
    margin-block: 4px;
    margin-inline: 4px;
    border-radius: 6px;
    &:hover {
      color: var(--el-menu-hover-text-color);
    }
    &:active {
      background-color: var(--el-menu-active-bg-color);
    }
    > span {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .el-menu--inline {
    padding-inline-start: 10px;
  }
  .el-menu-item {
    gap: 8px;
    margin-block: 4px;
    margin-inline: 4px;
    border-radius: 6px;
    &:active {
      background-color: var(--el-menu-active-bg-color);
    }
    &:hover {
      color: var(--el-menu-hover-text-color);
    }
    &.is-active {
      background-color: var(--el-menu-select-bg-color);
    }
    > span {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &.el-popper {
    border: none;
    border-radius: 8px;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }
  .el-menu--popup {
    padding-block: 0;
    box-shadow: none;
  }
}
</style>
