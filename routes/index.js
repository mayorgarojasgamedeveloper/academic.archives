var express = require('express');
var router = express.Router();

// GET inicio
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Inicio' });
});

// GET descubre
// GET Nosotros
// GET Contacto
// GET Iniciar Sesion

module.exports = router;
