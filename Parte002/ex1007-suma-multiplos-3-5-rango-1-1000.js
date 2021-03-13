// Ejercicio 1007: Definir una función para sumar los múltiplos de 3 y 5 en el rango 1 a 1000.

function sumarMultiplos3y5() {
    let suma = 0;

    for (let i = 1; i <= 1000; i++){
        if (i % 3 === 0 || i % 5 === 0) {
            suma += i;
        }
    }

    return suma;
}

console.log(sumarMultiplos3y5());
