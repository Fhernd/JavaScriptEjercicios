// Ejercicio 1280: Obtener el número del mes con dos dígitos usando una función.

// getMonth()

function obtenerNumeroDosDigitos(fecha) {
    let mes = '0' + (fecha.getMonth() + 1);

    return mes.substr(-2);
}

console.log(obtenerNumeroDosDigitos(new Date()));
console.log(obtenerNumeroDosDigitos(new Date(2021, 0, 13)));    // 01
console.log(obtenerNumeroDosDigitos(new Date(2021, 5, 17)));    // 06
