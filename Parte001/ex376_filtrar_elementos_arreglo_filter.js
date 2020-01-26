// Ejercicio 376: Filtrar los elementos de un arreglo con la función filter().

let colores = ['Blanco', 'Negro', 'Rojo', 'Negro', 'Verde', 'Azul', 'Negro'];
console.log(colores);

colores.forEach((color, indice, colores) => {
    if (color == 'Negro') colores[indice] = '##';
})

console.log(colores);

console.log();

let resultado = colores.filter((color) => {
    return color != '##';
});

console.log(resultado);
