// Ejercicio 77: Uso del operador condicional ternario.

// condicion ? expresion_1 : expresion_2

let edad = 17;
let resultado;

if (edad < 18){
    resultado = 'menor de edad';
} else {
    resultado = 'mayor de edad'
}

console.log(resultado);

console.log();

resultado = edad < 18 ? 'menor de edad' : 'mayor de edad';

console.log(resultado);

console.log();

edad = 29;

resultado = edad <= 12 ? 'niño' : edad < 18 ? 'adolescente' : 'adulto';

console.log(resultado);
