// EJERCICIO 1

let botonn = document.getElementById('calcular')
let recomendacion = ""

estatura.addEventListener('keyup', () => {
    resultado.value = ""
})
peso.addEventListener('keyup', () => {
    resultado.value = ""
})


botonn.addEventListener('click', () => {

    let res = ((peso.value) / [(estatura.value / 100) * (estatura.value / 100)])


    if (res <= 16) {
        recomendacion = "     (Insuficiencia ponderal muy grave)"
    }
    else if (16.01 < res && res <= 16.99) {
        recomendacion = "     (Insuficiencia ponderal grave)"
    }
    else if (17 < res && res <= 18.49) {
        recomendacion = "     (Bajo peso)"
    }
    else if (18.5 < res && res <= 24.99) {
        recomendacion = "     (Peso normal)"
    }
    else if (25 < res && res <= 29.99) {
        recomendacion = "     (Sobrepeso)"
    }
    else if (30 < res && res <= 34.99) {
        recomendacion = "     (Obesidad grado I)"
    }
    else if (35 < res && res <= 39.99) {
        recomendacion = "     (Obesidad grado II)"
    }
    else if (res > 40) {
        recomendacion = "     (Obesidad de grado III)"
    }
    resultado.value = res.toFixed(2) + recomendacion
})



// EJERCICIO 2

argentino.addEventListener('keyup', () => {
    dolar.value = (argentino.value / 919.12).toFixed(2)
}
)
dolar.addEventListener('keyup', () => {
    argentino.value = (dolar.value * 919.12).toFixed(2)
}
)
