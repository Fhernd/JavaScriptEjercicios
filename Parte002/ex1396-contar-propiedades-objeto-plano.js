// Ejericicio 1396: Contar las propiedades de un objeto plano a través de una función.

function contarPropiedadesObjeto(objeto) {
    let contadorPropiedades = 0;

    for(const p in objeto) {
        if (objeto.hasOwnProperty(p)) {
            ++contadorPropiedades;
        }
    }

    return contadorPropiedades;
}

let computador = {
    id: 1001,
    marca: 'MSi',
    cpu: 'Intel Core i7',
    ram: '16GB'
};

console.log(contarPropiedadesObjeto(computador));   // 4
