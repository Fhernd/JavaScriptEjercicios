// Ejercicio 1340: Remover las etiquetas HTML o XML de una cadena de caracteres con una función.

// <nombre_etiqueta>
// </nombre_etiqueta>

function removerEtiquetasHtmlXml(texto) {
    return texto.replace(/<[^>]*>/g, '');
}

let html = '<em>Hola</em> <p>Esto es JavaScript</p>';
console.log(html);

console.log();

let resultado = removerEtiquetasHtmlXml(html);
console.log(resultado);
