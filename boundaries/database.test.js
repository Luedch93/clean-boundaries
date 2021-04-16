const sqlite = require('sqlite')

let db;

beforeAll(async () => {
  db = await sqlite.open('./db.sqlite')
})

test('connecting to db', () => {
  expect(db).toBeDefined()
})

test('query products', async () => {
  const products = await db.all("SELECT * FROM product")
  expect(products.length).toBe(4)
  products.forEach(product => {
    expect(product.name).toBeDefined()
    expect(product.specs).toBeDefined()
    expect(product.price).toBeDefined()
    expect(product.image).toBeDefined()
  });
})

afterAll(async () => {
  await db.close()
})