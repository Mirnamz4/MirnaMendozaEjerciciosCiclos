// EJERCICIO 3

let notas = []
let idGlobal = -1
let posicion = (notas.length) - 1

let tarjetass = document.getElementById('tarjetas')
let contenedor = document.createElement('div')
contenedor.className = "container-fluid d-flex flex-wrap justify-content-center gap-4 p-4 gap-lg-5"
tarjetass.appendChild(contenedor)
let interfaz = document.createElement('div')
interfaz.className = "interfaz"

interfaz.innerHTML =
    `
    <div class="interfaz">
        <h5 class="card-title fw-bold"> Nueva Nota </h5>

        <div class="input-group">

            <input type="text" class=" form-control" placeholder="Título" id="titulo">
            <textarea class="form-control" placeholder="Escriba su nota aquí." id="nota"></textarea>

        </div>

        <div class="botones">
            <button type="button" class="btn btn-success" id="guardar">Guardar</button>
            <button type="button" class="btn btn-danger" id="borrar">Borrar</button>
        </div>
    </div> 
`
contenedor.appendChild(interfaz)

let sinNotas = document.createElement('div')
sinNotas.innerHTML = ` <h3>No existen notas para mostrar.</h3> `
contenedor.appendChild(sinNotas)

borrar.onclick = function () {
    titulo.value = ""
    nota.value = ""
}

guardar.onclick = function () {
    if (titulo.value == "") {
        alert("El título no puede estar vacío.")
    }
    else if (nota.value == "") {
        alert("La nota no puede estar vacía.")
    }
    else {
        posicion = posicion + 1
        idGlobal = idGlobal + 1
        notas.push({
            id: idGlobal,
            titulo: titulo.value,
            texto: nota.value,
            realizada: false
        })
        crearTarjeta(posicion)
    }
    console.log(notas);
}

function crearTarjeta(x) {

    if (contenedor !== null) {
        sinNotas.remove()
    }
    let tarjeta = document.createElement('div')
    tarjeta.id = `tarjetaBorrar${idGlobal}`
    tarjeta.className = "card tarjetaTamaño "

    tarjeta.innerHTML =
        `
            <div class="card-body text-center d-flex row">
                <div class="form-check">
                    <input onclick="marcarRealizada(${idGlobal})" id="check${idGlobal}" class="form-check-input check" type="checkbox" ${notas[x].realizada ? "checked" : ""} value="" id="flexCheckChecked" >
                    <label class="form-check-label" for="flexCheckChecked">${notas[x].titulo}</label>
                </div>
                <h3>${notas[x].texto}</h3>
                <button type="button" class="btn btn-danger" onclick="borrarNota(${idGlobal})" id="borrarN">Borrar nota</button>
            </div>     
   `

    contenedor.appendChild(tarjeta)

    titulo.value = ""
}

function marcarRealizada(x) {

    let indiceCheck = document.getElementById('check' + x).checked
    let posicionCheck = notas.findIndex(elemento => { return elemento.id == x })

    if (indiceCheck == true) {
        notas[posicionCheck].realizada = true
    }
    else {
        notas[posicionCheck].realizada = false
    }

}

function borrarNota(par) {
    let tarjetaB = document.getElementById("tarjetaBorrar" + par)
    let indiceBorrado = notas.findIndex(elemento => { return elemento.id == par })
    notas.splice(indiceBorrado, 1)
    tarjetaB.remove()
    posicion = (notas.length) - 1

    if (notas.length == 0) {
        sinNotas = document.createElement('div')
        sinNotas.innerHTML = ` <h3>No existen notas para mostrar.</h3> `
        contenedor.appendChild(sinNotas)
    }
}

let buscadores = document.createElement('div')
buscadores.innerHTML =
    `
<div class="form-check form-switch">
  <input type="checkbox" onclick="mostrarRealizadas()" class="form-check-input" value="" id="checkRealizadas">
  <label class="form-check-label" for="checkRealizadas">Realizadas</label>
  </div>
<input type="text" class="form-control" placeholder="Buscar" id="buscarNotas">

    `
contenedor.appendChild(buscadores)

function mostrarRealizadas() {
    let mostrar = notas.filter(real => real.realizada == false)
    
}