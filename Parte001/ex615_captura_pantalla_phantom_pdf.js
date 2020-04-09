// Ejercicio 615: Realizar una captura de pantalla de una página Web como PDF con PhantomJS.

var page = require('webpage').create();

page.open('http://www.google.com', function() {
    setTimeout(function() {
        page.render('google.pdf', {'format': 'pdf', 'quality': 100});
        phantom.exit();
    }, 5000);
});
