// Ejercicio 1033: Definir una función para extraer los valores null, undefined, false, 0, y NaN desde un arreglo.

function extraerValoresNull(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    return datos.filter(d => !Boolean(d));
}

let datos = [NaN, 0, 13, false, -11, '', undefined, 101, null, 'JS', '', ' ', ``, '\n', ""];

try {
    let resultado = extraerValoresNull(datos);

    console.log(resultado);
    console.log(resultado.length);
} catch (e) {
    console.log(`Error: ${e.message}`);
}
