document.getElementById('btn').addEventListener('click', function() {
    let solicitud = new XMLHttpRequest();
    solicitud.onload = function() {
        if (solicitud.status === 200) {
            console.log(solicitud.response);
            const respuesta = JSON.parse(solicitud.response);
            document.getElementById('imagen').src = respuesta.image;
        } else {
            alert('No se pudo cargar la imagen');
        }
    };
    solicitud.open("GET", "https://rickandmortyapi.com/api/character/259", true);
    solicitud.send();
});