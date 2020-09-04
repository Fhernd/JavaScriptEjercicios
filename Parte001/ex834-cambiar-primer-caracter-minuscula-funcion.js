// Ejercicio 834: Cambiar a minúscula el primer carácter de un texto con una función personalizada.

function minusculaPrimerCaracter([primerCaracter, ...otrosCaracteres], restoCaracteresMayuscula=false) {
    return primerCaracter.toLowerCase() 
            + (restoCaracteresMayuscula ? otrosCaracteres.join('').toUpperCase()
                                        : otrosCaracteres.join(''));
}

console.log(minusculaPrimerCaracter('JAVASCRIPT')); //  jAVASCRIPT
console.log();
console.log(minusculaPrimerCaracter('JAVASCRIPT', true)); //  jAVASCRIPT
console.log();
console.log(minusculaPrimerCaracter('JavaScript', true)); //  jAVASCRIPT
console.log();
console.log(minusculaPrimerCaracter('JavaScript', false)); //  javascript
