<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="page-header">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>
