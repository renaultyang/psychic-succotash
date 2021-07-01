/* 
token 作用 
可在登陆账号将密码时传过来作为材料和我们规定的密钥 去生成一个token对象
比如我登陆账号为 18890486258 密码为 100151yrl
1.我们可以自己想一个密钥比如 'yangrenlong' 
2.然后和密码 100151yrl 以及 3. 过期时间这三个就能得到一个token对象
*/
const jwt = require('jsonwebtoken');
const secretKey = 'yangrenlong';

/* 
  生成token的方法
  @params
  {
    psw:登陆成功时传过来密码（其他的账号什么的也行，验证时也要传）
    secretKey : 自己规定的密钥比如 'yangrenlong',
    expiresIn 过期时间 传一个时间戳
  } 
*/

function makeToken(psw, secret = secretKey , expiresIn = 60 ) {
  return jwt.sign({ psw }, secret, {expiresIn} )
}

/* 
  验证token是否有效
  @params
  {
    token : token
    需要之前的规定的密钥
  }
*/

function verify(token) {
  let res = false;
  try {
    let bool = jwt.verify(token, secretKey)
    console.log('token', bool)
    res = true
  } catch (err) {
    console.log(err,'err')
  }
  return res
}

module.exports = {
  makeToken,
  verify
}