// Ejercicio 1240: Remover los elementos null, undefined, 0, false y similares de un arreglo usando un ciclo while.

function eliminarEquivalentesFalse(datos) {
    if (!Array.isArray(datos)) {
        return null;
    }

    let indice = 0;
    let resultado = [];

    while(indice < datos.length) {
        if (datos[indice]) {
            resultado.push(datos[indice]);
        }

        ++indice;
    }

    return resultado;
}

let datos = [null, 2, undefined, 1, 0, false, '', "", 0.5, ``, 'JavaScript', {a: 100}];
console.log(datos);
console.log(datos.length);  // 7

console.log();

let resultado = eliminarEquivalentesFalse(datos);
console.log(resultado);
console.log(resultado.length); // 5
