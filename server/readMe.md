commonJs规范引入注意要解构
```js
let { port } = require('./config.json')

```

注意连接mongoDB和增删改查都是异步的都要加await
```js
 const client = await MongoClient.connect(mongodbUrl);
 const collectionName = database.collection(colName);
```