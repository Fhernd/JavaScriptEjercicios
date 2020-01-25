// Ejercicio 368: Extraer una porción de un arreglo con la función slice().

let colores = ['Blanco', 'Negro', 'Rojo', 'Verde', 'Azul', 'Gris', 'Violeta'];

console.log(colores.length);
console.log(colores);

console.log();

let coloresPrimarios = colores.slice(colores.indexOf('Rojo'), colores.indexOf('Azul') + 1);
console.log(coloresPrimarios.length);
console.log(coloresPrimarios);
