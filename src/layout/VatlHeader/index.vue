<script setup>
import UserInfo from '@/components/UserInfo.vue'
</script>

<template>
  <header class="vat-header"></header>
  <header class="vat-header vat-header--fixed">
    <div class="vat-header__inner">
      <RouterLink class="vat-header__logo" to="/dashboard">
        <img src="@/assets/vite.svg" alt="logo" />
        <h1>Vue3 Admin Template</h1>
      </RouterLink>
      <div style="flex: 1 1 0%"></div>
      <div class="vat-header__actions">
        <UserInfo class="vat-header__actions-avatar" />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.vat-header__inner {
  display: flex;
  align-items: center;
  margin-inline: 16px;
  height: var(--header-height);
}

.vat-header__logo {
  display: flex;
  align-items: center;
  min-height: 22px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.88);
  img {
    height: 28px;
  }
  h1 {
    height: 32px;
    margin-block: 0;
    margin-inline: 8px 0;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
  }
}

.vat-header__actions {
  display: flex;
  height: 100%;
}

.vat-header__actions-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-block: 0;
  padding-inline: 2px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  .el-tooltip__trigger {
    padding-inline: 12px;
    padding-block: 12px;
    border-radius: 6px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    vertical-align: middle;
    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
}

.vat-header__actions-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  color: rgba(0, 0, 0, 0.45);
  .el-tooltip__trigger {
    display: flex;
    align-items: center;
    height: 44px;
    padding-inline: 8px;
    padding-block: 8px;
    border-radius: 6px;
    line-height: 44px;
    color: rgba(0, 0, 0, 0.45);
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
}
</style>
