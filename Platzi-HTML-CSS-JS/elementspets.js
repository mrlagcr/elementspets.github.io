const sectionSeleccionarAtaque = document.getElementById("selecionar-ataque")
const sectionReiniciar = document.getElementById("Reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascotas")
const botonReiniciar =document.getElementById("boton-reiniciar")

const spanMascotaJugador = document.getElementById("jugador-mascota")
const sectionSeleccionarMascota = document.getElementById("Selecciona-mascota")

const spanMascotaEnemigo = document.getElementById("enemigo-mascota")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

let pets = []
let ataqueJugador = []
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let opcionDePets
let inputSerpinto 
let inputOrigato 
let inputPezcuito 
let mascotaJugador
let ataquesPets
let botonFuego
let botonAgua
let botonPlanta 
let botones = []


class Pets{
     constructor (nombre, foto, vida){
          this.nombre = nombre
          this.foto = foto
          this.vida = vida
          this.ataques = []
     }
}

let serpinto = new Pets("Serpinto", "./assets/Serpinto.jpg", 5)
let origato = new Pets("Origato", "./assets/Origato.jpg", 5)
let pezcuito = new Pets("Pezcuito", "./assets/pezcuito.jpg", 5)

serpinto.ataques.push(
     {nombre: "Fuego ", id: "boton-Fuego"},
     {nombre: "Fuego ", id: "boton-Fuego"},
     {nombre: "Fuego ", id: "boton-Fuego"},
     {nombre: "Agua ", id: "boton-Agua"},
     {nombre: "Planta ", id: "boton-Planta"},

) 
origato.ataques.push(
     {nombre: "Planta ", id: "boton-Planta"},
     {nombre: "Planta ", id: "boton-Planta"},
     {nombre: "Planta ", id: "boton-Planta"},
     {nombre: "Fuego ", id: "boton-Fuego"},
     {nombre: "Agua ", id: "boton-Agua"}, 
)
pezcuito.ataques.push(
     {nombre: "Agua ", id: "boton-Agua"},
     {nombre: "Agua ", id: "boton-Agua"},
     {nombre: "Agua ", id: "boton-Agua"},
     {nombre: "Fuego ", id: "boton-Fuego"},
     {nombre: "Planta ", id: "boton-Planta"},
)

pets.push(serpinto, origato, pezcuito)




function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = "none"
    pets.forEach((pets) => { 

          opcionDePets = `
          <input type="radio" name = "mascota" id = ${pets.nombre} />
          <label class="tarjeta-de-pets" for = ${pets.nombre} >
              <p>${pets.nombre} </p>
              <img src=${pets.foto} alt=${pets.nombre}
          </label>
          `
     contenedorTarjetas.innerHTML += opcionDePets;

     inputSerpinto = document.getElementById("Serpinto")
     inputOrigato = document.getElementById("Origato")
     inputPezcuito = document.getElementById("Pezcuito")

    })
    sectionReiniciar.style.display = "none"
    botonMascotaJugador.addEventListener("click", seleccionatMascotaJugador)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionatMascotaJugador(){
   
    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"
    if(inputSerpinto.checked){
        spanMascotaJugador.innerHTML = inputSerpinto.id
        mascotaJugador = inputSerpinto.id
   } else if(inputOrigato.checked){
        spanMascotaJugador.innerHTML = inputOrigato.id
        mascotaJugador = inputOrigato.id
   } else if(inputPezcuito.checked){
        spanMascotaJugador.innerHTML = inputPezcuito.id
        mascotaJugador = inputPezcuito.id
   } else {
        alert("Selecciona una Mascota");
   }
   extraerAtaques(mascotaJugador);
   seleccionatMascotaEnemigo();
}
function extraerAtaques(mascotaJugador){
     let ataques
     for ( let contador = 0; contador < pets.length; contador++ ){
          if(mascotaJugador === pets[contador].nombre){
               ataques = pets[contador].ataques;
          }
     }
     mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
     ataques.forEach((ataque)=>{
          ataquesPets = `<button id = ${ataque.id} class= "boton-de-ataque BAtaque"> ${ataque.nombre} </button>`
          contenedorAtaques.innerHTML += ataquesPets;
     })

     botonFuego = document.getElementById("boton-Fuego");
     botonAgua = document.getElementById("boton-Agua");
     botonPlanta = document.getElementById("boton-Planta");
     botones = document.querySelectorAll(".BAtaque");
      
}

function secuenciaAtaque(){
     botones.forEach((boton)=>{
          boton.addEventListener("click", (seleccion) => {
                if(seleccion.target.textContent === " Fuego  "){
                         ataqueJugador.push("Fuego") ;
                         console.log(ataqueJugador);
                         boton.style.background = "#112f58";
                } else if(seleccion.target.textContent === " Planta  "){
                         ataqueJugador.push("Planta");
                         console.log(ataqueJugador);
                         boton.style.background = "#112f58";
                } else {
                         ataqueJugador.push("Agua");
                         console.log(ataqueJugador);
                         boton.style.background = "#112f58";
                    }
                console.log(seleccion);
                
          })
     })
}
function seleccionatMascotaEnemigo(){
     let mascotaEnemigaAleatoria = aleatorio(0, pets.length -1)
     
     spanMascotaEnemigo.innerHTML = pets[mascotaEnemigaAleatoria].nombre
     secuenciaAtaque();
}

function ataqueAleatorioEnemigo(){
     ataqueAleatorio = aleatorio(1,3)
     
     if(ataqueAleatorio == 1){
          ataqueEnemigo = "Fuego"
     } else if(ataqueAleatorio == 2){
          ataqueEnemigo = "Agua"
     } else if(ataqueAleatorio == 3)[
          ataqueEnemigo = "Planta"
     ]

     combate()
}

function combate(){
     
     if(ataqueEnemigo == ataqueJugador){
     } else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Planta") {
          crearMensaje("Ganaste")
          vidasEnemigo--
          spanVidasEnemigo.innerHTML = vidasEnemigo
     } else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
          crearMensaje("Ganaste")
          vidasEnemigo--
          spanVidasEnemigo.innerHTML = vidasEnemigo
     } else if(ataqueJugador == "Planta" && ataqueEnemigo == "Agua"){
          crearMensaje("Ganaste")
          vidasEnemigo--
          spanVidasEnemigo.innerHTML = vidasEnemigo
     } else {
          crearMensaje("Perdiste")
           vidasJugador--
          spanVidasJugador.innerHTML = vidasJugador
     }
     
     revisarVidas()
}

function revisarVidas(){

     if(vidasEnemigo == 0){
          crearMensajeFinal("Felicitaciones Ganaste 🎉🎊")
     } else if(vidasJugador == 0){
          crearMensajeFinal("Perdiste, Manco!! 🖕🏾")
     }
    

}

function crearMensaje (resultado){
    

     let nuevoAtaqueDelJugador = document.createElement("p")
     let nuevoAtaqueDelEnemigo = document.createElement("p")

     sectionMensajes.innerHTML = resultado
     nuevoAtaqueDelJugador.innerHTML = ataqueJugador
     nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

     ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
     ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal (resultadoFinal){
     
     sectionMensajes.innerHTML = resultadoFinal

     botonFuego.disabled = true
     
     botonAgua.disabled = true
     
     botonPlanta.disabled = true

     sectionReiniciar.style.display = "Block"

}

function reiniciarJuego(){
     location.reload()
}

function aleatorio(min, max){
     return Math.floor(Math.random()*(max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)