// JavaScript Ejercicio: 1452 Encontrar el Máximo Según Atributo de Grupo de Objetos con reduce().

function maximo(datos) {
    const mayor = datos.reduce((a, o) =>  (a.y > o.y) ? a : o);

    return mayor;
}

let datos = [
    {
        x: 1,
        y: 2
    },
    {
        x: 3,
        y: 4
    },
    {
        x: 5,
        y: 3
    }
];

let resultado = maximo(datos);
console.log(resultado);

datos.push({x: 9, y: 19});
resultado = maximo(datos);
console.log(resultado);
