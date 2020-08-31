// Ejercicio 825: Extraer los valores de un objeto sobre un arreglo con la función Object.values().

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) === '[object Object]';
}

function extraerValores(objeto) {
    if (!esObjetoEstandar(objeto)) {
        throw TypeError('El argumento «objeto» debe ser un objeto.');
    }

    return Object.values(objeto);
}

let persona = {
    id: 1001,
    nombre: 'Johnny',
    correo: 'johnny@mail.co',
    edad: 31
};

try {
    console.log(extraerValores(persona));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerValores(new Array()));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
