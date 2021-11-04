// Ejercicio 1321: Humanizar un número agregando su sufijo ordinal con una función.


// st -> 'primero'
// nd -> 'segundo'

function humanizarNumero(numero) {
    if (numero % 100 >= 11 && numero % 100 <= 13) {
        return `${numero}th`;
    }

    switch(numero % 10) {
        case 1:
            return `${numero}st`;
        case 2:
            return `${numero}nd`;
        case 3:
            return `${numero}rd`;
    }

    return `${numero}th`;
}

for (let i = 1; i <= 50 ; i++) {
    console.log(humanizarNumero(i));
}
