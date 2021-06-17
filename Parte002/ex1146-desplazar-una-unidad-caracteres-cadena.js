// Ejercicio 1146: Desplazar en una unidad a la derecha los caracteres de un texto (String).

// ABC
// BCD

function desplazarCaracteres(texto) {
    if (texto.constructor != String) {
        return null;
    }

    const ALFABETO_MINUSCULA = 'abcdefghijklmnopqrstuvwxyz';
    const ALFABETO_MAYUSCULA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto.charAt(i);

        if (ALFABETO_MINUSCULA.indexOf(caracter) != -1)  {
            let indice = ALFABETO_MINUSCULA.indexOf(caracter) + 1;
            resultado += ALFABETO_MINUSCULA[indice % ALFABETO_MINUSCULA.length];
        } else if (ALFABETO_MAYUSCULA.indexOf(caracter) != -1)  {
            let indice = ALFABETO_MAYUSCULA.indexOf(caracter) + 1;
            resultado += ALFABETO_MAYUSCULA[indice % ALFABETO_MAYUSCULA.length];
        } else {
            resultado += caracter;
        }
    }

    return resultado;
}

console.log(desplazarCaracteres('ABC'));    // BCD
console.log(desplazarCaracteres('XYZ'));    // YZA
console.log(desplazarCaracteres('abc'));    // bcd
console.log(desplazarCaracteres('xyz'));    // yza

console.log();

console.log(desplazarCaracteres('aBc'));    // bCd
console.log(desplazarCaracteres('xyZ'));    // yzA
