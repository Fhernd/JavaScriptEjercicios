// Ejercicio 1057: Encontrar la diferencia en días entre dos objetos de tipo fecha (Date).

function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === '[object Date]';
}

function diferenciaDias(fecha1, fecha2) {
    if (!esFecha(fecha1) || !esFecha(fecha2)) {
        throw TypeError('Los dos argumentos deben ser de tipo fecha (Date)');
    }

    let tiempoUtcFecha1 = Date.UTC(fecha1.getFullYear(), fecha1.getMonth(), fecha1.getDate());
    let tiempoUtcFecha2 = Date.UTC(fecha2.getFullYear(), fecha2.getMonth(), fecha2.getDate());

    return Math.floor((tiempoUtcFecha2 - tiempoUtcFecha1) / (24 * 60 * 60 * 1000));
}

try {
    console.log(diferenciaDias(new Date(2020, 1, 1), new Date(2021, 1, 1)));    // 366
} catch (e) {
    console.log(`Error: ${e.message}`); 
}

console.log();

try {
    console.log(diferenciaDias(new Date(2020, 1, 1), new Date(2043, 1, 1)));    // ?
} catch (e) {
    console.log(`Error: ${e.message}`); 
}

console.log();

try {
    console.log(diferenciaDias(new Date(2021, 3, 30), new Date(2021, 4, 3)));    // 4
} catch (e) {
    console.log(`Error: ${e.message}`); 
}

console.log();

try {
    console.log(diferenciaDias(1000, new Date(2021, 4, 3)));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`); 
}
