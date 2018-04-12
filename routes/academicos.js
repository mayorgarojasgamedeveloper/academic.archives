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
/// los academicos y superusuarios
///

// Se puede ver el perfil de usuario desde aqui
// Tambien se podra cerrar sesion
router.get('/perfil', function(req, res, next) {
  if (usuario) {
    res.render('perfil', { usuario: usuario });
  } else {
    // En caso de que no haya una sesion
    // regresa a la pagina de inicio
    return res.redirect('/');
  }
});

// Desde aqui se podra modificar los datos de la sesion
// Tambien se puede cambiar contrasena
// Tambien se puede borrar la cuenta
router.get('/ajustes', function(req, res, next) {
  if (usuario) {
    res.render('ajustes', { usuario: usuario });
  } else {
    // En caso de que no haya una sesion
    // regresa a la pagina de inicio
    return res.redirect('/');
  }
});

// Desde aqui se podran ver los reportes
// Tambien se puede borrar reortes
router.get('/carpeta', function(req, res, next) {
  if (usuario) {
    res.render('carpeta', { usuario: usuario });
  } else {
    // En caso de que no haya una sesion
    // regresa a la pagina de inicio
    return res.redirect('/');
  }
});

// Desde que se agregaran los reportes
// El tipo de reporte es el que decide
// Lo que se renderiza
router.get('/agregar/:tipo/', function(req, res, next) {
  if (usuario) {
    switch(req.params.tipo){
      case 'direccion':
        res.render('reportes/agregar/direccion', { usuario: usuario });
        break;
      case 'estadia':
        res.render('reportes/agregar/estadia', { usuario: usuario });
        break;
      case 'linea':
        res.render('reportes/agregar/linea', { usuario: usuario });
        break;
      case 'produccion':
        res.render('reportes/agregar/produccion', { usuario: usuario });
        break;
      case 'proyecto':
        res.render('reportes/agregar/proyectos', { usuario: usuario });
        break;
      default:
        return res.redirect('/');
        break;
    }
  } else {
    // En caso de que no haya una sesion
    // regresa a la pagina de inicio
    return res.redirect('/');
  }
});

// Desde que se modificaran los reportes
// El tipo de reporte es el que decide
// Lo que se renderiza
router.get('/modificar/:tipo/:id', function(req, res, next) {
  if (usuario) {
    switch(req.params.tipo){
      case 'direccion':
        res.render('reportes/modificar/direccion', { usuario: usuario });
        break;
      case 'estadia':
        res.render('reportes/modificar/estadia', { usuario: usuario });
        break;
      case 'linea':
        res.render('reportes/modificar/linea', { usuario: usuario });
        break;
      case 'produccion':
        res.render('reportes/modificar/produccion', { usuario: usuario });
        break;
      case 'proyecto':
        res.render('reportes/modificar/proyectos', { usuario: usuario });
        break;
      default:
        return res.redirect('/');
        break;
    }
  } else {
    // En caso de que no haya una sesion
    // regresa a la pagina de inicio
    return res.redirect('/');
  }
});

// Desde que se veran los reportes
// El tipo de reporte es el que decide
// Lo que se renderiza
router.get('/ver/:tipo/:id', function(req, res, next) {
  if (usuario) {
    switch(req.params.tipo){
      case 'direccion':
        res.render('reportes/ver/direccion', { usuario: usuario });
        break;
      case 'estadia':
        res.render('reportes/ver/estadia', { usuario: usuario });
        break;
      case 'linea':
        res.render('reportes/ver/linea', { usuario: usuario });
        break;
      case 'produccion':
        res.render('reportes/ver/produccion', { usuario: usuario });
        break;
      case 'proyecto':
        res.render('reportes/ver/proyectos', { usuario: usuario });
        break;
      default:
        return res.redirect('/');
        break;
    }
  } else {
    // En caso de que no haya una sesion
    // regresa a la pagina de inicio
    return res.redirect('/');
  }
});

module.exports = router;
