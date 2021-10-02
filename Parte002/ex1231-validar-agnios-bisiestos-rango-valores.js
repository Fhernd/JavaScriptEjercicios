// Ejercicio 1231: Encontrar los años bisiestos en un rango de años con una función.

function esBisiesto(agnio) {
    return ((agnio % 4 == 0 && agnio % 100 != 0) || (agnio % 100 == 0 && agnio % 400 == 0));
}

function validarAgnios(inicio, final) {
    let agnios = [];

    for (let agnio = inicio; agnio <= final; agnio++) {
        agnios.push(agnio);
    }

    return agnios.filter(esBisiesto);
}

let resultado = validarAgnios(1900, 2030);
console.log(resultado);
console.log(resultado.length);
