//function example(a, b, c){ 
// return a+b+c
//}

var example = function(a, b, c) {
    return a + b + c;
};

function calcular() {
    var resultadoElement = document.getElementById("resultado");
    var resultado = example(1, 2, 3);
    resultadoElement.textContent = resultado;
}