<!--
 * @Author: Reya
 * @Date: 2022-05-06 11:18:28
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-21 15:57:36
 * @Description:注册
-->
<template>
  <div class="login">
    <p style="font-size: 20px;">注册凉面账号</p>
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="ruleForm" label-position="left"
      style="max-width: 460px" hide-required-asterisk>
      <el-form-item label="邮箱地址" prop="email">
        <el-input v-model.number="ruleForm.email" placeholder="请输入邮箱地址" />
      </el-form-item>
      <el-form-item label="昵称" prop="name">
        <el-input v-model.number="ruleForm.name" placeholder="请输入昵称" />
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item label="重复密码" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" placeholder="请再次输入密码" />
      </el-form-item>
      <el-form-item label="">
        <router-link to="/login">已有账户了？去登录</router-link>
      </el-form-item>
      <el-form-item label="" fixed="left">
        <el-button type="primary" @click="submitForm(ruleFormRef)">注册新用户</el-button>
      </el-form-item>
    </el-form>

  </div>

</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { login, register } from '@/service/index'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store/index'

export default defineComponent({
  name: 'Login',
  setup () {
    const store = useStore<GlobalDataProps>()
    const router = useRouter()
    const ruleFormRef = ref<FormInstance>()
    const ruleForm = reactive({
      email: '',
      name: '',
      pass: '',
      checkPass: ''
    })

    const checkEmail = (rule: any, value: any, callback: any) => {
      if (!value) {
        callback(new Error('请输入邮箱'))
      } else if (!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value))) { callback(new Error('请输入正确的邮箱格式')) } else {
        callback()
      }
    }
    const checkName = (rule: any, value: any, callback: any) => {
      if (!value) {
        callback(new Error('请输入昵称'))
      } else if (!(/^.{3,8}$/.test(value))) { callback(new Error('昵称长度为3~8位')) } else {
        callback()
      }
    }
    const validatePass = (rule: any, value: any, callback: any) => {
      if (!value) {
        callback(new Error('请输入密码'))
      } else if (!(/^\w{6,18}$/.test(value))) { callback(new Error('密码由6~18位的数字、字母、下划线组成')) } else {
        callback()
      }
    }

    const validatePass2 = (rule: any, value: any, callback: any) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== ruleForm.pass) {
        callback(new Error('密码不一致，请重新输入'))
      } else {
        callback()
      }
    }

    const rules = reactive({
      name: [{ validator: checkName, trigger: 'blur' }],
      pass: [{ validator: validatePass, trigger: 'blur' }],
      checkPass: [{ validator: validatePass2, trigger: 'blur' }],
      email: [{ validator: checkEmail, trigger: 'blur' }]
    })

    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.validate(async (valid) => {
        if (valid) {
          const res1 = await register({ email: ruleForm.email, nickName: ruleForm.name, password: ruleForm.pass })
          const res2 = await login({ email: ruleForm.email, password: ruleForm.pass })
          if (res2.data) {
            store.commit('LOGIN', res2.data)
            ElMessage.success('注册成功，即将跳转至主页...')
            setTimeout(() => {
              router.push('/')
            }, 1000)
          } else {
            ElMessage.error('注册失败')
          }

          console.log('submit!')
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
.ruleForm {
  margin: 0 auto;
  width: 300px;

}

.el-form-item {
  flex-direction: column;
  margin-bottom: 20px;

  ::v-deep .el-form-item__label {
    font-size: 16px;
  }
}
</style>
