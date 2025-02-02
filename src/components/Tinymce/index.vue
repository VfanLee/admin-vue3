<script setup lang="ts">
// https://www.tiny.cloud/docs/tinymce/latest/vue-ref/
import Editor from '@tinymce/tinymce-vue'
import config from './config'

defineOptions({
  name: 'Tinymce',
  inheritAttrs: false,
})


</script>

<template>
  <div class="tinymce-container">
    <Editor
      tinymceScriptSrc="/vendor/tinymce/tinymce.min.js"
      :init="config"
      v-bind="$attrs"
    />
  </div>
</template>

<style lang="scss">
.tinymce-container {
  width: 100%;

  > textarea {
    display: none;
  }
}
</style>
