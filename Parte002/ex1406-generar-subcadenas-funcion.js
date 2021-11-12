// Ejercicio 1406: Crear una función para generar todas las subcadenas posibles de un texto.

String.prototype.subcadenas = function () {
    let cadenas = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length + 1; j++) {
            cadenas.push(this.slice(i, j));
        }
    }

    return cadenas;
}

let resultado = 'gato'.subcadenas();
console.log(resultado);
console.log(resultado.length);
