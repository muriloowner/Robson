var express = require('express');
var router = express.Router();

/*
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

router.get('/', function (req, res) {
  res.redirect('/listar')
});
*/

router.get('/', function (req, res) {
  res.render('home')
});

/*
router.post('/cadastro', function (req, res) {
  if (req.body.nome) {
    const body = req.body
    user = new userModel(body)
    user.save((err, data) => {
      if (err) return res.json(err)
      return res.redirect('/listar')
    })
  }
});

router.get('/listar', function (req, res) {
  var result = {}
  const query = {}
  userModel.find(query, function (err, data) {
    if (err) return res.json(err)
    return res.render('listar', { data: data })
  })
});

router.get('/alterar/:id', function (req, res) {
  const query = { _id: req.params.id }
  userModel.findOne(query, (err, data) => {
    if (err) return res.json(err)
    return res.render('alterar', { data: data })
  })
});

router.post('/gravar', function (req, res) {
  const query = { _id: req.body._id }
  const body = req.body
  userModel.update(query, body, (err, data) => {
    if (err) return res.json(err)
    return res.redirect('/listar')
  })
});

router.get('/delete/:id', function (req, res) {
  const query = { _id: req.params.id }
  userModel.remove(query, (err, data) => {
    if (err) return res.json(err)
    return res.redirect('/listar')
  })
})
*/
module.exports = router;
