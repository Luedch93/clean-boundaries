 const sqlite = require('sqlite')

 module.exports = class DB {
    async getProduts() {
      const db = await sqlite.open('./db.sqlite')
      const products = await db.all('SELECT * FROM product')
      await db.close()
      return products
    }
 }