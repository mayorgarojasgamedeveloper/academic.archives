var express = require('express');
var router = express.Router();

var usuario = {
  nombre: 'Manuel Fernando',
  apellido: 'Mayorga Rojas',
  curriculum: 'Nulla facilisi. Integer malesuada lorem et eros vehicula, sed iaculis erat semper. Nullam tempus fermentum urna, et auctor mi rhoncus a. Suspendisse vitae lorem velit. Quisque non facilisis lacus. Aliquam eu erat quis risus volutpat pretium nec at tellus. Vestibulum luctus bibendum diam, eu dictum nibh. Donec fringilla urna leo, nec elementum ligula aliquam ac. Nullam fringilla egestas ligula ut fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ornare finibus nisi ac maximus.',
  foto: 'foto.jpg',
  correo: 'fernandomayorga@academicos.com.mx',
  usuario: 'iammayro',
  admin: true
}

//var usuario = null;

///
/// Routes a los que pueden acceder
/// los invitados
///

// En esta seccion se ve el inicio de la pagina
router.get('/', function(req, res, next) {
  res.render('inicio', { usuario: usuario });
});

// Contacto es la seccion donde puedes enviar
// un correo al administrador de la pagina
router.get('/contacto', function(req, res, next) {
  res.render('contacto', { usuario: usuario });
});

// Desde aqui se inicia sesion
router.get('/iniciar', function(req, res, next) {
  res.render('iniciar', { usuario: usuario });
});

// Descubre es la seccion donde se pueden buscar reportes
router.get('/descubre', function(req, res, next) {
  res.render('descubre', { usuario: usuario });
});

module.exports = router;
