'use strict'
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/robson');


const _schemaUser = {
  nome: String,
  idade: Number,
  telefone: String
}

const userSchema = new Schema(_schemaUser)
const userModel = mongoose.model('usuario', userSchema)

router.get('/', (req, res) => {
  const query = {}
  userModel.find(query, (err, data) => {
    if (err) return res.json(data)
    return res.render('./users/list', { data: data })
  })
})

module.exports = router