// Ejercicio 365: Reemplazar elementos de un arreglo por un valor usando la función splice().

let colores = ['Blanco', 'Negro', 'Rojo', 'Verde', 'Azul', 'Amarillo'];
console.log(colores); 

// Mecanismo #1:
// colores.splice(colores.indexOf('Amarillo'), 1, 'Gris');

// Mecanismo #2:
colores.splice(-1, 1, 'Gris');

console.log(colores);

console.log();

colores = ['Blanco', 'Negro', 'Rojo', 'Verde', 'Violeta'];
console.log(colores.length);
console.log(colores);

colores.splice(colores.indexOf('Violeta'), 2, 'Azul', 'Gris');
console.log(colores.length);
console.log(colores);
