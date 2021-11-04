// Ejercicio 1311: Abreviar el apellido de una persona usando una función personalizada.

function abreviarApellido(nombreCompleto) {
    let partes = nombreCompleto.split(' ');

    return `${partes[0]} ${partes[1][0]}.`;
}

let nombreCompleto = 'Jovany Salas';
console.log(nombreCompleto);

console.log();

console.log(abreviarApellido(nombreCompleto));  // Jovany S.
