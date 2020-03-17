// Ejercicio 561: Hacer uso del módulo cheerio para obtener el texto de enlaces (a) de una página Web.

const request = require('request');
const cheerio = require('cheerio');

request('https://www.softpedia.com/', function(error, respuesta, html){
    if(!error && respuesta.statusCode == 200){
        let $ = cheerio.load(html);
        
        $('h4 a').each(function(indice, elemento){
            console.log(elemento.children[0].data);
        });
    }
});
