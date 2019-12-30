// Ejercicio 36: Crear y asignar propiedades a un objeto.

// Primera forma:
let computador = {};
computador.procesador = 'Intel Core i7';
computador.ram = 32;
computador.marca = 'MSi';
computador.board = 'ASUS';

console.log(computador.procesador);

computador.procesador = 'Intel Core i7 Octava Generación';

console.log(computador.procesador);

// Segunda forma:

computador = {procesador: 'Intel Core i7 Octava Generación', ram: 32, marca: 'MSi', board: 'ASUS', 'sistema-operativo': 'Windows 10'};

console.log(computador.procesador);

computador.procesador = 'Intel Core i7 Novena Generación';

console.log(computador.procesador);

computador['tarjeta-grafica'] = 'nVidia GeForce';

console.log(computador['tarjeta-grafica']);
