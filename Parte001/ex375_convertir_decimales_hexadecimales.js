// Ejercicio 375: Convertir un grupo de números decimales a hexadecimales con map().

let decimales = [29, 31, 255, 5, 17, 23, 101, 23537];

let hexadecimales = decimales.map((decimal) => {
    return decimal.toString(16);
});

console.log(decimales);
console.log(hexadecimales);
