// Ejercicio 195: Iterar por todas las propiedades de un objeto con el ciclo for...in.

let persona = {nombre: 'Daniela', apellido: 'Ortiz', edad: 26, email: 'daniela@mail.com'};

for(let p in persona){
    console.log('Propiedad:', p, '- Valor:', persona[p]);
}
