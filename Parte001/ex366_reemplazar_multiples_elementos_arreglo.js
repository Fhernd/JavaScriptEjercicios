// Ejercicio 366: Crear una función para reemplazar múltiples elementos de un arreglo.

function reemplazarMultiplesElementos(arreglo, valor, nuevoValor){
    while(arreglo.indexOf(valor) != -1){
        arreglo.splice(arreglo.indexOf(valor), 1, nuevoValor);
    }
}

let colores = ['Blanco', 'Negro', 'Rojo', 'Negro', 'Verde', 'Negro', 'Azul'];
console.log(colores);

reemplazarMultiplesElementos(colores, 'Negro', 'Blanco');
console.log(colores);
