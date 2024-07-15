// EJERCICIO 3

let notas = []
let idGlobal = -1
let posicion = (notas.length) - 1

let tarjetass = document.getElementById('tarjetas')
let contenedor = document.createElement('div')
contenedor.className = "container-fluid p-3"
contenedor.id = `conte`
tarjetass.appendChild(contenedor)

let interfaz = document.createElement('div')
interfaz.className = "rounded-pill container-fluid text-center border border-light-subtle"
interfaz.id = `inter`
interfaz.innerHTML =
    `
    <div class="interfaz rounded-pill">
        <h5 class="card-title fw-bolder fs-3 p-3 fst-italic" id="nuevaNot"> 
        Agregar Nueva Nota </h5>

        <div class="input-group">

            <input type="text" class="form-control border border-warning" placeholder="Título" id="titulo">
            <textarea class="form-control border border-warning" placeholder="Escriba su nota aquí." id="nota"></textarea>

        </div>

        <div class="botones p-2 ">
            <button type="button" class="btn btn-success" id="guardar">Guardar</button>
            <button type="button" class="btn btn-danger" id="borrar">Borrar</button>
        </div>
    </div> 
`
contenedor.appendChild(interfaz)

let buscadores = document.createElement('div')
buscadores.className= "container p-2"
buscadores.id= `buscadoresCSS`
buscadores.innerHTML =
    ` <input type="text" class="form-control mb-2 border border-success" placeholder="Buscar" id="buscarNotas">
  <div class="form-check form-switch">
      <input type="checkbox" onclick="mostrarRealizadas()" class="form-check-input border border-success mt-1" value="" id="checkRealizadas">
      <label class="form-check-label fs-6" id="realizadas" for="checkRealizadas">Realizadas</label>
  </div>`
contenedor.appendChild(buscadores)

let contieneTarjetas = document.createElement('div')
contieneTarjetas.className = "container-fluid d-flex flex-wrap justify-content-center gap-4 p-4 gap-lg-5"
contenedor.appendChild(contieneTarjetas)

function mostrarRealizadas() {
    let mostrar = notas.filter(real => real.realizada == false)
    
}

let sinNotas = document.createElement('div')
sinNotas.innerHTML = ` <h3 id=nohaynotas>No existen notas para mostrar.</h3> `
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
    tarjeta.className = "card container-fluid tarjetaTamaño "

    tarjeta.innerHTML =
        `
            <div class="card-body text-center d-flex row">
                <div class="form-check">
                    <input onclick="marcarRealizada(${idGlobal})" id="check${idGlobal}" class="form-check-input check" type="checkbox" ${notas[x].realizada ? "checked" : ""} value="" id="flexCheckChecked" >
                    <label class="form-check-label fs-4" id=texto for="flexCheckChecked">${notas[x].titulo}</label>
                </div>
                <h3>${notas[x].texto}</h3>
                <button type="button" class="btn btn-danger" id=borrarNota onclick="borrarNota(${idGlobal})" id="borrarN">Borrar nota</button>
            </div>     
   `

    contieneTarjetas.appendChild(tarjeta)

    titulo.value = ""
}

function marcarRealizada(x) {

    let indiceCheck = document.getElementById('check' + x).checked
    let posicionCheck = notas.findIndex(elemento => { return elemento.id == x })

    if (indiceCheck == true) {
        notas[posicionCheck].realizada = true
        console.log(posicionCheck);
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
        sinNotas.innerHTML = ` <h3 id=nohaynotas>No existen notas para mostrar.</h3> `
        contenedor.appendChild(sinNotas)
    }
}

