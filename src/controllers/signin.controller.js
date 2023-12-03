
const UserModel = require('../models/user.model')



const signupUserApi = async (req, res)=> {
    try {
        const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        }

        const user = await UserModel.findOne({email: req.body.email})

        if(user){
            res.status(200).json({status: false, message: 'User name already in use, Please try another username'})
        }else {
            await UserModel.create(userData).then((result)=> {
                res.status(200).json({status: true, message: 'User account created successfully'})
            }).catch((error)=> {
                res.status(200).json({status: false, message: 'User creation failed , Please try again'})
            })
        }   
    }
    catch {
        res.status(500).json({status: false, message: 'Something went wrong'})
    }
}

module.exports = {
    signin: signupUserApi
}