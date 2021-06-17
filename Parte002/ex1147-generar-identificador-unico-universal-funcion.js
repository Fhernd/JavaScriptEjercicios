// Ejercicio 1147: A través de una función generar un identificador único universal (UUID).

function guid(longitud=16) {
    const CARACTERES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const LONGITUD = CARACTERES.length;
    let resultado = [];

    for (let i = 0; i < longitud; i++) {
        resultado[i] = CARACTERES.charAt(Math.floor(Math.random() * LONGITUD));
    }

    return resultado.join('');
}

console.log(guid());

for (let i = 1; i <= 16; i++) {
    console.log(guid());
}

console.log();

for (let i = 1; i <= 16; i++) {
    console.log(guid(i));
}
