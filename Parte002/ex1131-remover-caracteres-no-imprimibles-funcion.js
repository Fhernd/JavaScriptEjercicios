// Ejercicio 1131: Remover desde un texto los caracteres no imprimibles a través de una función.

// öÖÐþJavaScript
// JavaScript

function removerCaracteresNoImprimibles(texto) {
    if (texto.constructor != String) {
        return null;
    }

    return texto.replace(/[^\x20-\x7E]/g, '');
}

console.log(removerCaracteresNoImprimibles('öÖÐþJavaScript'));  // JavaScript

console.log();

console.log(removerCaracteresNoImprimibles('äÄçÇéÉê¡JavaScript-öÖÐþúÚ es Tremendo!äÄçÇé'));
// ¡JavaScript es tremendo!

console.log();

console.log(removerCaracteresNoImprimibles(42));    // null
