// Ejercicio 248: Crear una función generadora en ECMAScript 6 (ES6).

function * generarCadenas(){
    yield '¡JavaScript';

    yield 'es';

    yield 'tremendo!';
}

let objetoGenerador = generarCadenas();

console.log(objetoGenerador.next());
console.log(objetoGenerador.next());
console.log(objetoGenerador.next());
console.log(objetoGenerador.next());
console.log(objetoGenerador.next());
