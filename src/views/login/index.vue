<script setup>
import useUserStore from '@/stores/user'
import { useRouter } from 'vue-router'
import { generateRandomColor } from '@/utils/color'

const userStore = useUserStore()
const router = useRouter()

const loginFormRef = ref()
const passwordItemRef = ref()
const loginForm = reactive({
  username: 'admin',
  password: 'admin'
})
const loginFormRule = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
})

const hidePwd = ref(true)
const isLoading = ref(false)
const randomColor = {
  backgroundImage: `linear-gradient(45deg ,${generateRandomColor()}, ${generateRandomColor()})`
}

const login = async formEl => {
  if (!formEl) {
    return
  }

  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        isLoading.value = true
        await userStore.login(loginForm)
        await router.replace({ path: '/' })
        ElNotification({
          type: 'success',
          message: '登录成功'
        })
      } catch (error) {
        passwordItemRef.value.validateState = 'error'
        passwordItemRef.value.validateMessage = error.message
      } finally {
        isLoading.value = false
      }
    }
  })
}
</script>

<template>
  <div class="page-login" :style="randomColor">
    <div class="login__form__wrap">
      <el-form class="login__form" ref="loginFormRef" :model="loginForm" :rules="loginFormRule">
        <el-form-item>
          <h1 class="login__title">登录</h1>
        </el-form-item>

        <el-form-item prop="username">
          <el-input class="login__username" v-model="loginForm.username" placeholder="任意用户名" autofocus @keyup.enter="login(loginFormRef)">
            <template #prefix>
              <i class="fa-solid fa-user"></i>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="password" ref="passwordItemRef">
          <el-input class="login__password" v-model="loginForm.password" :type="hidePwd ? 'password' : 'text'" placeholder="任意密码" @keyup.enter="login(loginFormRef)">
            <template #prefix>
              <i class="fa-solid fa-lock"></i>
            </template>
            <template #suffix>
              <i :class="['pointer', 'fa-solid', hidePwd ? 'fa-eye-slash' : 'fa-eye']" @click="hidePwd = !hidePwd"></i>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="login__btn" @click="login(loginFormRef)" :loading="isLoading">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep() {
  .el-form-item.is-error {
    .el-input__wrapper {
      border-bottom-color: var(--el-color-danger);
      box-shadow: none;
    }
  }

  .el-input__wrapper {
    border-bottom: 1px solid #fff;
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    color: transparent;
  }

  .el-input__prefix,
  .el-input__suffix {
    color: #fff;
  }

  .el-input__inner {
    color: #fff;

    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
  }
}

.page-login {
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100vh;

  .login__form__wrap {
    margin: 0 10%;
    width: 420px;
    padding: 20px 30px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: transparent;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }

  .login__title {
    width: 100%;
    text-align: center;
    color: #fff;
    user-select: none;
  }

  .login__password {
    .el-input__suffix {
      cursor: pointer;
    }
  }

  .login__btn {
    margin-top: 18px;
    width: 100%;
    border-radius: 16px;
    font-weight: 700;
  }
}
</style>
