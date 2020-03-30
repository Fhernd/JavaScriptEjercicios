// Ejercicio 586: Obtener contenido JSON de solicitud a galería de fotos de Flickr con Node.js.

let Client = require('node-rest-client').Client;

let clienteRest = new Client();

clienteRest.get('https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=a274795b1dad3df8d54018c4c1b41763&gallery_id=72157690043684744&format=json&nojsoncallback=1', function(datos, respuesta) {
    console.log(datos);

    console.log();

    datos.photos.photo.forEach((foto) => {
        console.log(foto);
    });
});
