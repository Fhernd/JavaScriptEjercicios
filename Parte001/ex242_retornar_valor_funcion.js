// Ejercicio 242: Usar la sentencia return para retornar un valor desde una función.

function sumar(a, b){
    return a + b;
}

function mostrarMensaje(mensaje){
    console.log(mensaje);
}

function crearConjunto(lista){
    let conjunto = new Set(lista);

    return conjunto;
}

console.log(sumar(2, 3));

console.log();

let resultado = mostrarMensaje('¡JavaScript es tremendo!');
console.log(resultado);

console.log();

resultado = crearConjunto([1, 2, 2, 3, 3, 3, 4, 5]);
console.log(resultado);
