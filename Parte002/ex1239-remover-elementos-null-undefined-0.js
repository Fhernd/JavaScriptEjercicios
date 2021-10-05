// Ejercicio 1239: Remover los elementos null, undefined, 0, false y similares de un arreglo.

function eliminarEquivalentesFalse(datos) {
    if (!Array.isArray(datos)) {
        return null;
    }

    return datos.filter(e => e);
}

let datos = [null, 2, undefined, 1, 0, false, '', "", 0.5, ``, 'JavaScript', {a: 100}];
console.log(datos);
console.log(datos.length);

console.log();

let resultado = eliminarEquivalentesFalse(datos);
console.log(resultado);
console.log(resultado.length); // 5
