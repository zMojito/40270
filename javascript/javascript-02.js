let numeros = document.getElementsByClassName("numeros");
let operadores = document.getElementsByClassName("operadores");
let resultado = document.getElementById("resultado");

for (const key in numeros){
    if (Object.hasOwnProperty.call(numeros, key)) {
        const element = numeros[key];
        element.addEventListener("click", pinta);
    }
}

for (const key in operadores){
    if (Object.hasOwnProperty.call(operadores, key)) {
        const element = operadores[key];
        if (element.id === "bBorrar")
            element.addEventListener("click", limpiar);
        if (element.id === "bSuma")
            element.addEventListener("click", sumar);
        if (element.id === "bIgual")
            element.addEventListener("click", igual);
        element.addEventListener("click", pinta2);
        
    }
}


function pinta(e){
   resultado.value += e.target.innerText;
}

function pinta2(e){
    console.log(e.target.innerText);
}

function sumar(e){
    prm = resultado.value;
    operacion = e.target.innerText;
    resultado.value = "";
    e.target.style.backgroundColor = "red";

}

function igual(){
    let prm2 = resultado.value;
    if (operacion === "+") {
        resultado.value = parseInt(prm) + parseInt(prm2);
        document.getElementById("bSuma").style.backgroundColor = "bisque";
        
    }
}

function limpiar(e){
    resultado.value = "";
}