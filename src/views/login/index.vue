<template>
  <div class="y-login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="y-login-form" autocomplete="on" label-position="left">
      <h3>Login Form</h3>
      <el-form-item prop="username" class="">
        <el-input ref="username" v-model="loginForm.username" placeholder="Username" name="username" type="text" tabindex="1" autocomplete="on">
          <i slot="prefix" class="el-icon-user-solid"/>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input ref="password" v-model="loginForm.password" placeholder="password" name="password" type="text" tabindex="2" autocomplete="on">
          <i slot="prefix" class="el-icon-lock"/>
        </el-input>
      </el-form-item>
      <el-button type="primary" @click="handleLogin">登陆</el-button>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
export default {
  name: 'Login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入你的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      }
    }
  },
  created () {
  },
  methods: {
    // 登陆
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push('/dashboard')
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.y-login{
  background: #2d3a4b;
  position: absolute;
  width: 100%;
  height: 100%;
}
.y-login-form{
  width: 500px;
  height: 260px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -130px;
  display:flex;
  justify-content: space-between;
  flex-direction: column;
  h3{
    text-align: center;
    color: #ffffff;
    font-size: 30px;
    margin-bottom: 50px;
  }
}
</style>
