const express = require('express')
const user = express.Router()

user.get('/getUserAndCounts', require('../apis/user/getUserAndCounts'))

module.exports = user