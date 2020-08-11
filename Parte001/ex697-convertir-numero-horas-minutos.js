// Ejercicio 697: Crear una función para convertir a horas y minutos un valor numérico entero.

function convertirHorasMinutos(numero) {
    if(Number.isInteger(numero)) {
        if (numero > 0) {
            let horas = Math.floor(numero / 60);
            let minutos = numero % 60;

            horas = ('0' + horas).slice(-2);
            minutos = ('0' + minutos).slice(-2);
            return `${horas}:${minutos}`;
        } else {
            return null;
        }
    } else {
        throw new Error('El valor pasado como argumento no es un número entero.');
    }
}

try {
    console.log(convertirHorasMinutos(123.13));
} catch (e) {
    console.log(e);
}

console.log();

try {
    console.log(convertirHorasMinutos(-123));
} catch (e) {
    console.log(e);
}

console.log();

try {
    console.log(convertirHorasMinutos(123));    // 2:3
} catch (e) {
    console.log(e);
}

console.log();

try {
    console.log(convertirHorasMinutos(11123));    // 
} catch (e) {
    console.log(e);
}
