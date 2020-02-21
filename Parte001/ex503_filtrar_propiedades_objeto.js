// Ejercicio 503: Filtrar las propiedades de un objeto JavaScript al convertir a JSON.

let persona = {id: 1001,
    nombre: 'Edward',
    esProgramador: true,
    tieneHijos: false,
    email: 'edw@mail.co'};

let personaJson = JSON.stringify(persona, ['id', 'nombre', 'email']);

console.log(personaJson);
