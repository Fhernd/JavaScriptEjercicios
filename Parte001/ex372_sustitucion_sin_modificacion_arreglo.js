// Ejercicio 372: Sustituir elementos de un arreglo sin modificar el arreglo original.

let colores = ['Blanco', 'Negro', 'Rojo', 'Negro', 'Verde', 'Azul', 'Negro'];
console.log(colores);

let resultado = colores.map((color, indice, colores) => {
    return color == 'Negro' ? '##' : color;
});

console.log(colores);
console.log(resultado);
console.log(colores === resultado);
