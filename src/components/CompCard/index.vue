<script setup lang="ts">
defineOptions({
  name: 'CompCard',
})

defineProps<{
  title?: string
  value?: string
}>()
</script>

<template>
  <el-card class="comp-card">
    <div class="title">{{ title }}</div>
    <div class="value">{{ value }}</div>
    <div class="chart">
      <slot name="default"></slot>
    </div>
    <div class="line"></div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.title {
  font-size: 14px;
}
.value {
  margin-block-start: 8px;
  font-size: 28px;
  letter-spacing: 1px;
}
.chart {
  display: flex;
  align-items: center;
  height: 50px;
}
.line {
  margin-block: 8px;
  height: 1px;
  background-color: var(--el-border-color);
}
.footer {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}
</style>
