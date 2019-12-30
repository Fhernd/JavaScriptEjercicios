// Ejercicio 263: Crear identificadores únicos para cada objeto definido.

let edward = {id: Symbol(), nombre: 'Edward', apellido: 'Ortiz', edad: 33};
let daniela = {id: Symbol(), nombre: 'Daniela', apellido: 'Ordoñez', edad: 26};

console.log(edward);
console.log(daniela);

console.log(edward.id == daniela.id);
