<script setup lang="ts">
defineOptions({
  name: 'UserProfile',
  inheritAttrs: false,
})

defineProps<{
  avatar?: string
  name?: string
}>()
</script>

<template>
  <div class="user-profile">
    <img class="user-profile__avatar" :src="avatar" alt="avatar" />
    <div class="user-profile__name">{{ name }}</div>
  </div>
</template>

<style lang="scss">
.user-profile {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  user-select: none;

  .user-profile__avatar {
    width: 24px;
    height: 24px;
    border-radius: 12px;
  }

  .user-profile__name {
    font-size: 14px;
  }
}
</style>
