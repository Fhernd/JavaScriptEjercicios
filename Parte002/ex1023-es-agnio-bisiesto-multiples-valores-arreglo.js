// Ejercicio 1023: Verificar que los años dados en un arreglo sean años bisiestos.

function esBisiesto(agnio) {
    return (agnio % 4 === 0 && agnio % 100 !== 0) || (agnio % 100 === 0 && agnio % 400 == 0);
}

let agnios = [1997, 1600, 2000, 2012, 1998, 2020, 2021];

let resultado = agnios.map(esBisiesto);

console.log(resultado); // [false, true, true, ...]
