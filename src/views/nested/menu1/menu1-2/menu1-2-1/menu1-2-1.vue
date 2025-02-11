<script setup lang="ts">
</script>

<template>
  <div class="nested-menu1-2-1">
    <div class="nested-text">menu1-2-1</div>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.nested-menu1-2-1 {
  padding: 20px;
  border-radius: 8px;
  background-color: #ffe6d9;

  .nested-text {
    padding: 12px;
  }
}
</style>
