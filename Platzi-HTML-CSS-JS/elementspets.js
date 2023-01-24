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

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")



let pets = []
let ataqueJugador = []
let ataqueEnemigo = []
let vidasJugador = 3
let vidasEnemigo = 3
let opcionDePets
let inputSerpinto 
let inputOrigato 
let inputPezcuito 
let mascotaJugador
let mascotaJugadorObjeto
let ataquesPets
let botonFuego
let botonAgua
let botonPlanta 
let botones = []
let ataquesPetsEnemigos
let posicionAtaqueJugador
let posicionAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./assets/Petsmap.png"
let alturaResponsiva
let anchoDelMapa = window.innerWidth - 20

alturaResponsiva = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaResponsiva
const anchoMaximoDelMapa = 350
     if(anchoDelMapa > anchoMaximoDelMapa){
          anchoDelMapa = anchoMaximoDelMapa - 20
     }

class Pets{
     constructor (nombre, foto, vida, fotoMapa){
          this.nombre = nombre
          this.foto = foto
          this.vida = vida
          this.ataques = []
          this.ancho = 80
          this.alto = 80
          this.x = aleatorio(0, mapa.width - this.ancho)
          this.y = aleatorio(0, mapa.height - this.alto)
          this.mapaFoto = new Image()
          this.mapaFoto.src = fotoMapa
          this. velocidadX = 0
          this. velocidadY = 0
     }

     pintarPet(){
          lienzo.drawImage(
               this.mapaFoto,
               this.x,
               this.y,
               this.ancho,
               this.alto,
              )
     }
}

let serpinto = new Pets("Serpinto", "./assets/Serpinto.jpg", 5, "./assets/Serpinto.jpg" )
let origato = new Pets("Origato", "./assets/Origato.jpg", 5, "./assets/Origato.jpg")
let pezcuito = new Pets("Pezcuito", "./assets/pezcuito.jpg", 5, "./assets/pezcuito.jpg")

let serpintoEnemigo = new Pets("Serpinto", "./assets/Serpinto.jpg", 5, "./assets/arbusto-removebg-preview.png")
let origatoEnemigo = new Pets("Origato", "./assets/Origato.jpg", 5, "./assets/arbusto-removebg-preview.png")
let pezcuitoEnemigo = new Pets("Pezcuito", "./assets/pezcuito.jpg", 5, "./assets/arbusto-removebg-preview.png")

serpinto.ataques.push(
     {nombre: "Fuego ", id: "boton-Fuego"},
     {nombre: "Fuego ", id: "boton-Fuego"},
     {nombre: "Fuego ", id: "boton-Fuego"},
     {nombre: "Agua ", id: "boton-Agua"},
     {nombre: "Planta ", id: "boton-Planta"},

) 
serpintoEnemigo.ataques.push(
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
origatoEnemigo.ataques.push(
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
pezcuitoEnemigo.ataques.push(
     {nombre: "Agua ", id: "boton-Agua"},
     {nombre: "Agua ", id: "boton-Agua"},
     {nombre: "Agua ", id: "boton-Agua"},
     {nombre: "Fuego ", id: "boton-Fuego"},
     {nombre: "Planta ", id: "boton-Planta"},
)

pets.push(serpinto, origato, pezcuito)




function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"

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
   sectionVerMapa.style.display = "flex"
     iniciarMapa();
   
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
                         boton.disabled = true
                } else if(seleccion.target.textContent === " Planta  "){
                         ataqueJugador.push("Planta");
                         console.log(ataqueJugador);
                         boton.style.background = "#112f58";
                         boton.disabled = true
                } else {
                         ataqueJugador.push("Agua");
                         console.log(ataqueJugador);
                         boton.style.background = "#112f58";
                         boton.disabled = true
                    }
                    ataqueAleatorioEnemigo();
          })
     })
     
}
function seleccionatMascotaEnemigo(){
     let mascotaEnemigaAleatoria = aleatorio(0, pets.length -1)
     
     spanMascotaEnemigo.innerHTML = pets[mascotaEnemigaAleatoria].nombre;
     ataquesPetsEnemigos = pets[mascotaEnemigaAleatoria].ataques;
     secuenciaAtaque();
}

function ataqueAleatorioEnemigo(){
     ataqueAleatorio = aleatorio(0, ataquesPetsEnemigos.length -1)
     
     if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
          ataqueEnemigo.push("Fuego")
     } else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
          ataqueEnemigo.push("Planta")
     } else { 
          ataqueEnemigo.push("Agua")
     }
     console.log(ataqueEnemigo)

     iniciarCombate()
}
function iniciarCombate(){
     if (ataqueJugador.length === 5){
          combate();
     }
}

function posicionAmbosOponentes(jugador, enemigo){
     posicionAtaqueJugador = ataqueJugador[jugador]
     posicionAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){

     for (let posicion = 0; posicion < ataqueJugador.length; posicion++) {
          if (ataqueJugador[posicion] === ataqueEnemigo[posicion]){
               posicionAmbosOponentes(posicion, posicion);
               crearMensaje("Empate");
          } else if (ataqueJugador[posicion] === "Fuego" && ataqueEnemigo[posicion] === "Planta"){
               posicionAmbosOponentes(posicion, posicion);
               crearMensaje("Ganaste")
               victoriasJugador++;
               spanVidasJugador.innerHTML = victoriasJugador;
          } else if (ataqueJugador[posicion] === "Agua" && ataqueEnemigo[posicion] === "Fuego"){
               posicionAmbosOponentes(posicion, posicion);
               crearMensaje("Ganaste")
               victoriasJugador++;
               spanVidasJugador.innerHTML = victoriasJugador;
          } else if (ataqueJugador[posicion] === "Planta" && ataqueEnemigo[posicion] === "Agua"){
               posicionAmbosOponentes(posicion, posicion);
               crearMensaje("Ganaste")
               victoriasJugador++;
               spanVidasJugador.innerHTML = victoriasJugador;
          } else {
               posicionAmbosOponentes(posicion, posicion);
               crearMensaje("Perdiste")
               victoriasEnemigo++;
               spanVidasEnemigo.innerHTML = victoriasEnemigo;
          }
          
          
     }
     revisarVictorias()
}

function revisarVictorias(){

     if(victoriasJugador === victoriasEnemigo){
          crearMensajeFinal("Este combate es un empate")
     } else if(victoriasJugador > victoriasEnemigo){
          crearMensajeFinal("Felicitaciones Ganaste el Combate")
     } else {
          crearMensajeFinal("Perdiste el combate")
     }
    

}

function crearMensaje (resultado){
    

     let nuevoAtaqueDelJugador = document.createElement("p")
     let nuevoAtaqueDelEnemigo = document.createElement("p")

     sectionMensajes.innerHTML = resultado
     nuevoAtaqueDelJugador.innerHTML = posicionAtaqueJugador
     nuevoAtaqueDelEnemigo.innerHTML = posicionAtaqueEnemigo

     ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
     ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal (resultadoFinal){
     
     sectionMensajes.innerHTML = resultadoFinal

     sectionReiniciar.style.display = "Block"

}

function reiniciarJuego(){
     location.reload()
}

function aleatorio(min, max){
     return Math.floor(Math.random()*(max - min + 1) + min)
}

function pintarCanvas(){

     mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
     mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
     lienzo.clearRect(0,0, mapa.width, mapa.height)
     lienzo.drawImage(
          mapaBackground,
          0,
          0,
          mapa.width,
          mapa.height

     )
     mascotaJugadorObjeto.pintarPet()
     serpintoEnemigo.pintarPet()
     origatoEnemigo.pintarPet()
     pezcuitoEnemigo.pintarPet()
     if(mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0){
          revisarColision(serpintoEnemigo)
          revisarColision(origatoEnemigo)
          revisarColision(pezcuitoEnemigo)
     }
}

function moverDerecha (){
     mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda (){
     mascotaJugadorObjeto.velocidadX = -5
     
}

function moverAbajo (){
     mascotaJugadorObjeto.velocidadY = 5
     
}

function moverArriba (){
     mascotaJugadorObjeto.velocidadY = -5
     pintarCanvas()
}
function detenerMovimiento(){
     
     mascotaJugadorObjeto.velocidadX = 0
     mascotaJugadorObjeto.velocidadY = 0 
}

function sePresionoTecla(event){
     switch (event.key){
          case "ArrowUp":
               moverArriba()
               break;
          case "ArrowDown":
               moverAbajo()
               break;
          case "ArrowRight":
               moverDerecha()
               break;
          case "ArrowLeft":
               moverIzquierda()
               break;
          default:
               break;
     }
}

function iniciarMapa(){

     
     mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
     console.log(mascotaJugadorObjeto, mascotaJugador)
     intervalo = setInterval(pintarCanvas, 50)
     window.addEventListener("keydown", sePresionoTecla)
     window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota (){
     for ( let contador = 0; contador < pets.length; contador++ ){
          if(mascotaJugador === pets[contador].nombre){
               return pets[contador]
          }
     }
}

function revisarColision (enemigo){
     const arribaEnemigo = enemigo.y
     const abajoEnemigo = enemigo.y + enemigo.alto
     const derechaEnemigo = enemigo.x + enemigo.ancho
     const izquierdaEnemigo = enemigo.x

     const arribaMascota = mascotaJugadorObjeto.y
     const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
     const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
     const izquierdaMascota = mascotaJugadorObjeto.x

     if(
          abajoMascota < arribaEnemigo || arribaMascota > abajoEnemigo || derechaMascota < izquierdaEnemigo || izquierdaMascota > derechaEnemigo
     ){
          return;
     }

     detenerMovimiento()
     clearInterval(intervalo)
     sectionSeleccionarAtaque.style.display = "flex"
     sectionVerMapa.style.display = "none"
     seleccionatMascotaEnemigo(enemigo)
     //alert("Hay Enfrentamiento con " + enemigo.nombre)
}

window.addEventListener("load", iniciarJuego)