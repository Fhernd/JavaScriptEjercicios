// Ejercicio 373: Simplificar la condición de evaluación para efectuar un reemplazo en un arreglo.

function marcarElementos(color, indice, colores){
    (color == 'Negro') && (colores[indice] = '##');
}

let colores = ['Blanco', 'Negro', 'Rojo', 'Negro', 'Verde', 'Azul', 'Negro'];
console.log(colores);

colores.forEach(marcarElementos);

console.log(colores);
