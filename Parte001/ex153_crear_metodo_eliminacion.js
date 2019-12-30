// Ejercicio 153: Crear un método para eliminar un elemento de un arreglo.

// Solución:

function eliminarElemento(arreglo, valor){
    return arreglo.filter((elemento) => {
        return elemento != valor;
    });
}

let numeros = [1, 2, 3, 4, 5, 4];

console.log(numeros);
console.log(eliminarElemento(numeros, 4));
