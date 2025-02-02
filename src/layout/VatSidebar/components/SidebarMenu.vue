<script setup lang="ts">
import SidebarMenuItem from './SidebarMenuItem.vue'

import { useAppStore } from '@/stores/app'
import { useRouteStore } from '@/stores/route'
import { generateRouteMenus } from '@/utils/routes'

defineOptions({
  name: 'SidebarMenu',
})

const appStore = useAppStore()
const routeMenusStore = useRouteStore()

const routeMenus = computed(() => generateRouteMenus(routeMenusStore.routes))
</script>

<template>
  <el-menu
    class="sidebar-menu"
    router
    :default-active="$route.fullPath"
    :collapse="appStore.collapse"
    :collapse-transition="false"
    :unique-opened="false"
  >
    <SidebarMenuItem v-for="item in routeMenus" :key="item.id" :data="item" />
  </el-menu>
</template>

<style lang="scss">
.sidebar-menu {
  border-inline-end-width: 0px;
}
</style>
