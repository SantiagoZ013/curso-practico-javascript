function calcularNuevoPrecio(precio, porcentaje){
    const nuevoPrecio = (precio * (100 - porcentaje))/100;
    return nuevoPrecio;
}

function mostrarNuevoPrecio(){
    const inputPrecio = document.getElementById("inputPrecio");
    const valuePrecio = inputPrecio.value;
    const inputPorcentaje = document.getElementById("inputPorcentaje");
    const valuePorcentaje = inputPorcentaje.value;
    const nuevoPrecio = calcularNuevoPrecio(valuePrecio, valuePorcentaje);
    const resultadoParrafo = document.getElementById("resultP");
    resultadoParrafo.innerText = "El precio con descuento son, $" + nuevoPrecio;
}

