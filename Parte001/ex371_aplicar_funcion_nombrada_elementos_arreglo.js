// Ejercicio 371: Aplicar una función nombrada a cada elemento de un arreglo con forEach().

function marcarElementos(color, indice, colores){
    if (color == 'Negro'){
        colores[indice] = '##';
    }
}

let colores = ['Blanco', 'Negro', 'Rojo', 'Negro', 'Verde', 'Azul', 'Negro'];
console.log(colores);

colores.forEach(marcarElementos);

console.log(colores);
