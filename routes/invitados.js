var express = require('express');
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
/// los invitados
///

// En esta seccion se ve el inicio de la pagina
router.get('/', function(req, res, next) {
  res.render('inicio', { usuario: req.session.usuario });
});

// Contacto es la seccion donde puedes enviar
// un correo al administrador de la pagina
router.get('/contacto', function(req, res, next) {
  res.render('contacto', { usuario: req.session.usuario });
});

// Desde aqui se inicia sesion
router.get('/iniciar', function(req, res, next) {
  var error = req.session.error;
  req.session.error = null;
  res.render('iniciar', { usuario: req.session.usuario, error: error });
});

// Descubre es la seccion donde se pueden buscar reportes
router.get('/descubre', function(req, res, next) {
  res.render('descubre', { usuario: req.session.usuario, reportes: reportes });
});

// Desde que se veran los reportes
// El tipo de reporte es el que decide
// Lo que se renderiza
router.get('/produccion/ver/:tipo/:id', function(req, res, next) {
  if (usuario) {
    res.render('reportes/ver/' + req.params.tipo, { usuario: req.session.usuario });
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
    res.render('reportes/ver/' + req.params.tipo, { usuario: req.session.usuario });
  } else {
    // En caso de que no haya una sesion
    // regresa a la pagina de inicio
    return res.redirect('/');
  }
});

module.exports = router;
