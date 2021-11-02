// Ejercicio 1289: Obtener el número del año con los dos últimos dígitos usando una función.

// 2021 => 21

function obtenerUltimosDigitosAgnio(fecha) {
    return ('' + fecha.getFullYear()).substr(2);
}

// 2 noviembre de 2021:
console.log(obtenerUltimosDigitosAgnio(new Date()));    // 21
console.log(obtenerUltimosDigitosAgnio(new Date(1984, 4, 13)));    // 84
