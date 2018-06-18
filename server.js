const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const hostname = 'localhost'
const mongoose = require('mongoose')

const User = require('./models/users')

// connect to mongo
mongoose.connect('mongodb://localhost/user')
// const db = mongoose.connection

server.use(bodyParser.json())

server.get('/', function (req, res) {
  res.send('hello world')
})

server.get('/api/users', (req, res) => {
  User.getUsers((err, users) => {
    if (err) {
      throw err
    }
    res.json(users)
  })
})

server.post('/api/users', (req, res) => {
  const user = req.body
  User.addUser(user, (err, user) => {
    if (err) {
      throw err
    }
    res.json(user)
  })
})

server.put('/api/genres/:_id', (req, res) => {
  const id = req.params._id
  const user = req.body
  User.updateGenre(id, user, {}, (err, genre) => {
    if (err) {
      throw err
    }
    res.json(genre)
  })
})

server.delete('/api/genres/:_id', (req, res) => {
  var id = req.params._id
  User.removeGenre(id, (err, user) => {
    if (err) {
      throw err
    }
    res.json(user)
  })
})

const port = 4200

server.listen(port, hostname, () => {
  console.log('server has started on port' + ' ' + port)
})
