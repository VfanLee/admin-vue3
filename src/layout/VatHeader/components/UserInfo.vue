<script setup lang="ts">
import { useUserStore } from '@/stores/user'

defineOptions({
  name: 'UserInfo',
  inheritAttrs: false,
})

defineProps<{
  size?: 'default' | 'small'
  avatar?: string
  username?: string
}>()

const userStore = useUserStore()

const logout = () => {
  userStore.logout()
}
</script>

<template>
  <el-dropdown class="user-info" v-bind="$attrs">
    <UserProfile :avatar="userStore.userInfo.avatar" :name="userStore.userInfo.name" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">登出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss">
.user-info {
  .user-profile {
    cursor: pointer;
  }
}
</style>
