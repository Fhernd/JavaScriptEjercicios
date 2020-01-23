// Ejercicio 351: Realizar operaciones aritméticas entre dos objetos Date.

let inicio = new Date();

setTimeout(() => {
    let fin = new Date();

    let suma = fin + inicio;
    let resta = fin - inicio;
    let producto = fin * inicio;
    let division = fin / inicio;

    console.log(suma);
    console.log(resta);
    console.log(producto);
    console.log(division);
}, 5000);
