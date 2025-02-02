<!-- https://github.com/markedjs/marked -->
<script setup lang="ts">
import { marked } from 'marked'

const markdownRef = ref()

const value = ref(``)

watch(value, (val, oldVal) => {
  markdownRef.value.innerHTML = marked.parse(value.value)
})

nextTick(() => {
  markdownRef.value.innerHTML = marked.parse(value.value)
})
</script>

<template>
  <el-container class="components-page">
    <el-aside>
      <el-input class="markdown__input" v-model="value" type="textarea" />
    </el-aside>
    <el-main>
      <div class="markdown__view" ref="markdownRef"></div>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.components-page {
  gap: 16px;

  .el-aside {
    flex: 1;
  }

  .el-main {
    flex: 1;
    padding: 0;
  }

  .markdown__input {
  }

  .markdown__view {
    all: unset;
  }
}
</style>
