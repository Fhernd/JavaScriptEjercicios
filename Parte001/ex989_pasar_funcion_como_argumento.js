// Ejercicio 989: Pasar una función como argumento de otra función.

function agregarProducto(producto, callbackRefrescar) {
    // agregamos el producto
    // otras instrucciones
    console.log('El producto se agregó a la base de datos.');

    callbackRefrescar();
}

function refrescarGui() {
    console.log('Se está refrescando la interfaz...');
}

agregarProducto({id: 1, nombre: 'Computador'}, refrescarGui);
