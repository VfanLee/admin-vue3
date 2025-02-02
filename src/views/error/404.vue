<script setup lang="ts"></script>

<template>
  <div class="error-page">
    <el-empty>
      <el-button type="primary" @click="$router.push({ path: '/' })">返回首页</el-button>
    </el-empty>
  </div>
</template>

<style lang="scss">
.error-page {
  display: flex;
  justify-content: center;
  .el-empty {
    padding: 15vh 0;
  }
}
</style>
