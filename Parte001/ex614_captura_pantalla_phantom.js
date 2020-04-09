// Ejercicio 614: Realizar una captura de pantalla de una página Web con PhantomJS.

var page = require('webpage').create();

page.open('http://www.google.com', function() {
    setTimeout(function() {
        page.render('google.png');
        phantom.exit();
    }, 200);
});
