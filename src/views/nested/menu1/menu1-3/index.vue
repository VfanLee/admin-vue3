<script setup lang="ts"></script>

<template>
  <div class="nested-menu1-3">
    <div class="nested-text">menu1-3</div>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.nested-menu1-3 {
  padding: 20px;
  border-radius: 8px;
  background-color: #fff5d7;

  .nested-text {
    padding: 12px;
  }
}
</style>
