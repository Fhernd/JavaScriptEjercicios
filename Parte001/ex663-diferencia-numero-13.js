// Ejercicio 663: Obtener la diferencia entre un número n y el 12 si en n es menor o igual; en caso contrario, calcular el doble de la diferencia absoluta.

function diferencia(n) {
    if (n <= 12) {
        return 12 - n;
    } else {
        return (n - 12) * 2;
    }
}

let numero = 5;
console.log(diferencia(numero));    // 7

numero = 17;
console.log(diferencia(numero));    // 10
