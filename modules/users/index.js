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
    if (err) return res.json(err)
    return res.render('./users/list', { data: data })
  })
})

router.get('/form', (req, res) => {
  res.render('./users/form', { data: {} })
})

router.get('/form/:id', (req, res) => {
  const query = { _id: req.params.id }
  userModel.findOne(query, (err, data) => {
    if (err) return res.json(err)
    res.render('./users/form', { data: data })
  })
})

router.post('/form', (req, res) => {
  const body = req.body
  const query = { _id: req.body.id }
  const id = req.body.id
  if (id) {
    userModel.update(query, body, (err, data) => {
      if (err) return res.json(data)
      res.redirect('/users/')
    })
  } else {
    userModel.create(body, (err, data) => {
      if (err) return res.json(err)
      res.redirect('/users/')
    })
  }
})

router.get('/remove/:id', (req, res) => {
  const query = { _id: req.params.id }
  userModel.remove(query, (err, data) => {
    if (err) return res.json(err)
    res.redirect('/users/')
  })
})

module.exports = router