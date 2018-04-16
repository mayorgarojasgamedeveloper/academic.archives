$(document).ready(function(e) {

  var maxRows = 10;

  var colaboradores = '<div><input type="text" class="form-control" id="childcolaborador" name="colaborador" placeholder="Nombre del colaborador" required><a href="#" id="borrar-colaborador">Borrar</a></div>'
  var c = 1;
  // agregar
  $('#agregar-colaborador').click(function(e) {
    if(c <= maxRows) {
      $('#colaboradores').append(colaboradores);
      c++;
    }
  });

  // Eliminar
  $('#colaboradores').on('click', '#borrar-colaborador', function(e) {
    $(this).parent('div').remove();
    c--;
  });

  var autores = '<div><input type="text" class="form-control" id="childautor" name="autor" placeholder="Nombre del Autor" required><a href="#" id="borrar-autor">Borrar</a></div>'
  var a = 1;
  // agregar
  $('#agregar-autor').click(function(e) {
    if(a <= maxRows) {
      $('#autores').append(autores);
      a++;
    }
  });

  // Eliminar
  $('#autores').on('click', '#borrar-autor', function(e) {
    $(this).parent('div').remove();
    a--;
  });

  var instituciones = '<div><input type="text" class="form-control" id="childinstitucion" name="institucion" placeholder="Nombre de la Institución" required><a href="#" id="borrar-institucion">Borrar</a></div>'
  var i = 1;
  // agregar
  $('#agregar-institucion').click(function(e) {
    if(i <= maxRows) {
      $('#instituciones').append(instituciones);
      i++;
    }
  });

  // Eliminar
  $('#instituciones').on('click', '#borrar-institucion', function(e) {
    $(this).parent('div').remove();
    i--;
  });
});
