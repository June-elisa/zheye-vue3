/*
 * @Author: Reya
 * @Date: 2022-05-19 18:28:13
 * @LastEditors: Reya
 * @LastEditTime: 2022-12-09 21:54:30
 * @Description:接口
 */
import request from './request'
// import apiUrl from '@/constants/api-url'

// const { AUTH, THIRD, CORE, REVIEW } = apiUrl

/**
 * @description: 注册
 * @return {*}
 */
export function register (data = {}) {
  return request({
    url: '/api/user/register',
    method: 'post',
    data
  })
}

/**
 * @description: 登录
 * @return {*}
 */
export function login (data = {}) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

/**
 * @description: 注销登录
 * @return {*}
 */
export function logout () {
  return request({
    url: '/api/user/logout',
    method: 'get'
  })
}

/**
 * @description: 更新个人资料
 * @return {*}
 */
export function updateUserInfo (data = {}) {
  return request({
    url: '/api/user/update',
    method: 'post',
    data
  })
}

/**
 * @description: 获取当前用户信息
 * @return {*}
 */
export function getUserInfo (id:any) {
  return request({
    url: `/api/user/current?userId=${id}`,
    method: 'get'
  })
}

/**
 * @description: 获取专栏列表
 * @return {*}
 */
export function getColumnList () {
  return request({
    url: '/api/user/list',
    method: 'get'
  })
}

/**
 * @description: 获取博客列表
 * @return {*}
 */
export function getBlogList (data = {}) {
  return request({
    url: '/api/blog/list',
    method: 'post',
    data
  })
}

/* export const getBlogList = (data: any) =>
  request({
    url: '/api/blog/list',
    method: 'post',
    data
  }) */

/**
 * @description: 新建博客
 * @return {*}
 */
export function newBlog (data = {}) {
  return request({
    url: '/api/blog/new',
    method: 'post',
    data
  })
}

/**
 * @description: 编辑博客
 * @return {*}
 */
export function updateBlog (data = {}) {
  return request({
    url: '/api/blog/update',
    method: 'post',
    data
  })
}

/**
 * @description: 查看博客
 * @return {*}
 */
export function blogDetail (id:any) {
  return request({
    url: `/api/blog/detail?id=${id}`,
    method: 'get'
  })
}

/**
 * @description: 删除博客
 * @return {*}
 */
export function delBlog (id:any) {
  return request({
    url: `/api/blog/del?id=${id}`,
    method: 'get'
  })
}

/**
 * 获取wx AccessToken
 * @returns
 */
/* export function getWxCore (access_token, data = {}) {
  return request({
    url: `/wx-api/wxa/getwxacodeunlimit?access_token=${access_token}`,
    method: 'POST',
    data,
    responseType: 'arraybuffer'
  })
} */

/**
 * 检测敏感词
 * @param {*} contentList
 * @param {*} storage
 * @returns
 */
/* export function getCheckSensitive (content, sensitiveStorageType) {
  return request({
    url: '/api/mg-yzc-audit/audit/sensitive/content/check',
    method: 'post',
    data: {
      content,
      sensitiveStorageType
    }
  })
} */

/**
 *
 * @param {*} type 1-用户标签 2-内容标签
 */
/* export function getTagList (type) {
  return request({
    url: `${REVIEW}/label/type/list?type=${type}`,
    method: 'get'
  })
} */
