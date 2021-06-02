// Ejercicio 1118: Definir una función para remover las secuencias de escape de un texto HTML.

// &lt;a&gt;ABC&lt;/b&gt;
// <a>ABC</a>

function removerSecuenciaEscape(html) {
    if (html.constructor != String) {
        return null;
    }

    let caracteresReemplazo = {
        '&': '&',
        '&lt;': '<',
        '&gt;': '>',
        '"': '"'
    };

    return html.replace(/(&lt;|&gt;)/g, function (etiqueta) {
        return caracteresReemplazo[etiqueta] || etiqueta;
    });
}

console.log(removerSecuenciaEscape('&lt;a&gt;ABC&lt;/b&gt;'));  // <a>ABC</a>
