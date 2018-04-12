var express = require('express');
var router = express.Router();

// GET inicio
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Inicio' });
});

// GET descubre
router.get('/descubre', function(req, res, next) {
  res.render('descubre', { title: 'Descubre' });
});

// GET Contacto
router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Contacto' });
});

// GET Iniciar Sesion
router.get('/iniciar', function(req, res, next) {
  res.render('iniciar', { title: 'Inicio' });
});


module.exports = router;
