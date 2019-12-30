// Ejercicio 78: Usar múltiples expresiones a través del operador coma.

// ,

let lenguajes = ['JS', 'Python', 'C++', 'C#'],
    computador = {id: 1, ram: 32},
    contador = lenguajes.length;

for(let i = 0, n = lenguajes.length; i < contador; ++i, --n){
    console.log(`Lenguaje programación actual: ${lenguajes[i]}. (Quedan ${n - 1} lenguajes de programación por procesar)`);
}
