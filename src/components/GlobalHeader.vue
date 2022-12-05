<!--
 * @Author: Reya
 * @Date: 2022-05-05 19:55:18
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-21 12:31:51
 * @Description:头部导航栏
-->
<template>
  <div class="header">
    <div class="header_bar">
      <router-link to="/">
        <h2>凉面专栏</h2>
      </router-link>

      <div v-if="!user.isLogin">
        <router-link to="/login">
          <el-button type="primary" plain style="margin-right: 10px">登录</el-button>
        </router-link>
        <router-link to="/register">
          <el-button type="primary" plain>注册</el-button>
        </router-link>
      </div>
      <el-dropdown split-button type="primary" v-else>
        欢迎你 {{ user.name }}
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$router.push('/create')">新建文章</el-dropdown-item>
            <el-dropdown-item @click="$router.push('/create')">我的专栏</el-dropdown-item>
            <el-dropdown-item @click="$router.push('/create')">编辑资料</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>

</template>
<script scoped lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store/index'
import { ElMessage, ElMessageBox } from 'element-plus'

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number
}
export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    // const user = computed(() => store.state.user)

    // const rules = reactive({
    //   pass: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    //   email: [{ validator: checkEmail, trigger: 'blur' }]
    // })

    const logout = () => {
      ElMessageBox.confirm(
        '确定要注销登录?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(() => {
          store.dispatch('logout')
          window.location.reload()
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消退出'
          })
        })
    }

    return {
      logout
    }
  }

})
</script>
<style scoped lang="scss">
.header {
  margin-bottom: 30px;
  background-color: lighten(#00BEFF, 10%);

  &_bar {
    height: 70px;
    line-height: 70px;
    max-width: 1320px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin: 0 auto;
  }
}

h2 {
  text-decoration: none;
  color: #fff;

}
</style>
