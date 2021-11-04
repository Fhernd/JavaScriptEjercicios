// Ejercicio 1326: Agregar padding a una cadena de caracteres utilizando una función.

function agregarPadding(texto, padding, posicion) {
    if (posicion == 'izquierda') {
        return (padding + texto).slice(-padding.length);
    } else {
        return (texto + padding).slice(0, padding.length);
    }
}

console.log(agregarPadding(123, '00000', 'izquierda'));
console.log(agregarPadding(123, '00000', 'derecha'));
