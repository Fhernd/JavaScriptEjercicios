// Ejercicio 1327: Obtener una parte de una cadena de caracteres a partir de un cáracter y posición dados.

// JavaScript es: tremendo
// t, 't'
// => JavaScript
// ':'
// => 'JavaScript es'

function extraerParteTexto(texto, limite, direccion) {
    if (direccion == 'izquierda') {
        return texto.substring(texto.indexOf(limite) + 1);
    } else if (direccion == 'derecha') {
        return texto.substring(0, texto.indexOf(limite));
    } else {
        return texto;
    }
}

console.log(extraerParteTexto('JavaScript es: tremendo', ':', 'derecha'));
