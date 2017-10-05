require('dotenv').config()
const port = proccess.env.PORT || 4000
const dal = require('./dal.js')
const express = require('express')
const app = express()

// get a book GET /books/id

add.get('/books/:id', function(req, res, next) {
  dal.getBook(req.params.id, function(err, doc) {
    if (err) return console.log(err)
    re.status(200).send(doc)
  })
})

app.listen(port, () => console.log('API is up on port', port))
