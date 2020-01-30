// Ejercicio 397: Sumar los n argumentos de una función independiente de su representación.

// 5, "5", '5', `5`

function sumar(){
    let numeros = [].slice.call(arguments);
    let suma = 0;

    for(let i = 0; i < numeros.length; ++i){
        suma += parseFloat(numeros[i]);
    }

    return suma;
}

console.log(sumar(5, "5", '5', `5`));
console.log(sumar(5.5, "5.5", '5.5', `5.5`));
console.log(sumar(5.5, "5.5"));
