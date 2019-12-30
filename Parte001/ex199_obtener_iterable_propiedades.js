// Ejercicio 199: Obtener el conjunto de propiedades de un objeto con Object.keys().

let persona = {nombre: 'Juan', apellido: 'Ortiz', edad: 39, email: 'juan@mail.co'};

console.log(persona);

let atributos = Object.keys(persona);

console.log(atributos);

console.log();

atributos.forEach((atributo) => {
    console.log('Atributo:', atributo, ' - Valor:', persona[atributo]);
});
