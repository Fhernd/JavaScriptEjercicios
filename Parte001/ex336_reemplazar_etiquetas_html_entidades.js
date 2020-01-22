// Ejercicio 336: Reemplazar las etiquetas HTML por entidades nombradas usando replace().

let html = '<p>Esto es texto en un <span>párrafo</span>.</p>';
console.log(html);

html = html.replace(/</g, '&lt;');
html = html.replace(/>/g, '&gt;');

console.log(html);
