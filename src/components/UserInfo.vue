<script setup>
import useUserStore from '@/stores/user'

const userStore = useUserStore()
</script>

<template>
  <el-dropdown class="user-info" trigger="click" :popper-options="{ modifiers: [{ name: 'computeStyles', options: { adaptive: false } }] }">
    <div>
      <img src="@/assets/vite.svg" alt="avatar" />
      <span>{{ userStore.userInfo.name }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="userStore.logout()">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.el-tooltip__trigger {
  img {
    width: 26px;
    height: 26px;
    border-radius: 12px;
  }
  span {
    margin-inline-start: 8px;
    font-size: 14px;
  }
}
</style>
