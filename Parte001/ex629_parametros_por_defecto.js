// Ejercicio 629: Especificar valores por defecto a una función en ECMAScript 2015 (ES6).

// ECMAScript 5 (ES5)
function exponenciacion1(base, exponente){
    if (exponente === undefined){
        exponente = 2;
    }

    return Math.pow(base, exponente);
}

// ECMAScript 6 (ES6):

function exponenciacion2(base, exponente=2){

    return Math.pow(base, exponente);
}

let resultado = exponenciacion1(3);

console.log("Resultado:", resultado);

console.log();

resultado = exponenciacion2(3);

console.log("Resultado:", resultado);
