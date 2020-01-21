// Ejercicio 327: Estudiar la diferencia entre igualdad abstracta versus igualdad estricta.

function comparar(variable){
    return variable == 100;
}


let cadena1 = new String('JavaScript');

if (cadena1 == 'JavaScript'){
    console.log('Son iguales.');
} else {
    console.log('No son iguales.');
}

console.log();

if (cadena1 === 'JavaScript'){
    console.log('Son iguales.');
} else {
    console.log('No son iguales.');
}

console.log();

let numero = 100;
console.log(comparar(numero));

let valor = '100';
console.log(comparar(valor));
