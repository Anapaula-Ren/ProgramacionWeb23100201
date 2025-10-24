// ...existing code...
const apiUrl = 'https://rickandmortyapi.com/api/character/259';

$(document).ready(function() {
  $('#btn').on('click', function() {
    const $btn = $(this);
    const $img = $('#imagen');

    $btn.prop('disabled', true).text('Cargando...');

    $.getJSON(apiUrl)
      .done(function(data) {
        // La API de Rick and Morty devuelve la URL de la imagen en la propiedad `image`
        if (data && data.image) {
          $img.attr('src', data.image).attr('alt', data.name || 'Personaje');
          console.log('Imagen cargada:', data.image);
        } else {
          console.error('Respuesta inesperada:', data);
          $img.attr('alt', 'No se encontró imagen.');
        }
      })
      .fail(function(jqxhr, textStatus, error) {
        console.error('Error al llamar a la API:', textStatus, error);
        $img.attr('alt', 'Error al cargar la imagen.');
      })
      .always(function() {
        $btn.prop('disabled', false).text('Cargar Imagen');
      });
  });
});
// ...existing code...