<script setup>
import { useRouter } from 'vue-router'
import useUserStore from '@/stores/user'

const _route = useRouter()
const userStore = useUserStore()

const logout = () => {
  userStore.logout()
  _route.push({ path: '/login' })
}
</script>

<template>
  <el-dropdown class="user-info" trigger="click">
    <div>
      <img src="@/assets/vite.svg" alt="avatar" />
      <span>{{ userStore.userInfo.username }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">
          <el-icon><SwitchButton /></el-icon>
          <span>退出登录</span>
        </el-dropdown-item>
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
