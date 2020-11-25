// Ejercicio 920: Iterar por los diferentes datos de un objeto Map con un ciclo for...of.

let paises = new Map();

paises.set('Colombia', 'Bogotá');
paises.set('Perú', 'Lima');
paises.set('Ecuador', 'Quito');
paises.set('Rusia', 'Moscú');
paises.set('Argentina', 'Buenos Aires');
paises.set('España', 'Madrid');

for(const pais of paises) {
    console.log(pais);
}
