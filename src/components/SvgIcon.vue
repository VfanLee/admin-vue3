<script setup>
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <i class="svg-icon" :style="{ fontSize: size, color }">
    <svg aria-hidden="true" style="width: 1em; height: 1em">
      <use :xlink:href="symbolId" fill="currentColor" />
    </svg>
  </i>
</template>

<style lang="scss">
.svg-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
}
</style>
