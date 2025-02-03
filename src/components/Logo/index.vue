<script setup lang="ts">
import type { LogoProps } from './types'

defineOptions({
  name: 'Logo',
})

const { size = 'default' } = defineProps<LogoProps>()
</script>

<template>
  <div class="logo-comp" :class="[`is-${size}`]">
    <img class="logo-image" src="/images/vite.svg" alt="logo" />
    <h1 class="logo-text">Vue Admin Template</h1>
  </div>
</template>

<style lang="scss">
.logo-comp {
  display: flex;
  align-items: center;
  user-select: none;

  .logo-image {
    height: 100%;
  }

  .logo-text {
    margin: 0;
    height: 100%;
    font-size: 32px;
  }

  &.is-default {
    gap: 8px;
    height: 40px;
    line-height: 40px;

    .logo-text {
      font-size: 32px;
      font-weight: 700;
    }
  }

  &.is-small {
    gap: 6px;
    height: 32px;
    line-height: 32px;

    .logo-text {
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>
