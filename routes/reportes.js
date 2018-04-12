var express = require('express');
var router = express.Router();

// GET Reporte
router.get('/:tipo/:accion/:id', function(req, res, next) {
  switch(req.params.accion) {
    case 'ver':
      res.send('Ver reporte('+req.params.tipo+'): ' + req.params.id);
      break;
    case 'editar':
      res.send('Editar reporte('+req.params.tipo+'): ' + req.params.id);
      break;
    default:
      res.status(404).send('Error 404');
      break;
  }
});

module.exports = router;
