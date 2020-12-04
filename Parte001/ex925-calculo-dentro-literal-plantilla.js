// Ejercicio 925: Realizar operaciones aritméticas dentro de una literal de plantilla.

function calcularTotal(cantidad, precio) {
    return cantidad * precio;
}


let cantidad = 10;
let precio = 799;

let resultado = `El total de la compra es: $${cantidad * precio}.`;
console.log(resultado);

console.log();

resultado = `El total de la compra es: $${calcularTotal(cantidad, precio)}.`;
console.log(resultado);

console.log();

resultado = `Se han comprado ${cantidad} unidades. El valor unitario del producto es: $${precio}. El total de la compra es: $${calcularTotal(cantidad, precio)}.`;
console.log(resultado);
