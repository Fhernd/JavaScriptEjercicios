// Ejercicio 1263: Obtener el nombre del mes de una fecha particular a través de una función.

function esFecha(dato) {
    return Object.prototype.toString.call(dato) === '[object Date]';
}

function obtenerNombreMes(fecha) {<div dir="ltr" trbidi="on">
<h2>
<span style="color: orange; font-family: &quot;trebuchet ms&quot; , sans-serif;">1. Video</span></h2>
<div style="text-align: center;">
<span style="color: orange; font-family: &quot;trebuchet ms&quot; , sans-serif;"></span></div>
<div>
<div style="text-align: center;">
<span style="font-family: &quot;trebuchet ms&quot; , sans-serif;"><iframe width="560" height="315" src="https://www.youtube.com/embed/sncN76OSGyw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></span></div>
</div>
<h2>
<span style="color: #38761d; font-family: &quot;trebuchet ms&quot; , sans-serif;">2. Código</span></h2>
<span style="font-family: &quot;trebuchet ms&quot; , sans-serif;"><a href="https://github.com/Fhernd/JavaScriptEjercicios">https://github.com/Fhernd/JavaScriptEjercicios</a></span><span style="font-family: &quot;trebuchet ms&quot; , sans-serif;"><br /></span>
<span style="font-family: &quot;trebuchet ms&quot; , sans-serif;"><br />
</span><br />
<div style="text-align: right;">
<span style="font-family: &quot;trebuchet ms&quot; , sans-serif; font-size: xx-small;">O</span></div>
</div>

    if (!esFecha(fecha)) {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    return MESES[fecha.getMonth()];
}

try {
    console.log(obtenerNombreMes(new Date()));  // Octubre
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerNombreMes(new Date(2019, 7, 13)));  // Julio
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerNombreMes('2021/07/13'));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
