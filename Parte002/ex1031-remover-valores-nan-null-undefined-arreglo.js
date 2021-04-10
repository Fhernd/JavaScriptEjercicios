// Ejercicio 1031: Definir una función para remover valores null, undefined, false, 0, y NaN de un arreglo.

function eliminarValoresNulos(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    return datos.filter(Boolean);
}

let datos = [NaN, 0, 13, false, -11, '', undefined, 101, null, 'JS', '', ' ', ``, '\n', ""];
console.log(datos);
console.log(datos.length);  // 15

console.log();

try {
    let resultado = eliminarValoresNulos(datos);
    console.log(resultado);
    console.log(resultado.length);
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    resultado = eliminarValoresNulos(100);  // Error
    console.log(resultado);
    console.log(resultado.length);
} catch (e) {
    console.log(`Error: ${e.message}`);
}
