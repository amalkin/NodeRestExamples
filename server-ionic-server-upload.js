var express = require('express')
var multer = require('multer')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

// settings
app.set('views', path.join(__dirname,'views'))
app.set('view engine','jade')

// middleware
app.use(bodyParser.json())

// route
app.get('/', (req,res) => {
    res.render('index')
})

app.post('/', multer({dest:'./uploads/'}).single('upl'),(req,res) => {
    console.log(req.body)
    console.log(req.file)
    res.status(204).end()
})

// start
var server = app.listen(3000, () => {
    console.log('Started at port ' + server.address().port)
})