// Ejercicio 1281: Obtener el número del día con dos dígitos usando una función.

function obtenerNumeroDiaDosDigitos(fecha) {
    let mes = '0' + fecha.getDate();

    return mes.substr(-2);
}

console.log(obtenerNumeroDiaDosDigitos(new Date()));    // 22
console.log(obtenerNumeroDiaDosDigitos(new Date(2021, 0, 13)));    // 13
console.log(obtenerNumeroDiaDosDigitos(new Date(2021, 5, 17)));    // 17
console.log(obtenerNumeroDiaDosDigitos(new Date(2021, 5, 1)));    // 01
console.log(obtenerNumeroDiaDosDigitos(new Date(2021, 5, 2)));    // 02
