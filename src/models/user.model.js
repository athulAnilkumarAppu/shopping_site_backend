let mongoose = require('mongoose')

let Schema = mongoose.Schema

const userSchemaType = {
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
}

const userSchema = new Schema(userSchemaType)

const userModel = mongoose.model('userModel', userSchema)

module.exports = userModel