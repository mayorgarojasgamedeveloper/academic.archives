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
/// los superusuario
///

// Desde aqui se podran ver los logs
// del sistema
router.get('/logs', function(req, res, next) {
  if (req.session.usuario && usuario.admin === true) {
    res.render('logs', { usuario: req.session.usuario });
  } else {
    // En caso de que no haya una sesion
    // regresa a la pagina de inicio
    return res.redirect('/');
  }
});

// Desde aqui se podran agregar usuarios
// al sistema
router.get('/agregar', function(req, res, next) {
  if (req.session.usuario && usuario.admin === true) {
    let msg = req.session.msg;
    req.session.msg = null;
    res.render('usuarios/agregar', { usuario: req.session.usuario, msg: msg });
  } else {
    // En caso de que no haya una sesion
    // regresa a la pagina de inicio
    return res.redirect('/');
  }
});

// Desde aqui se podran agregar usuarios
// al sistema
router.get('/eliminar', function(req, res, next) {
  if (req.session.usuario && usuario.admin === true) {
    res.render('usuarios/eliminar', { usuario: req.session.usuario });
  } else {
    // En caso de que no haya una sesion
    // regresa a la pagina de inicio
    return res.redirect('/');
  }
});

module.exports = router;
