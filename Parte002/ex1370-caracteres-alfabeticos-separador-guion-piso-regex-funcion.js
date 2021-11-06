// Ejercicio 1370: Con una expresión regular comprobar si un texto tiene caracteres alfabéticos y guiones.

function esTextoAlfabetico(texto) {
    let patron = /^[a-z_\-]+$/i;

    return patron.test(texto);
}

console.log(esTextoAlfabetico('ABC-XYZ'));  // true
console.log(esTextoAlfabetico('ABC-XYZ-MNO'));  // true
console.log(esTextoAlfabetico('ABC_XYZ_MNO'));  // true
console.log(esTextoAlfabetico('ABC_XYZ-MNO'));  // true

console.log();

console.log(esTextoAlfabetico('ABC-123-MNO'));  // false
console.log(esTextoAlfabetico('852-123-456'));  // false
