import axios from 'axios';
import store from 'storejs';

const instance = axios.create({
  baseURL:'http://localhost:8000/'
})

// 请求拦截器
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  let token = store.get('token')
  if (token) {
    config.headers.token = token
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

//响应拦截器
// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log('res',response)
 
  return  {...response,flag:'牛逼'};
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default instance