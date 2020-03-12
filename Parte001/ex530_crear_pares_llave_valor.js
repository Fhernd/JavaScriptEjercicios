// Ejercicio 530: Crear elementos llave/valor con la clase Map de ECMAScript 6.

// Mapa - Diccionario
// Llave -> Valor

let capitales = new Map();

capitales.set('Colombia', 'Bogotá');
capitales.set('Perú', 'Lima');
capitales.set('Alemania', 'Berlín');
capitales.set('USA', 'Washington');
capitales.set('Argentina', 'Buenos Aires');
capitales.set('Venezuela', 'Caracas');
capitales.set('México', 'Ciudad de México');

console.log('Contenido actual del mapa `capitales`:', capitales)

console.log();

let pais = 'Colombia';
let capitalColombia = capitales.get(pais);
console.log(`La capital de ${pais} es ${capitalColombia}.`);

console.log();

capitales.set('México', 'DF de México');
pais = 'México';
let capitalMexico = capitales.get(pais);
console.log(`La capital de ${pais} es ${capitalMexico}.`);
