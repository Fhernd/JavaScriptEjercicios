// Ejercicio 816: Convertir un conjunto de objetos a una cadena de datos CSV.

// ['a', 'b'] => 'a,b'

function convertirACsv(datos, columnas, separador=',') {
    if (!Array.isArray(datos)) {
        throw TypeError('El primer argumento debe ser un arreglo.');
    }
    
    if (!Array.isArray(columnas)) {
        throw TypeError('El segundo argumento debe ser un arreglo.');
    }

    if (typeof separador !== 'string') {
        throw TypeError('El tercer argumento debe ser una cadena de caracteres.');
    }

    return [
        columnas.join(separador),
        ...datos.map(d => columnas.reduce(
            (a, p) => `${a}${!a.length ? '' : separador}${d[p] ? d[p] : ''}`, ''
        ))
    ].join('\n');
}

let objetos = [{id: 1001, nombre: 'Oliva'}, {id: 1002, nombre: 'Juan'}, {id: 1003, nombre: 'Julio'}];

try {
    console.log(convertirACsv(objetos, ['id', 'nombre']));
} catch (e) {
    console.log(`Error: ${e.message}`);
}
