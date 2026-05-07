let botones = document.querySelectorAll(".numeros")
let resultado = document.getElementById("resultado")
let operacion
let prms = []

botones.forEach((boton) => {
    boton.addEventListener("click", pintar)
})

function pintar(e) {
    resultado.value += e.target.innerText
}

let operadores = document.querySelectorAll(".operadores")

operadores.forEach((boton) => {
    if (boton.innerText === "Ce") {
        boton.addEventListener("click", borrar)
    } else if (boton.innerText === "=") {
        boton.addEventListener("click", igual)
    } else {
        boton.addEventListener("click", obtener_parametro)
    }
    boton.addEventListener("click", pintar2)
})

function pintar2(e) {
    console.log(e.target.innerText)
}

function borrar() {
    resultado.value = ""
    prms = []
    operacion = undefined
}

function obtener_parametro(e) {
    if (resultado.value !== "") {
        prms.push(parseFloat(resultado.value))
    }
    operacion = e.target.innerText
    resultado.value = ""
}

function igual() {
    if (resultado.value !== "") {
        prms.push(parseFloat(resultado.value))
    }

    if (prms.length === 0 || !operacion) {
        return
    }

    let r = prms[0]
    for (let i = 1; i < prms.length; i++) {
        switch (operacion) {
            case "+":
                r += prms[i]
                break
            case "-":
                r -= prms[i]
                break
            case "*":
                r *= prms[i]
                break
            case "/":
                r /= prms[i]
                break
        }
    }

    resultado.value = r
    prms = []
}
