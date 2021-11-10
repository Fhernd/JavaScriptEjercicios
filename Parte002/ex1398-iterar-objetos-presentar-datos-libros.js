// Ejercicio 1398: Iterar un conjunto de libros y mostrar su información en un ciclo for-of.

let biblioteca = [
    {
        titulo: 'Crimen y castigo',
        autor: 'Dostoevsky',
        estadoLectura: true
    },
    {
        titulo: 'Steve Jobs',
        autor: 'Walter Isaacson',
        estadoLectura: true
    },
    {
        titulo: 'The Sixth Extinction',
        autor: 'Elizabeth Kolbert',
        estadoLectura: false
    }
];

for (const e of biblioteca) {
    let contenido = `${e.autor} - ${e.titulo}`;

    if (e.estadoLectura) {
        contenido += ' ya ha sido leído.'
    } else {
        contenido += ' está pendiente de ser leído.';
    }

    console.log(contenido);
}
