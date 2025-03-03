<script setup lang="ts">
defineOptions({
  name: 'SvgIcon',
})

defineProps<{
  name: string
}>()
</script>

<template>
  <el-icon class="svg-icon" v-bind="$attrs">
    <svg aria-hidden="true">
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
  </el-icon>
</template>
