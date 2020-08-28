// Ejercicio 815: Definir una función para leer el contenido CSV en un arreglo 2D.

// CSV => texto

function leerCsv(texto, separador=',', omitirEncabezado=false) {
    if (typeof texto !== 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    return texto.slice(omitirEncabezado ? texto.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(l => l.split(separador));
}

try {
    console.log(leerCsv('id,nombre\n1001,Oliva\n1002,Juan\n1003,Julio'));
    // [['id', 'nombre'], ['1001', 'Oliva'], ['1002', 'Juan'], ['1003', 'Julio']]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(leerCsv('id;nombre\n1001;Oliva\n1002;Juan\n1003;Julio', ';'));
    // [['id', 'nombre'], ['1001', 'Oliva'], ['1002', 'Juan'], ['1003', 'Julio']]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(leerCsv('id;nombre\n1001;Oliva\n1002;Juan\n1003;Julio', ';', true));
    // [['id', 'nombre'], ['1001', 'Oliva'], ['1002', 'Juan'], ['1003', 'Julio']]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(leerCsv(new Object(), ';', true));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
