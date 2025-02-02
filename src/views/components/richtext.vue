<script setup lang="ts">
import Tinymce from '@/components/Tinymce/index.vue'

const value = ref('')
</script>

<template>
  <div class="components-page">
    <Tinymce v-model="value" />
  </div>
</template>
