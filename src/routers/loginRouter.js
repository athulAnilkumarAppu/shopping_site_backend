const express = require('express')
const { login } = require('../controllers/login.controller')

const loginRouter = express.Router()

const loginApi = login


loginRouter.post('/login', loginApi)

module.exports = loginRouter