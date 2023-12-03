const express = require('express')

const signinRouter = express.Router()

const { signin } = require('../controllers/signin.controller')


signinRouter.post('/signin', signin)

module.exports = signinRouter