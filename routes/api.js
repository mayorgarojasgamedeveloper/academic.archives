var express = require('express');
var multer = require('multer');
var crypto = require('crypto');
var { Client } = require('pg');

var router = express.Router();
var upload = multer({ dest: 'public/images/usuarios/' });

///
/// Conectar a postgres
///

const client = new Client('postgresql://postgres:admin@localhost/academic');

client.connect((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('PG Conected');
  }
});

///
/// Api
///

router.post('/iniciar', function(req, res, next) {

  var hash = crypto.createHash('md5').update(req.body.contrasena).digest('hex');

  var sql = 'SELECT * FROM usuarios WHERE (usuario=$1 AND contrasena=$2);';
  var val = [req.body.usuario, hash];

  client.query(sql, val, (err, result) => {
    if(err) {
      res.send('Error:' + err);
    } else {
      if(result.rows[0]) {
        req.session.usuario = result.rows[0];
        req.session.usuario.contrasena = null;
        console.log(result.rows[0]);
        res.redirect('/a/perfil');
      } else {
        req.session.error = 'Datos incorrectos.';
        res.redirect('/iniciar');
      }
    }
  });
});

router.get('/salir', function(req, res, next) {
  req.session.destroy();
  res.redirect('/');
});

router.post('/ajustes-datos-personales', function(req, res, next) {
  var sql = 'UPDATE usuarios SET nombre=$1, apellido=$2, correo=$3, curriculum=$4 WHERE usuario=$5 RETURNING *;';
  var val = [req.body.nombre, req.body.apellido, req.body.correo, req.body.curriculum, req.session.usuario.usuario];

  client.query(sql, val, (err, result) => {
    if(err) {
      res.send('Error:' + err);
    } else {
      req.session.usuario = result.rows[0];
      req.session.usuario.contrasena = null;
      console.log(result.rows[0]);
      res.redirect('/a/perfil');
    }
  });
});

router.post('/ajustes-foto-perfil', upload.any(), function(req, res, next) {

  var sql = 'UPDATE usuarios SET imagen=$1 WHERE usuario=$2 RETURNING *;';
  var val = [req.files[0].filename, req.session.usuario.usuario];

  client.query(sql, val, (err, result) => {
    if(err) {
      res.send('Error:' + err);
    } else {
      req.session.usuario = result.rows[0];
      req.session.usuario.contrasena = null;
      console.log(result.rows[0]);
      res.redirect('/a/perfil');
    }
  });
});

router.post('/ajustes-contrasena', function(req, res, next) {
  var hash = crypto.createHash('md5').update(req.body.contrasena).digest('hex');
  var sql = 'UPDATE usuarios SET contrasena=$1 WHERE usuario=$2;';
  var val = [hash, req.session.usuario.usuario];

  client.query(sql, val, (err, result) => {
    if(err) {
      res.send('Error:' + err);
    } else {
      res.redirect('/a/perfil');
    }
  });
});

router.post('/crear-usuario', function(req, res, next) {
  var hash = crypto.createHash('md5').update(req.body.contrasena).digest('hex');
  var admin = (req.body.admin === 'on')?true:false;

  var sql = 'INSERT INTO public.usuarios(usuario, contrasena, correo, admin)VALUES ($1,$2,$3, $4);';
  var val = [req.body.usuario, hash, req.body.correo, admin];

  client.query(sql, val, (err, result) => {
    if(err) {
      req.session.msg = err.detail;
      res.redirect('/s/agregar');
    } else {
      req.session.msg = 'Se ha creado el usuario.';
      res.redirect('/s/agregar');
    }
  });
});

module.exports = router;
