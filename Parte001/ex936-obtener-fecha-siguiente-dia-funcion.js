// Ejercicio 936: Crear una función personalizada para obtener la fecha de mañana como cadena.

function fechaMañana(extendida=false) {
    if (typeof extendida != 'boolean') {
        throw TypeError('El argumento debe ser un valor lógico (true o false).');
    }

    let fechaActual = new Date();
    fechaActual.setDate(fechaActual.getDate() + 1);

    let resultado = `${fechaActual.getFullYear()}/${String(fechaActual.getMonth() + 1).padStart(2, '0')}`;
    
    resultado += `/${String(fechaActual.getDate()).padStart(2, '0')}`;

    return extendida ? resultado + 'T00:00:00' : resultado;
}

try {
    console.log(fechaMañana());
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(fechaMañana(true));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(fechaMañana(new Map()));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
