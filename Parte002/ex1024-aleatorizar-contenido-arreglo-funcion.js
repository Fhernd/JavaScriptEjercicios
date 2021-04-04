// Ejercicio 1024: Definir una función para aleatorizar el contenido de un arreglo.

function aleatorizarArreglo(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    let contador = datos.length;
    let i;

    while (contador > 0) {
        i = Math.floor(Math.random() * contador);
        
        --contador;

        [datos[contador], datos[i]]= [datos[i], datos[contador]];
    }

    return datos;
}

let numeros = [1, 2, 3, 4, 5];

try {
    console.log(aleatorizarArreglo(numeros));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(aleatorizarArreglo('a'));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
