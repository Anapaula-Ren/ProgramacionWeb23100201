window.onload = function() {
const imagen = document.getElementById('mi-foto');
let fondoGris= false;
imagen.addEventListener('click', function() {
  if (!fondoGris) {
    document.body.style.background = 'lightgray'; 
    fondoGris = true;
  } else {
    document.body.style.background = '';
    fondoGris = false;
  }
});
}
