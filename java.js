// // EJERCICIO 1

// let numeroMultiplicador = parseInt(prompt("Ingresa un numero"));

// for (i = 1; i<=10; i++) {
//     console.log(numeroMultiplicador+" x "+i+" = "+(numeroMultiplicador*i));

// }

// // EJERCICIO 2  NO TERMINADO

// let numeroAgregar = parseInt(prompt("Ingrese un número a acumular: "))
// let agregados = 0

// while (numeroAgregar !== 0) {
//     agregados = numeroAgregar+agregados

//     numeroAgregar = parseInt(prompt("Ingrese un número a acumular: "))
// }
// console.log(agregados);

// // EJERCICIO 3

// let numeroAdivinar = 83

// let numero3 = parseInt(prompt("¡Ingrese un número para adivinar y ganar!"))

// while (numero3!==numeroAdivinar){
//     if (numero3>numeroAdivinar){
//         alert("El número es mayor al número que debes adivinar.");
//     }
//     else if (numero3<numeroAdivinar){
//         alert("El número es menor al número que debes adivinar.");
//     }
//     else{
//         break
//     }
//     numero3 = parseInt(prompt("¡Ingrese un número para adivinar y ganar!"))
// }

//     if (numero3==numeroAdivinar){
//         alert("GANASTE")
//     }

// // EJERCICIO 4

// let numero4 = parseInt(prompt("Ingrese un número para verificar si es primo: "))
// let cantidad = 0

// if (numero4 == 1) {
//     console.log("El número no es primo.");
// }
// else {

//     for (let i = 1; i <= numero4; i++) {
//         if ((numero4 % i) == 0) {
//             cantidad = cantidad + 1
//         }
//     }

//     if (cantidad > 2) {
//         console.log("El número no es primo.");
//     }
//     else {
//         console.log("El número es primo");
//     }
// }

// // EJERCICIO 5

// let numero5 = parseInt(prompt("Ingrese un número y mostraremos sus divisores: "))

// for (let i = 0; i <= numero5; i++) {
//     if ((Number.isInteger(numero5/i))==true){
//         console.log(i);
//     }
// }

// // EJERCICIO 6

// let arreglo6= [4,25,24,5,64,43,3,2345,543,212]

// for (let i= 0; i < arreglo6.length; i++) {
//     console.log(arreglo6[i])
// }

// // EJERCICIO 7

// let arreglo7 = [2,4,1,10,24,24234,934,75,964,56]

// for (let i = 0; i < arreglo7.length; i++) {
//     console.log((arreglo7[i])*2)
// }

// // EJERCICIO 8

// let arreglo8 = [
//     { Nombre: "Maria", edad: 45, DNI: 4525214521, mascota: "Fiona"},
//     { Nombre: "Ana", edad: 19, DNI: 7946851247, mascota: "Aisha"}, 
//     { Nombre: "Lluvia", edad: 20, DNI: 3628653145, mascota: "Baloo"}, 
//     { Nombre: "Pedro", edad: 36, DNI: 2102057458, mascota: "Chester"}, 
//     { Nombre: "Kike", edad: 30, DNI: 1302130546, mascota: "Canela"}
// ]

// for (let i = 0; i < arreglo8.length; i++) {
//    console.log("La persona número " +i+ ", de nombre "+((arreglo8[i]).Nombre)+ ", tiene "+((arreglo8[i]).edad)+" años, su DNI es: "+((arreglo8[i]).DNI)+" y el nombre de su mascota es: "+((arreglo8[i]).mascota)+ ".")
// }

// // EJERCICIO 9

// let arreglo9 = [98, 72, 15, 25, 8, 395, 12548, 126, 36, 25]

// for (let i = 0; i < arreglo9.length; i++) {
//     if ((Number.isInteger((arreglo9[i])/2))==false) {
//         console.log(arreglo9[i])
//     }
// }

// // EJERCICIO 10

// let numerosAgregar = parseInt(prompt("Ingrese un número para sumarlo: "))
// let agregadosEnteros = 0
// let agregadosImpares = 0

// while (numerosAgregar !== 0) {

// if (Number.isInteger(numerosAgregar/2))
//     agregadosEnteros = agregadosEnteros + numerosAgregar
// else{
//     agregadosImpares = agregadosImpares + numerosAgregar
// }

//     numerosAgregar = parseInt(prompt("Ingrese un número para sumarlo: "))
// }
// alert ("Has ingresado 0, la suma se ha detenido. Checa tu consola.")
// console.log ("La suma de los impares es: " +agregadosImpares+" y la suma de los pares es: "+agregadosEnteros)


// // EJERCICIO 11

// let arreglo11 = [74526, 85632, 3216344, 231646, 54156, 5616841652, 56421, 545, 741, 248]
// let numeroMayor = 0

// for (let i = 0; i < (arreglo11.length); i++) {

//     if ((numeroMayor) < (arreglo11[i])) {

//         numeroMayor = (arreglo11[i])

//     }
// }

// console.log(numeroMayor)

// // EJERCICIO 12

// let arreglo12 = [74526, 85632, 3, 231646, 54156, 5616841652, 56421, 545, 741, 248]
// let numeroMenor = (arreglo12[0])

// for (let i = 1; i < (arreglo12.length); i++) {

//     if ((numeroMenor) > (arreglo12[i])) {

//         numeroMenor = (arreglo12[i])

//     }
// }

// console.log(numeroMenor);

// // EJERCICIO 13

// let jugador1 = prompt("JUGADOR 1. Ingresa: piedra, papel o tijeras.")
// let jugador2 = prompt("JUGADOR 2. Ingresa: piedra, papel o tijeras.")

// while (jugador1 == jugador2) {
//     alert("Esto ha sido un empate, señores.")
//     jugador1 = prompt("JUGADOR 1. Ingresa: piedra, papel o tijeras.")
//     jugador2 = prompt("JUGADOR 2. Ingresa: piedra, papel o tijeras.")
// }

// if (jugador1=="piedra"&&jugador2=="tijeras"||jugador1=="papel"&&jugador2=="piedra"||jugador1=="tijeras"&&jugador2=="papel"){
// alert("¡Jugador 1 ha ganado!")
// }
// else {
//     alert("¡Jugador 2 gana!");
// }

// // EJERCICIO 14

// let lado = 5
// asterisco = "* "

// for (let i = 1; i <= lado; i++) {
//     console.log(asterisco.repeat(i));
// }

// // EJERCICIO 15

// asterisco = "* "

// for (let x = 5; x >=0 ; x--) {
//     console.log(asterisco.repeat(x));
// }

// // EJERCICIO 16

// let arreglo16 = [841, 645, 2846, 36, 280, 10945, 487001, 3621, 41, 1]
// let numeroMayor = 0
// let numeroMenor = arreglo16[0]

// function posicion(x) {
//     let numPosicion = arreglo16.indexOf(x)
//     return numPosicion
// }

// function intercambio(array, y, z) {
//     let newA = array[y]
//     array[y] = array[z]
//     array[z] = newA
// }

// for (let i = 0; i < (arreglo16.length); i++) {

//     if (numeroMayor < (arreglo16[i])) {
//         numeroMayor = (arreglo16[i])
//     }
//     else if ((numeroMenor) > (arreglo16[i])) {
//         numeroMenor = (arreglo16[i])
//     }
// }

// intercambio(arreglo16, posicion(numeroMayor), [9])
// intercambio(arreglo16, posicion(numeroMenor), [0])

// numeroMenor = arreglo16[1]
// numeroMayor = arreglo16[8]

// for (let i = 1; i <= 8; i++) {

//     if (numeroMayor < (arreglo16[i])) {
//         numeroMayor = (arreglo16[i])
//     }
//     else if ((numeroMenor) > (arreglo16[i])) {
//         numeroMenor = (arreglo16[i])
//     }
// }
// intercambio(arreglo16, posicion(numeroMayor), [8])
// intercambio(arreglo16, posicion(numeroMenor), [1])

// numeroMenor = arreglo16[2]
// numeroMayor = arreglo16[7]

// for (let i = 2; i <= 7; i++) {

//     if (numeroMayor < (arreglo16[i])) {
//         numeroMayor = (arreglo16[i])
//     }
//     else if ((numeroMenor) > (arreglo16[i])) {
//         numeroMenor = (arreglo16[i])
//     }
// }
// intercambio(arreglo16, posicion(numeroMayor), [7])
// intercambio(arreglo16, posicion(numeroMenor), [2])

// numeroMenor = arreglo16[3]
// numeroMayor = arreglo16[6]

// for (let i = 3; i <= 6; i++) {

//     if (numeroMayor < (arreglo16[i])) {
//         numeroMayor = (arreglo16[i])
//     }
//     else if ((numeroMenor) > (arreglo16[i])) {

//         numeroMenor = (arreglo16[i])

//     }
// }
// intercambio(arreglo16, posicion(numeroMayor), [6])
// intercambio(arreglo16, posicion(numeroMenor), [3])
// console.log(arreglo16);

