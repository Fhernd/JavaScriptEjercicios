// Ejercicio 76: Uso del Operador de Disyunción Lógica.

// || -> OR -> O -> o inclusivo

let computador1 = {id: 1, marca_procesador: 'Intel', ram: 16};

if ((computador1.marca_procesador == 'Intel' || computador1.marca_procesador == 'AMD') && computador1.ram >= 8){
    console.log('El computador no. 1 puede ejecutar Age of Empires IV.');
} else {
    console.log('El computador no. 1 no puede ejecutar Age of Empires IV.');
}

console.log();

let computador2 = {id: 2, marca_procesador: 'ARM', ram: 32};

if ((computador2.marca_procesador == 'Intel' || computador2.marca_procesador == 'AMD') && computador2.ram >= 8){
    console.log('El computador no. 2 puede ejecutar Age of Empires IV.');
} else {
    console.log('El computador no. 2 no puede ejecutar Age of Empires IV.');
}
