<script setup lang="ts">
defineOptions({
  name: 'SvgIcon',
})

interface SvgIconProps {
  name: string
}

defineProps<SvgIconProps>()
</script>

<template>
  <el-icon class="svg-icon">
    <svg aria-hidden="true">
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
  </el-icon>
</template>
