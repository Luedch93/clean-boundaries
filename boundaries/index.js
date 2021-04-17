const FakeDB = require('./fake-database')
const DB = require('./database')

const fakeDB = new FakeDB()
const db = new DB()

module.exports = {
  db: fakeDB
}