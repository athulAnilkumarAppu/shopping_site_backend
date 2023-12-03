const express = require('express')

const productRouter = express.Router()

const {addProductApi, getAllProductsApi} = require('../controllers/products.controller')


productRouter.post('/addProducts', addProductApi)
productRouter.post('/getAllProducts', getAllProductsApi)


module.exports = productRouter

