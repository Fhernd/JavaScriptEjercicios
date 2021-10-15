// Ejercicio 1241: Ordenar un conjunto de objetos a partir de una llave (atributo).

let computadores = [
    {id: 1001, marca: 'MSi', ram: 32, ssd: 1024},
    {id: 1003, marca: 'Apple', ram: 16, ssd: 512},
    {id: 1002, marca: 'Clone', ram: 128, ssd: 720}
];

function compararObjetos(computador1, computador2) {
    if (computador1.marca < computador2.marca) {
        return -1;
    } else if (computador1.marca > computador2.marca) {
        return 1;
    }

    return 0;
}

console.log(computadores);

let resultado = computadores.sort(compararObjetos);

console.log();
console.log(resultado);
