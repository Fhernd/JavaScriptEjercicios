// Ejercicio 863: Crear una función para normalizar una dirección URL.

function normalizarUrl(...partes) {
    return partes.join('/')
        .replace(/[\/]+/g, '/')
        .replace(/^(.+):\//, '$1://')
        .replace(/^file:/, 'file:/')
        .replace(/\/(\?|&|#[^!])/g, '$1')
        .replace(/\?/g, '&')
        .replace('&', '?');
}

console.log(normalizarUrl('http://www.wikipedia.org', 'articulo', 'JavaScript', '?resaltar=URL', '?formato=xml'));
