import axios from 'axios'

import env from '@/../config/prod.env'

import {
  showFullScreenLoading,
  tryHideFullScreenLoading,
} from './axiosInitHelper'

const URL_PREFIX = env.URL_PREFIX

// 创建axios实例
const $ = axios.create({
  baseURL: URL_PREFIX,
  timeout: 15000
})

// 请求拦截器
$.interceptors.request.use((config) => {
  if (config.showLoading) {
    showFullScreenLoading()
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
$.interceptors.response.use((response) => {
  if (response.config.showLoading) {
    tryHideFullScreenLoading()
  }
  return response
}, (error) => {
  tryHideFullScreenLoading()
  return Promise.reject(error)
})

const defaultConfig = { showLoading: true }
export default {
  get: (url, config) => $.get(url, { ...defaultConfig, ...config }),
  put: (url, data, config) => $.put(url, data, { ...defaultConfig, ...config }),
  post: (url, data, config) => $.post(url, data, { ...defaultConfig, ...config }),
  patch: (url, data, config) => $.patch(url, data, { ...defaultConfig, ...config }),
  delete: (url, data, config) => $.delete(url, { ...defaultConfig, ...config })
}
