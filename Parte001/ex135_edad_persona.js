// Ejercicio 135: Calcular la edad de una persona con objetos Date.

// Solución:

let fechaNacimiento = new Date('10/02/2019');
let ahora = new Date();
let agnios = ahora.getFullYear() - fechaNacimiento.getFullYear();

fechaNacimiento.setFullYear(ahora.getFullYear);

if(ahora < fechaNacimiento){
    --agnios;
}

console.log(agnios);
