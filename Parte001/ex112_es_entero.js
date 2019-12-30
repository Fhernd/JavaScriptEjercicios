// Ejercicio 112: Verificar que un valor dado corresponde con un número entero.

let valor = 1;
console.log(Number.isInteger(valor));

console.log();

valor = '1';
console.log(Number.isInteger(valor));<iframe width="560" height="315" src="https://www.youtube.com/embed/5CPmOxeFcUE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

console.log();

valor = NaN
console.log(Number.isInteger(valor));
valor = undefined
console.log(Number.isInteger(valor));

console.log();

valor = 1.4142;
console.log(Number.isInteger(valor));

console.log();

valor = 'JS';
console.log(Number.isInteger(valor));
