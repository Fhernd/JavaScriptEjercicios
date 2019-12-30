// Ejercicio 308: Obtener la información de usuario de GitHub usando la API Fetch.

let url = 'https://api.github.com/users/Fhernd';

fetch(url)
.then((respuesta) => respuesta.json())
.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});
