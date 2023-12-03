const express = require('express')
const jwt = require('jsonwebtoken')

const indexRouter = express.Router()

const loginRouter = require('./loginRouter')
const signinRouter = require('./signinRouter')
const productRouter = require('./productsRouter')

const { accessTokenSecretKey } = require('../controllers/login.controller')

const authenticateToken = (req, res, next)=> {
    const headerToken = req.headers.authorization;
    if(headerToken){
        const bearerRemovedToken = headerToken.split(' ')[1]
        jwt.verify(bearerRemovedToken, accessTokenSecretKey, (error, user)=> {
            if(error){
               return res.sendStatus(403)
            }else{
                req.user = user
                next()
            }
        })
    }else{
        res.sendStatus(401)
    }
}

indexRouter.use('/', loginRouter)
indexRouter.use('/', signinRouter)
indexRouter.use('/', authenticateToken, productRouter)

module.exports = indexRouter