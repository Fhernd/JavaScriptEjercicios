// Ejercicio 229: Estudiar la diferencia entre un objeto y un mapa.

let persona = {nombre: 'Edward', edad: 33, email: 'edward@mail.co', 101: 'valor numérico'};

console.log(persona);

for (const p in persona) {
    console.log(typeof p);
}

console.log();

let produccion = new Map();
produccion.set('ENE', 100);
produccion.set('FEB', 150);
produccion.set('MAR', 140);
produccion.set(101, 190);

console.log(produccion);

produccion.forEach((valor, llave, mapa) => {
    console.log(typeof llave);
});
