const { MongoClient } = require('mongodb');
const { dbName, mongodbUrl } = require('./config.json');
/* connect
  @params colName: 查询的表或者说集合
*/
async function connect(colName) {
  try {
    const client = await MongoClient.connect(mongodbUrl);
    const database = client.db(dbName);
    const collectionName = database.collection(colName);
    return {
      collectionName,
      client,
    };
  } catch (err) {
    console.log(err);
  }
}

/* find
  查找 
  @params colName: 查询的表或者说集合
  query: 查询条件
  注意 connect也是异步的也要加 await
*/
async function find(colName, query = {}) {
  try {
    const { collectionName, client } = await connect(colName);
    Object.keys(query).forEach(key => {
      query[key] = { $regex: query[key] }
    })
    const data = await collectionName.find(query).toArray();
    client.close()
    return data
  } catch (err) {
    console.log(err)
  }
}
module.exports = {find}
