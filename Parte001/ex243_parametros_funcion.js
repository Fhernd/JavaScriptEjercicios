// Ejercicio 243: Especificar parámetros en el encabezado de declaración de una función.

function sumar(a, b){
    console.log(arguments);
    let suma = a + b;

    return suma;
}

function sumarListaValores(valores){
    console.log(arguments);
    return valores.reduce((valorActual, valorSiguiente) => {
        return valorActual + valorSiguiente;
    });
}   

console.log(sumar(2, 3));

let numeros = [1, 2, 3, 4, 5];
console.log(sumarListaValores(numeros));
