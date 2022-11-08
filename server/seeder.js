const fs = require('fs')
const { faker } = require('@faker-js/faker')
const userList = require('./data/user')
const productList = require('./data/product')

function generateUserList() {
  userList.forEach((user) => {
    user.createAt = faker.date.past(2)
  })
  return userList
}

function generateProductList() {
  productList.forEach((product) => {
    product.createAt = faker.date.past(5)
  })
  return productList
}

function start() {
  const users = generateUserList()
  const products = generateProductList()
  const db = {
    users,
    products,
  }

  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data successfully =))')
  })
}

start()
