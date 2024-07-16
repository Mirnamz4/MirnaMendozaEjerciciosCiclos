// EJERCICIO 3

//Array de notas
let notas = [
    {
        id: 0,
        titulo: 'Lavar los trastes',
        texto: 'Ya no hay ninguno limpio',
        realizada: false
    },
    {
        id: 1,
        titulo: 'Lavar la motocicleta',
        texto: 'Ayer le llovió y quedó sucia',
        realizada: false
    }
]

// Variables de control

let idGlobal = 1
let posicion = (notas.length) - 1

//Contenedores generales

let tarjetass = document.getElementById('tarjetas')
let contenedor = document.createElement('div')
contenedor.className = "container-fluid p-3"
contenedor.id = `conte`
tarjetass.appendChild(contenedor)

// Interfaz

let interfaz = document.createElement('div')
interfaz.className = "rounded-pill container-fluid text-center border border-light-subtle"
interfaz.id = `inter`
interfaz.innerHTML =
    `
    <div class="interfaz rounded-pill">
        <h5 class="card-title fw-bolder fs-3 p-3 fst-italic" id="nuevaNot"> 
        Agregar Nueva Nota </h5>

        <div class="input-group escritos">

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

//Buscadores

let buscadores = document.createElement('div')
buscadores.className = "container p-2"
buscadores.id = `buscadoresCSS`
buscadores.innerHTML =
    ` <input type="text" class="form-control mb-2 border border-success" placeholder="Buscar" id="buscarNotas">
  <div class="form-check form-switch">
      <input type="checkbox" onclick="mostrarRealizadas()" class="form-check-input border border-success mt-1" value="" id="checkRealizadas">
      <label class="form-check-label fs-6" " for="checkRealizadas">Realizadas</label>
  </div>`
contenedor.appendChild(buscadores)


//Contenedor de tarjetas

let contieneTarjetas = document.createElement('div')
contieneTarjetas.className = "container-fluid d-flex flex-wrap justify-content-center gap-4 p-4 gap-lg-5"
contenedor.appendChild(contieneTarjetas)


crearTarjeta(notas)

//Borrar interfaz

borrar.onclick = function () {
    titulo.value = ""
    nota.value = ""
}

// Guardar en array 

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
        crearTarjeta(notas)
    }
    titulo.value = ""
    nota.value = ""
    buscarNotas.value = ""
    document.getElementById("checkRealizadas").checked = false;
}

// Pintador de notas

function crearTarjeta(array) {

    contieneTarjetas.innerHTML = "";

    for (let i = 0; i < array.length; i++) {

        let tarjeta = document.createElement('div')
        tarjeta.id = `tarjetaBorrar${i}`
        tarjeta.className = "card container-fluid tarjetaTamaño "

        tarjeta.innerHTML =
            `
            <div class="card-body text-center d-flex row">
                <div class="form-check">
                    <input onclick="marcarRealizada(${i})" id="check${i}" class="form-check-input check" type="checkbox" ${array[i].realizada ? "checked" : ""} value="" id="flexCheckChecked" >
                    <label class="form-check-label fs-4" id=texto for="flexCheckChecked">${array[i].titulo}</label>
                </div>
                <h3 id="tum${i}">${array[i].texto}</h3>
                <button type="button" class="btn btn-danger" id=borrarNota onclick="borrarNota(${i})" id="borrarN">Borrar nota</button>
            </div>     
   `

        contieneTarjetas.appendChild(tarjeta)
    }

}

// Borrar nota

function borrarNota(par) {

    notas.splice(par, 1)
    crearTarjeta(notas)

    if (notas.length == 0) {
        let sinNotas = document.createElement('div')
        sinNotas.innerHTML = ` <h3 id=nohaynotas>No existen notas para mostrar.</h3> `
        contieneTarjetas.appendChild(sinNotas)
    }
}

// Marcar realizada

function marcarRealizada(x) {
    notas[x].realizada = true
    let incauto = document.getElementById('tum' + x)
    incauto.classList.toggle('text-decoration-line-through')
}

// Mostrar realizadas

function mostrarRealizadas() {

    let palomita = document.getElementById('checkRealizadas').checked
    let mostrar = notas.filter(real => real.realizada == true)

    if ((palomita) && (buscarNotas.value == "")) {
        crearTarjeta(mostrar)
    }
    else if ((palomita) && (buscarNotas.value !== "")) {

        let textoBuscar = buscarNotas.value.trim();

        let notasFi = mostrar.filter(nota => {
            let textoFi = nota.titulo.includes(textoBuscar)
                || nota.texto.includes(textoBuscar);
            return textoFi
        })
        crearTarjeta(notasFi)
    }
    else if ((palomita == false) && (buscarNotas.value == "")) {
        
        crearTarjeta(notas)
    }
    else if ((palomita == false) && (buscarNotas.value !== "")) {

        let textoBuscar = buscarNotas.value.trim();
        let notasFi = notas.filter(nota => {
            let textoFi = nota.titulo.includes(textoBuscar)
                || nota.texto.includes(textoBuscar);
            return textoFi
        })
        crearTarjeta(notasFi)
    }
}

//Buscador de notas

buscarNotas.addEventListener('keyup', () => {

    let palomita = document.getElementById('checkRealizadas').checked
    let mostrar = notas.filter(real => real.realizada == true)

    if ((palomita) && (buscarNotas.value == "")) {
        crearTarjeta(mostrar)
    }
    else if ((palomita) && (buscarNotas.value !== "")) {

        let textoBuscar = buscarNotas.value.trim();

        let notasFi = mostrar.filter(nota => {
            let textoFi = nota.titulo.includes(textoBuscar)
                || nota.texto.includes(textoBuscar);
            return textoFi
        })
        crearTarjeta(notasFi)
    }
    else if ((palomita == false) && (buscarNotas.value == "")) {
        crearTarjeta(notas)
    }
    else if ((palomita == false) && (buscarNotas.value !== "")) {

        let textoBuscar = buscarNotas.value.trim();
        let notasFi = notas.filter(nota => {
            let textoFi = nota.titulo.includes(textoBuscar)
                || nota.texto.includes(textoBuscar);
            return textoFi
        })
        crearTarjeta(notasFi)
    }

})
