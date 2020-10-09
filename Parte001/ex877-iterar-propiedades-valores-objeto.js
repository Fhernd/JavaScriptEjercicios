// Ejercicio 877: Iterar las propiedades y valores de un objeto con la función Object.entries().

let persona = {
    id: 1001,
    nombre: 'Edward',
    edad: 29,
    email: 'edward@mail.co',
    profesiones: ['Técnico', 'Tecnólogo']
}

for (const [p, v] of Object.entries(persona)) {
    console.log(`${p} = ${v}`);
}
