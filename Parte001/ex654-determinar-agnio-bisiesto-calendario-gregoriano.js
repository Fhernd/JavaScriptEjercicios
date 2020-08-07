// Ejercicio 654: Determinar si un año es bisiesto en el calendario gregoriano.

function esBisiesto(agnio) {
    return agnio % 100 === 0 ? agnio % 400 === 0 : agnio % 4 === 0;
}

console.log(`¿El año 1600 es bisiesto?: ${esBisiesto(1600)}`);
console.log(`¿El año 2000 es bisiesto?: ${esBisiesto(2000)}`);
console.log(`¿El año 2010 es bisiesto?: ${esBisiesto(2010)}`);
console.log(`¿El año 2020 es bisiesto?: ${esBisiesto(2020)}`);
console.log(`¿El año 3020 es bisiesto?: ${esBisiesto(3020)}`);
console.log(`¿El año 3042 es bisiesto?: ${esBisiesto(3042)}`);
