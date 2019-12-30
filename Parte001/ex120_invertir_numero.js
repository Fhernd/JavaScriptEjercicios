// Ejercicio 120: Representar un número al revés.

// Solución:

// 12345 => ['1', '2', '3', '4', '5'] => ['5', '4', '3', '2', '1'] => '54321' => 54321


function invertirNumero(numero){
    return Number(numero.toString().split('').reverse().join(''))
}


let valor = 12345;

console.log(valor);
console.log(invertirNumero(valor));
