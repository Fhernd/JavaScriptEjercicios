// Ejercicio 1349: Generar un identificador único universal (GUID) con una función propia.

function generarGuid(longitud) {
    const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = [];

    for (let i = 0; i < longitud; i++) {
        resultado.push(ALFABETO.charAt(Math.floor(Math.random() * ALFABETO.length)));
    }

    return resultado.join('');
}

console.log(generarGuid(5));
console.log(generarGuid(11));
console.log(generarGuid(13));
console.log(generarGuid(17));
console.log(generarGuid(19));
