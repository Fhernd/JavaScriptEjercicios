// Ejercicio 1339: Convertir una cadena de caracteres en formato título libro.

// Los hermanos Karámazov
// Los Hermanos Karámazov

function convertirTituloLibro(titulo) {
    return titulo.replace(/\w\S*/g, function(p) {
        return p.charAt(0).toUpperCase() + p.substr(1).toLowerCase();
    });
}

let tituloLibro = 'Los hermanos Karámazov';
console.log(tituloLibro);
console.log(convertirTituloLibro(tituloLibro));
