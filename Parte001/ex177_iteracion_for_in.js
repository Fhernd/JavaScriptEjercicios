// Ejercicio 177: Iterar cada uno de los índices de un arreglo o propiedades de un objeto.

// Arreglos:

let lenguajes = ['JS', 'PHP', 'Python', 'C++', 'Java'];

for(i in lenguajes){
    console.log('Índice:', i, '- Valor:', lenguajes[i]);
}

console.log();

// Objetos:

let edward = {nombre: 'Edward', apellido: 'Ortiz', email: 'edward@mail.co', edad: 31};

for(p in edward){
    console.log('Propiedad:',p, ' - Valor:', edward[p]);
}
