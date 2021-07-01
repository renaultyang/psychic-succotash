const express = require('express');
const userRouter = express.Router();
const { find } = require('../../database/index')
const { verify, makeToken }  = require('../../utils/token') 
userRouter.get('/login', async (req, res ) => {
  try {
    const { query } = req
    console.log('query', query)
    const data = await find('user', query)
    if (!data.length) {
      res.send({ error: 0, data, message: '没有查到数据' })
    } else {
      console.log('登陆成功')
      const token = makeToken(query.password)
      res.send({ error: 0, data, message: '查到数据'+ data.length + '条', token })
    }
    
  } catch (err) {
    console.log('错了')
  }
})

userRouter.get('/verifyToken', async (req, res) => {
  const { query } = req
  console.log('query', query.token)
  try {
    if (verify(query.token)) {
      res.send({ error: 0, message: 'token验证成功' })
    } else {
      res.send({ error: 1, message: 'token验证失败' })
    }
   
    
    
  } catch (err) {
    
  }
})

module.exports = userRouter

