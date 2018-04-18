var express = require('express');
var router = express.Router();

///
/// Routes a los que pueden acceder
/// los superusuario
///

// Desde aqui se podran ver los logs
// del sistema
router.get('/logs', function(req, res, next) {
  if (req.session.usuario && req.session.usuario.admin === true) {
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
  if (req.session.usuario && req.session.usuario.admin === true) {
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
  if (req.session.usuario && req.session.usuario.admin === true) {
    res.render('usuarios/eliminar', { usuario: req.session.usuario });
  } else {
    // En caso de que no haya una sesion
    // regresa a la pagina de inicio
    return res.redirect('/');
  }
});

module.exports = router;
