/*
 * @Author: Reya
 * @Date: 2022-05-19 17:36:49
 * @LastEditors: Reya
 * @LastEditTime: 2022-05-19 19:57:27
 * @Description:请求s
 */

import axios from 'axios'
import { ElMessageBox, ElNotification } from 'element-plus'
// import store from '../store'
// import router from '../router'
// import { getToken, removeToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  timeout: 20000 // request timeout
})

// const excludes = ['api-auth/oauth/token', 'api-auth/sms/signin']
// request interceptor 请求拦截器
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // config.headers.Authorization = `Bearer ${getToken()}`
    /* excludes.forEach(item => {
      if (config.url.includes(item)) {
        delete config.headers.Authorization
      }
    }) */
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.errno === -1 && res.message) {
      ElNotification({
        title: '失败',
        message: res.message,
        type: 'error',
        duration: 4 * 1000
      })
    }
    /*     if (response.config.url.includes('api-auth/oauth/token')) {
      res.status = 200
    }

    // 用户登录已过期
    if (res.code === 'A0230') {
      store.dispatch('user/logout').then(() => {
        router.push('/login')
      })
    }

    // 触发重新登录
    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      // to re-login
      ElMessageBox.confirm(
        'You have been logged out, you can cancel to stay on this page, or log in again',
        'Confirm logout',
        {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }
      ).then(() => {
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      })
    } */
    // }
    return res
  },
  error => {
    console.log('error:', error)
    // console.log(error.response.request.responseURL)
    /*     if (error.response.status === 401) {
      if (
        !error.response.request.responseURL.includes(
          'api-auth/user/getUserInfoByToken'
        )
      ) {
        ElNotification({
          title: '登录过期，请重新登录',
          type: 'error',
          duration: 4 * 1000
        })
      }

      // removeToken()
      router.push('/login')
    } else if (error.response.status === 403) {
      ElNotification({
        title: '没权限访问',
        type: 'error',
        duration: 4 * 1000
      })
    } else {
      const { data = {} } = error.response
      const { error_description, message, errorInfos = [] } = data
      let errorMessage = error_description || message

      if (errorInfos.length > 0) {
        const errorInfo = errorInfos[0] || {}
        const { info } = errorInfo
        errorMessage += `：${info}`
      }

      ElNotification({
        title: '失败',
        message: errorMessage,
        type: 'error',
        duration: 4 * 1000
      })
      return data
    } */
  }
)

export default service
