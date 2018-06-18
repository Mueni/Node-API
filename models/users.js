const mongoose = require('mongoose')

// User Schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = module.exports = mongoose.model('users', userSchema)

// Get Users
module.exports.getUsers = (callback, limit) => {
  User.find(callback).limit(limit)
}

// Add User
module.exports.addUser = (user, callback) => {
  User.create(user, callback)
}

// Update user
module.exports.updateUser = (id, user, options, callback) => {
  const query = {_id: id}
  const update = {
    name: user.name
  }
  User.findOneAndUpdate(query, update, options, callback)
}

// Delete user
module.exports.removeGenre = (id, callback) => {
  const query = {_id: id}
  User.remove(query, callback)
}
