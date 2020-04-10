// Ejercicio 625: Usar los módulos Node.js mysql y squel para consultar una base de datos MySQL.

const mysql = require('mysql');
const squel = require('squel');

let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'centralpharmabd'
});

conexion.connect;

let consulta = squel.select()
    .field('id')
    .field('nombre')
    .field('cantidad_unidad')
    .field('precio_unidad')
    .field('precio_costo')
    .from('producto')
    .where('id = 1');

console.log('Consulta SQL:', consulta.toString());

conexion.query(consulta.toString(), function(error, registros, campos) {
    if (error) {
        throw error;
    }

    registros.forEach(function(registro, indice, arreglo) {
        console.log('ID:', registro.id);
        console.log('Nombre:', registro.nombre);
        console.log('Cantidad unidad:', registro.cantidad_unidad);
        console.log('Precio unidad:', registro.precio_unidad);
        console.log('Precio costo:', registro.precio_costo);
        console.log();
    });

    conexion.end();
});
