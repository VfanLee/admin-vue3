<script setup lang="ts">
import type { ConfigProviderProps } from 'element-plus'
import { zhCn } from 'element-plus/es/locale/index.mjs'

const configProviderProps: Partial<ConfigProviderProps> = {
  size: 'large',
  locale: zhCn,
  zIndex: 1000,
}
</script>

<template>
  <el-config-provider v-bind="configProviderProps">
    <RouterView />
  </el-config-provider>
</template>
