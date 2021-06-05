// Ejercicio 1130: Agregar secuencias de escape para código HTML a través de una función personalizada.

// <a href="https://ortizol.blogspot.com">Blog John Ortiz Ordoñez</a>
// &lt;a href=&quot;https://ortizol.blogspot.com&quot;&gt;Blog John Ortiz Ordoñez&lt;/a&gt;

function agregarSecuenciasEscapeHtml(html) {
    if (html.constructor != String) {
        return null;
    }

    let mapeo = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return html.replace(/[&<>"']/g, function(coincidencia) {
        return mapeo[coincidencia];
    });
}

console.log(agregarSecuenciasEscapeHtml('<a href="https://ortizol.blogspot.com">Blog John Ortiz Ordoñez</a>'));
// &lt;a href=&quot;https://ortizol.blogspot.com&quot;&gt;Blog John Ortiz Ordoñez&lt;/a&gt;
