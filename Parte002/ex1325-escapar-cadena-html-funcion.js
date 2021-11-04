// Ejercicio 1325: Escapar el contenido HTML usando una función personalizada.

// &lt; -> <
// &gt; -> >

function escaparHtml(html) {
    const CARACTERES_REEMPLAZO = {
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&amp;': '&'
    };

    return html.replace(/&amp;|&lt;|&gt;|&quot;/g, function(etiqueta) {
        return CARACTERES_REEMPLAZO[etiqueta] || etiqueta;
    });
}

let enlace = '&lt;a href=&quot;http://ortizol.blogpost.com&quot;&gt;Blog OrtizOL&lt;/a&gt;'

console.log(escaparHtml(enlace));   // <a href="http://ortizol.blogpost.com">Blog OrtizOL</a>
