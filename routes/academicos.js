var express = require('express');
var fs = require('fs');
var router = express.Router();


var reportes = [
{id: '1',tipo: 'produccion',autor: 'Fernando Mayorga', usuario: 'iammayro',nombre: 'Final de anio',linea: 'Medio Ambiente',fecha: '2018/04/15',issn: '124365',nom_revista: 'Ambiental',subtipo: 'art-difucion'},
{id: '2',tipo: 'produccion',autor: 'Fernando Mayorga', usuario: 'iammayro',nombre: 'Final de anio',linea: 'Medio Ambiente',fecha: '2018/04/15',issn: '124365',nom_revista: 'Ambiental',subtipo: 'art-arbitrado'},
{id: '3',tipo: 'produccion',autor: 'Fernando Mayorga', usuario: 'iammayro',nombre: 'Final de anio',linea: 'Medio Ambiente',fecha: '2018/04/15',issn: '124365',nom_revista: 'Ambiental',subtipo: 'art-revista'},
{id: '4',tipo: 'produccion',autor: 'Fernando Mayorga', usuario: 'iammayro',nombre: 'Final de anio',linea: 'Medio Ambiente',fecha: '2018/04/15',icbn: '124365',nom_revista: 'Ambiental',subtipo: 'capitulo-libro'},
{id: '5',tipo: 'produccion',autor: 'Fernando Mayorga', usuario: 'iammayro',nombre: 'Final de anio',linea: 'Medio Ambiente',fecha: '2018/04/15',icbn: '124365',nom_revista: 'Ambiental',subtipo: 'libro'},
{id: '6',tipo: 'produccion',autor: 'Fernando Mayorga', usuario: 'iammayro',nombre: 'Final de anio',linea: 'Medio Ambiente',fecha: '2018/04/15',icbn: '124365',nom_revista: 'Ambiental',subtipo: 'memorias'},
{id: '7',tipo: 'produccion',autor: 'Fernando Mayorga', usuario: 'iammayro',nombre: 'Final de anio',linea: 'Medio Ambiente',fecha: '2018/04/15',issn: '124365',nom_revista: 'Ambiental',subtipo: 'informe-tecnico'},
{id: '8',tipo: 'produccion',autor: 'Fernando Mayorga', usuario: 'iammayro',nombre: 'Final de anio',linea: 'Medio Ambiente',fecha: '2018/04/15',dependencia: '124365',subtipo: 'capitulo-libro'},
{id: '9',tipo: 'produccion',autor: 'Fernando Mayorga', usuario: 'iammayro',nombre: 'Final de anio',linea: 'Medio Ambiente',fecha: '2018/04/15',issn: '124365',nom_revista: 'Ambiental',subtipo: 'manuales'},
{id: '10',tipo: 'produccion',usuario: 'iammayro',nombre: 'Final de anio',linea: 'Medio Ambiente',fecha: '2018/04/15',issn: '124365',nom_revista: 'Ambiental',subtipo: 'productividad'},
{id: '11',tipo: 'linea',usuario: 'iammayro',nombre: 'Final de anio'},
{id: '12',tipo: 'proyectos',autor: 'Fernando Mayorga', usuario: 'iammayro',nombre: 'Final de anio',linea: 'Medio Ambiente',fecha: '2018/04/15',issn: '124365',nom_revista: 'Ambiental'},
{id: '13',tipo: 'direccion',autor: 'Fernando Mayorga', usuario: 'iammayro',nombre: 'Final de anio',linea: 'Medio Ambiente',fecha: '2018/04/15',issn: '124365',nom_revista: 'Ambiental'},
{id: '14',tipo: 'estadia',autor: 'Fernando Mayorga', usuario: 'iammayro',nombre: 'Final de anio',linea: 'Medio Ambiente',fecha: '2018/04/15',issn: '124365',nom_revista: 'Ambiental'},
];

//var usuario = null;

///
/// Routes a los que pueden acceder
/// los academicos y superusuarios
///

// Se puede ver el perfil de usuario desde aqui
// Tambien se podra cerrar sesion
router.get('/perfil', function(req, res, next) {
  if (req.session.usuario) {
    res.render('perfil', { usuario: req.session.usuario });
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
  if (req.session.usuario) {
    var error = req.session.error;
    req.session.error = null;
    res.render('ajustes', { usuario: req.session.usuario, error: error });
  } else {
    // En caso de que no haya una sesion
    // regresa a la pagina de inicio
    return res.redirect('/');
  }
});

// Desde aqui se podran ver los reportes
// Tambien se puede borrar reortes
router.get('/carpeta', function(req, res, next) {
  if (req.session.usuario) {
    res.render('carpeta', { usuario: req.session.usuario, reportes: reportes });
  } else {
    // En caso de que no haya una sesion
    // regresa a la pagina de inicio
    return res.redirect('/');
  }
});

// Desde que se agregaran los reportes
// El tipo de reporte es el que decide
// Lo que se renderiza
router.get('/produccion/agregar/:tipo', function(req, res, next) {
  if (req.session.usuario) {
    res.render('reportes/agregar/' + req.params.tipo, { usuario: req.session.usuario });
  } else {
    // En caso de que no haya una sesion
    // regresa a la pagina de inicio
    return res.redirect('/');
  }
});

// Desde que se modificaran los reportes
// El tipo de reporte es el que decide
// Lo que se renderiza
router.get('/produccion/modificar/:tipo/:id', function(req, res, next) {
  if (req.session.usuario) {
    res.render('reportes/modificar/' + req.params.tipo, { usuario: req.session.usuario });
  } else {
    // En caso de que no haya una sesion
    // regresa a la pagina de inicio
    return res.redirect('/');
  }
});


// Desde que se agregaran los reportes
// El tipo de reporte es el que decide
// Lo que se renderiza
router.get('/agregar/:tipo', function(req, res, next) {
  if (req.session.usuario) {
    res.render('reportes/agregar/' + req.params.tipo, { usuario: req.session.usuario });
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
  if (req.session.usuario) {
    res.render('reportes/modificar/' + req.params.tipo, { usuario: req.session.usuario });
  } else {
    // En caso de que no haya una sesion
    // regresa a la pagina de inicio
    return res.redirect('/');
  }
});



module.exports = router;
