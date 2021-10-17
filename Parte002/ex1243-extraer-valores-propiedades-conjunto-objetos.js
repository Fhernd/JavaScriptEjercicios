// Ejercicio 1243: Extraer todos los valores de las propiedades de un conjunto de objetos.

function extraerValoresObjetos(objetos) {
    let valores = [];

    for (const e of objetos) {
        Object.keys(e).forEach((k) => valores.push(e[k]));
    }

    return valores;
}

let computadores = [
    {id: 1001, marca: 'MSi', ram: 32, ssd: 1024},
    {id: 1003, marca: 'Apple', ram: 16, ssd: 512},
    {id: 1002, marca: 'Clone', ram: 128, ssd: 720}
];

let resultado = extraerValoresObjetos(computadores);

console.log(resultado);
console.log(resultado.length);  // 12
