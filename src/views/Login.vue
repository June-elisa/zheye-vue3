<!--
 * @Author: Reya
 * @Date: 2022-05-06 11:18:28
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-21 10:23:07
 * @Description: 登录
-->
<template>
  <div class="login">
    <p style="font-size: 20px;">登录到凉面</p>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      class="ruleForm"
      label-position="left"
      style="max-width: 460px"
      hide-required-asterisk
    >
      <el-form-item label="邮箱地址" prop="email"  >
          <el-input v-model="ruleForm.email" placeholder="请输入邮箱地址" />
      </el-form-item>
      <el-form-item label="密码" prop="pass"  >
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item label="">
        <router-link to="/Register">还没有账户？去注册一个新的吧！</router-link>
      </el-form-item>
      <el-form-item label="" fixed="left" >
          <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button >
      </el-form-item>

      <el-form-item>
      <!-- <router-link to="/Register">还没有账户？去注册一个新的吧！</router-link>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >登录</el-button
        > -->
      </el-form-item>
    </el-form>

  </div>

</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store/index'
import { login } from '@/service/index'

export default defineComponent({
  name: 'Login',
  setup () {
    const store = useStore<GlobalDataProps>()
    const router = useRouter()
    const ruleFormRef = ref<FormInstance>()
    const ruleForm = reactive({
      pass: '',
      checkPass: '',
      email: ''
    })

    const checkEmail = (rule: any, value: any, callback: any) => {
      if (!value) {
        callback(new Error('请输入邮箱'))
      } else if (!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value))) { callback(new Error('请输入正确的邮箱格式')) } else {
        callback()
      }
    }

    const rules = reactive({
      pass: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      email: [{ validator: checkEmail, trigger: 'blur' }]
    })

    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.validate(async (valid) => {
        if (valid) {
          console.log('submit!')
          const res = await login({ email: ruleForm.email, password: ruleForm.pass })
          if (res.data) {
            store.commit('LOGIN', res.data)
            ElMessage.success('登录成功，即将跳转至主页...')
            setTimeout(() => {
              router.push('/')
            }, 1000)
          } else {
            ElMessage.error('用户名或密码错误')
          }
        } else {
          console.log('error submit!')
          return false
        }
      })
    }

    return {
      rules,
      submitForm,
      ruleForm,
      ruleFormRef
    }
  }
})
</script>

<style scoped lang="scss">
.ruleForm{
  margin: 0 auto;
  width: 300px;

}

.el-form-item {
  flex-direction: column;
  margin-bottom: 20px;
  ::v-deep .el-form-item__label{
  font-size: 16px;
  }
}
</style>
