
const jwt = require('jsonwebtoken')

const userModel = require('../models/user.model')

const accessTokenSecretKey = 'token'
const refreshTokenSecretKey = 'refreshToken'



const login = async (req, res) => {

        const loginUsername = req.body.username
        const loginPassword = req.body.password

        const accessToken = jwt.sign({username: loginUsername, password: loginPassword}, accessTokenSecretKey, {expiresIn: '30m'})
        const refreshToken = jwt.sign({username: loginUsername, password: loginPassword}, refreshTokenSecretKey, {expiresIn: '1d'})

        const currentUser = await userModel.findOne({email: loginUsername, password: loginPassword})
        if(currentUser){
            res.status(200).json({status: true, message: 'Login successfull', token: accessToken, refreshToken: refreshToken, nameOfUser: currentUser.name, usernameOfUser: currentUser.email })
        }
        else{
            res.status(200).json({status: false, message: 'Invalid Username or password', token: '', refreshToken: 'refreshToken' })
        }
    }
    



module.exports = {
    login: login,
    accessTokenSecretKey: accessTokenSecretKey,
    refreshTokenSecretKey: refreshTokenSecretKey
}
