<script setup lang="ts">
</script>

<template>
  <div class="nested-menu1">
    <div class="nested-text">menu1</div>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.nested-menu1 {
  padding: 20px;
  border-radius: 8px;
  background-color: #defcd6;
  color: #000;

  .nested-text {
    padding: 12px;
  }
}
</style>
