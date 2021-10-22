// Ejercicio 1276: Crear una función para obtener el número cuarto de un año.

// 1 - 4

function obtenerCuarto(fecha) {
    let mes = fecha.getMonth() + 1;

    return Math.ceil(mes / 3);
}

console.log(obtenerCuarto(new Date()));    // 4
console.log(obtenerCuarto(new Date(2021, 1, 13)));    // 1
console.log(obtenerCuarto(new Date(2021, 4, 2)));    // 2
console.log(obtenerCuarto(new Date(2021, 7, 2)));    // 3
