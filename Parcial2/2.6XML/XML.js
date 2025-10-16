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
  
document.getElementById('btnFetch').addEventListener('click', function() {
    fetch("https://rickandmortyapi.com/api/character/259")
    .then(response => response.json())
    .then(data => {
        document.getElementById('imagen').src = data.image;
        console.log()(data); 
    })
    //.then(response => console.log(response))
    .catch(err => console.error (err));
});