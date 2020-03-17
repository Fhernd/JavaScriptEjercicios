// Ejercicio 555: Ejecutar un comando Windows vía cmd.exe con el módulo child_process de Node.js.

const child_process = require('child_process');

let comando = child_process.spawn('cmd', ['/c', 'dir C:\\Windows\n']);

comando.stdout.on('data', function(datos){
    console.log('Salida:');
    console.log(datos.toString());
});

comando.stderr.on('data', function(datos){
    console.log('Error: ', datos);
})

comando.on('exit', function(codigo){
    console.log('El proceso ha finalizado con el códig:', codigo);
});
