let mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchemaType = {
    productName: {type: String, required: true},
    productDescription: {type: String, required: true},
    productCategory: {type: String, required: true},
    productCost: {type: Number, required: true},
    sellerName: {type: String, required: true},
    productImage: {type: String, required: true}
}

let productSchema = new Schema(productSchemaType)

const productModel = mongoose.model('productModel', productSchema)

module.exports = productModel

