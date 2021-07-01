const express = require('express');
let { port } = require('./config.json');
const mainRouter = require('./router/index')
const app = express();
app.use(express.static('./', { index: './index.html', maxAge: 5000 }))
app.use(mainRouter)
app.listen(port, () => {console.log('服务器开启，端口为' + port) })