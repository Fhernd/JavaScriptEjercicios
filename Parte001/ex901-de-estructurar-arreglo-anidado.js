// Ejercicio 901: Des-estructurar un arreglo anidado dentro de otro, y crear variables para cada valor.

function obtenerValores() {
    return [
        'Edward Ortiz',
        'edw@mail.co',
        ['Smartphone', 'Tablet', 'Monitor']
    ];
}

console.log(obtenerValores());

console.log();

let [nombre, correo, [dispositivo1, dispositivo2, dispositivo3]] = obtenerValores();

console.log(nombre);
console.log(correo);
console.log(dispositivo1);
console.log(dispositivo2);
console.log(dispositivo3);
