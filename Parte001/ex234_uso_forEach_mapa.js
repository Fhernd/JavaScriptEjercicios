// Ejercicio 234: Iterar todos los elementos de un mapa con la función forEach().

let produccion = new Map();
produccion.set('ENE', 100);
produccion.set('FEB', 150);
produccion.set('MAR', 130);
produccion.set('ABR', 200);
produccion.set('MAY', 220);

console.log(produccion);

console.log();

produccion.forEach((valor, llave, mapa) => {
    console.log(llave, mapa.get(llave));
});
