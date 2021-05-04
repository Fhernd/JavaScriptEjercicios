// Ejercicio 1063: Crear una función para obtener la cantidad de días que tiene un año específico.

function esAgnioBisiesto(agnio) {
    return agnio % 400 === 0 || (agnio % 100 !== 0 && agnio % 4 === 0);
}

function cantidadDiasAgnio(agnio) {
    return esAgnioBisiesto(agnio) ? 366 : 365;
}

console.log(cantidadDiasAgnio(1600));   // 366
console.log(cantidadDiasAgnio(1960));   // 366
console.log(cantidadDiasAgnio(2018));   // 365
console.log(cantidadDiasAgnio(2013));   // 365
