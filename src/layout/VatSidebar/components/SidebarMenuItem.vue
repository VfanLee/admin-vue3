<script setup lang="ts">
import type { RouteMenus } from '@/router/routes'

defineOptions({
  name: 'SidebarMenuItem',
})

defineProps<{ data: RouteMenus }>()
</script>

<template>
  <el-menu-item
    v-if="data.children.length === 1 && !data.alwaysShow"
    :index="data.children[0].link"
  >
    <SvgIcon v-if="data.children[0].icon" :name="data.children[0].icon" />
    <span>{{ data.children[0].text }}</span>
  </el-menu-item>

  <el-sub-menu v-else-if="data.children.length >= 1" :index="data.link">
    <template #title>
      <SvgIcon v-if="data.icon" :name="data.icon" />
      <span>{{ data.text }}</span>
    </template>
    <SidebarMenuItem
      v-for="routeChild of data.children"
      :key="routeChild.link"
      :data="routeChild"
    ></SidebarMenuItem>
  </el-sub-menu>

  <el-menu-item v-else :index="data.link">
    <SvgIcon v-if="data.icon" :name="data.icon" />
    <span>{{ data.text }}</span>
  </el-menu-item>
</template>

<style lang="scss">
.el-menu-item,
.el-sub-menu__title {
  margin: 4px 4px 0;
  border-radius: 8px;
  user-select: none;

  &:hover,
  &.is-active {
    background-color: rgba(0, 0, 0, 0.04);
    color: var(--el-text-color-primary);
  }
}
</style>
