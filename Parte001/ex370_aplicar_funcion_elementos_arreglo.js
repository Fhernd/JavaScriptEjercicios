// Ejercicio 370: Aplicar una función a cada elemento de un arreglo con forEach().

let colores = ['Blanco', 'Negro', 'Rojo', 'Negro', 'Verde', 'Azul', 'Negro'];
console.log(colores);

colores.forEach((color, indice, colores) => {
    if (color == 'Negro'){
        colores[indice] = '##';
    }
});

console.log(colores);
