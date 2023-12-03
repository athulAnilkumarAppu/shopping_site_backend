const express = require('express')
let mongoose = require('mongoose')
const cors = require('cors')
const indexRouter = require('./src/routers')

const port = 3000

const app = express()

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: false, parameterLimit: '50000'}))

app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/shoppingSite')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', ()=> {
    console.log('DB connected')
})

const indexrouter = indexRouter

app.use('/', indexrouter)

app.listen(port, ()=> {
    console.log(`listening to port: http://localhost:${port}`)
})

module.exports = app