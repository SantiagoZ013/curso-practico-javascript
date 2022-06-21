//Código cuadrado 

function perimetroCuadrado(lado){
    return lado * 4;
}

const areaCuadrado = (lado) => lado*lado;


//Código Triángulo


const perimetroTriangulo = (lado1, lado2, base) => (lado1 + lado2+base);

const areaTriangulo = (base, altura) => (base*altura)/2;


//Código Circulo

const diametroCirculo = (radioCirculo) => radioCirculo * 2;

const PI = Math.PI;

const perimetroCirculo = (diametroCirculo) => diametroCirculo * PI;

const areaCirculo = (radioCirculo) => (radioCirculo * radioCirculo) * PI;



//Aqui van las funciones con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}