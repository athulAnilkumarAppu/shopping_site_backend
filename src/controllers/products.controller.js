
const productModel = require('../models/products.model')


const addProductApi = async (req, res)=> {

    try {

        const productDetails = {
            productName: req.body.productName,
            productDescription: req.body.productDescription,
            productCategory: req.body.productCategory,
            productCost: req.body.productCost,
            sellerName: req.body.sellerName,
            productImage: req.body.productImage
        }

        await productModel.create(productDetails).then((result)=> {
            res.status(200).json({status: true, message: 'Product created successfully'})
        }).catch((error)=> {
            res.status(200).json({status: false, message: 'Product creation failed, Please try again', error: error})
        })
    }
    catch{
        res.status(500).json({status: false, message: 'Something went wrong'})
    }
}

const getAllProductsApi = async (req, res)=> {
    
    productModel.find().then((result)=> {
        if(result){
            res.status(200).json({status: true, message: 'product fetched successfully', productList: result})
        }else{
            res.status(200).json({status: true, message: 'No products found', productList: []})
        }
    }).catch((error)=> {
        res.status(200).json({status: false, message: 'Error while fetching products, please try again',  productList: []})
    })
}

module.exports = {
    addProductApi: addProductApi,
    getAllProductsApi: getAllProductsApi
}