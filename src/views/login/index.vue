<script setup>
import useAppStore from '@/stores/app'
import useUserStore from '@/stores/user'

const _router = useRouter()
const appStore = useAppStore()
const userStore = useUserStore()

const loginFormRef = ref()
const passwordItemRef = ref()

const loginForm = ref({
  username: 'admin',
  password: 'admin'
})
const loginFormRule = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const loading = ref(false)

const login = async formEl => {
  if (!formEl) {
    return
  }

  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        loading.value = true
        await userStore.login(unref(loginForm))
        _router.replace({ path: '/' })
        ElNotification({
          type: 'success',
          message: '登录成功',
          duration: 3000
        })
      } catch (error) {
        passwordItemRef.value.validateState = 'error'
        passwordItemRef.value.validateMessage = error.result || error.message
      } finally {
        loading.value = false
      }
    }
  })
}
</script>

<template>
  <div class="page-login">
    <div class="login__form__wrap">
      <el-form class="login__form" ref="loginFormRef" :model="loginForm" :rules="loginFormRule" label-position="top" hide-required-asterisk size="large">
        <el-form-item class="login__form-item">
          <h1 class="login__title">{{ appStore.title }}</h1>
          <h2 class="login__text">登录</h2>
        </el-form-item>

        <el-form-item prop="username" label="用户名">
          <el-input class="login__username" v-model="loginForm.username" placeholder="请输入用户名" autofocus @keyup.enter="login(loginFormRef)" clearable>
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item ref="passwordItemRef" prop="password" label="密码">
          <el-input class="login__password" v-model="loginForm.password" placeholder="请输入密码" @keyup.enter="login(loginFormRef)" show-password>
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="login__btn" type="primary" @click="login(loginFormRef)" :loading="loading">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-login {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(@/assets/images/bg.png) no-repeat scroll center / cover;

  .login__form-item {
    :deep(.el-form-item__content) {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
    .login__title,
    .login__text {
      margin: 0;
    }
  }

  .login__form__wrap {
    width: 420px;
    min-width: 480px;
    padding: 30px 20px;
  }

  .login__btn {
    width: 100%;
  }
}
</style>
