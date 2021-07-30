import axios_instance from './index'
console.log('axios_instance',axios_instance)
function formatParams(obj) {
  if (!Object.keys(obj).length) {
    return ''
  }
  return Object.keys(obj).reduce((params, key) => {
    params += `${key}=${obj[key]}&`
    return params
  }, '?').slice(0,-1)
  
}
export function login(params) {
  console.log('params',params,'/api/user/login'+ formatParams(params))
  return axios_instance({
    method: 'get',
    url: '/api/user/login'+ formatParams(params) ,
  })
}