const axios = require("axios")
const app = require('express').Router()
const {temperaments} = require('../controllers')


app.get('/temperaments',temperaments)
module.exports = app