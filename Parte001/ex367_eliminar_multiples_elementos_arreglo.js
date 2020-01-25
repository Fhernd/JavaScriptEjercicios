// Ejercicio 367: Crear función para eliminar todas las ocurrencias de un valor en un arreglo.

function eliminarOcurrencias(arreglo, valor){
    while(arreglo.indexOf(valor) != -1){
        arreglo.splice(arreglo.indexOf(valor), 1);
    }
}

let colores = ['Blanco', 'Negro', 'Rojo', 'Negro', 'Verde', 'Azul', 'Negro'];
console.log(colores.length);
console.log(colores);

console.log();

eliminarOcurrencias(colores, 'Negro');
console.log(colores.length);
console.log(colores);
