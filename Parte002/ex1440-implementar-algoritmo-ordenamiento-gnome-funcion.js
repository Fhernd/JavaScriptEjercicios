// Ejercicio 1440: Implementar el algoritmo de ordenamiento gnome en una función.

function ordenamientoGnome(datos) {
    function moverAtras(i) {
        for(; i > 0 && datos[i - 1] > datos[i]; --i) {
            [datos[i], datos[i - 1]] = [datos[i - 1], datos[i]];
        }
    }

    for (let i = 1; i < datos.length; i++) {
        if (datos[i - 1] > datos[i]) {
            moverAtras(i);
        }
    }

    return datos;
}

let primos = [13, 2, 19, 5, 3, 7, 11, 23];
console.log(primos);

console.log();

let resultado = ordenamientoGnome(primos);
console.log(resultado);
