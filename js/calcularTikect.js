function calcularTotal(){
    const precio = 200;
    let cantidad = obtenerCantidad();
    let categoria = obtenerCategoria();
    console.log(cantidad);
    console.log(categoria);

    precioFinal = calcularPrecioFinal(cantidad,categoria,precio);
    console.log(precioFinal);
    actualizarPrecio(precioFinal);

}

obtenerCantidad = () =>{
    let cantidad = document.getElementById('cantidad').value;
    cantidad = Number(cantidad);
    return cantidad;
}

obtenerCategoria = () =>{
    let categoria = document.getElementById('categoria').value;
    categoria = Number(categoria);
    return categoria;
}

calcularPrecioFinal = (cantidad,categoria,precio) =>{
    if (categoria == 1){
        precio = precio *0.2;
    }
    if (categoria == 2){
        precio = precio *0.5;
    }
    if (categoria == 3){
        precio = precio *0.85;
    }
    precioFinal = cantidad * precio;
    return precioFinal;
}

actualizarPrecio = (precioFinal) =>{
    document.getElementById('precio').innerText = precioFinal;
}

function limpiar() {
    document.getElementById('categoria').value = 0;
    document.getElementById('cantidad').value = 0;
    document.getElementById('precio').value = "00.00";
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('email').value = "";
}