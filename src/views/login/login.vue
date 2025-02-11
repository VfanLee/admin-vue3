<script setup lang="ts">
import type { FormInstance, FormItemInstance } from 'element-plus'
import VatFooter from '@/layout/VatFooter/index.vue'

import { useUserStore } from '@/stores/user'
import { debounce } from 'lodash'

const userStore = useUserStore()

const loginFormRef = ref<FormInstance | null>(null)
const passwordItemRef = ref<FormItemInstance | null>(null)

const loginForm = reactive({
  username: '',
  password: '',
})
const loginFormRule = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})
const loading = ref(false)

const login = debounce(async (formEl: FormInstance | null) => {
  if (!formEl) return
  loading.value = true
  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      try {
        await userStore.login(loginForm)
      } catch (error: any) {
        ElMessage.error({
          message: error.message,
        })
      } finally {
        loading.value = false
      }
    } else {
      loading.value = false
    }
  })
}, 500)
</script>

<template>
  <div class="login-page">
    <div class="login-form__wrapper">
      <el-form
        ref="loginFormRef"
        class="login-form"
        :model="loginForm"
        :rules="loginFormRule"
        :disabled="loading"
      >
        <el-form-item class="login-logo">
          <Logo />
        </el-form-item>

        <el-form-item prop="username">
          <el-input
            class="login__username"
            v-model="loginForm.username"
            placeholder="请输入用户名（admin, visitor）"
            autofocus
            @keyup.enter="login(loginFormRef)"
          >
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item ref="passwordItemRef" prop="password">
          <el-input
            class="login__password"
            v-model="loginForm.password"
            placeholder="请输入密码（任意密码）"
            showPassword
            @keyup.enter="login(loginFormRef)"
          >
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            @click="login(loginFormRef)"
            :loading="loading"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <VatFooter />
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
  background-image: url('/images/bg.png');
}

.login-form__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block-start: 15vh;
  padding: 32px;
}

.login-form {
  width: 520px;

  .login-logo {
    margin-block-end: 40px;

    :deep(.el-form-item__content) {
      justify-content: center;
    }
  }

  .login-btn {
    width: 100%;
  }
}
</style>
