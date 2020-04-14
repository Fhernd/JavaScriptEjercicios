// Ejercicio 634: Definir un método como propiedad de una literal de objeto en ECMAScript 6.

let operaciones = {
    sumar(a, b) {
        return a + b;
    },
    restar(a, b) {
        return a - b;
    },
    *contador(inicio=1) {
        while (true) {
            yield inicio;
            ++inicio;
        }
    }
}

console.log(operaciones);

console.log(operaciones.sumar(2, 3));
console.log(operaciones.restar(5, 3));

console.log();

let contador = operaciones.contador();

console.log(contador.next().value);
console.log(contador.next().value);
console.log(contador.next().value);
console.log(contador.next().value);
console.log(contador.next().value);
console.log(contador.next().value);
