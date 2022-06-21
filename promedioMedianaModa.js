const lista = [
    100,
    350,
    250,
    500,
]

function calcularPromedio(lista){
    let sumatoria = 0;
    for(let i = 0; i<lista.length; i++){
        sumatoria = sumatoria + lista[i];
    }
    const promedio = sumatoria/lista.length;
    return promedio;
}


let mediana = 0;

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

const mitadLista = parseInt(lista.length / 2);

if(esPar(lista.length)){
    
}else{
    mediana = lista[mitadLista];
}