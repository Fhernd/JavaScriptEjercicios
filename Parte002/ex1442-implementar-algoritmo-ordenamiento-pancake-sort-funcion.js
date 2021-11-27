// Ejercicio 1442: Implementar el algoritmo de ordenamiento pancake sort en una función.

function pancakeSort(datos) {
    for (let i = datos.length - 1; i >= 1; --i) {
        let indiceMaximo = 0;
        let maximo = datos[0];

        for (let j = 1; j <= i; ++j) {
            if (datos[j] > maximo) {
                maximo = datos[j];
                indiceMaximo = j;
            }
        }

        if (indiceMaximo == i) {
            continue;
        }

        let particion;

        if (indiceMaximo > 0) {
            particion = datos.slice(0, indiceMaximo + 1).reverse();

            for (let j = 0; j <= indiceMaximo; ++j) {
                datos[j] = particion[j];
            }
        }

        particion = datos.slice(0, i + 1).reverse();
        for (let j = 0; j <= i; ++j) {
            datos[j] = particion[j];
        }
    }

    return datos;
}

let primos = [13, 2, 19, 5, 3, 7, 11, 23];
console.log(primos);

console.log();

let resultado = pancakeSort(primos);
console.log(resultado);
