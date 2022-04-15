/************************************
*-----------------------------------*
*---@game: Escuela de Astronautas---*
*-----------------------------------*
*************************************/

// Variables interfaz
let btn = document.getElementById("create");
let start = document.getElementById("start");
let form = document.getElementById("jugador");
let ftw = document.getElementById("ftw");
let btnNext = document.getElementById("lvl2");
let datos1 = document.getElementById("datosLuna");
let estado1 = document.getElementById("estado1");
let reload1 = document.getElementById("reloadLuna");

/* Escenas */
let slideIntro = document.getElementById("slideIntro");
let slide1 = document.getElementById("slideLuna");
let slide2 = document.getElementById("slideMarte");
let slide3 = document.getElementById("slideSol");

/* Controles */
let vol = document.getElementById("displayVol");
let dist = document.getElementById("displayDist");
let grav = document.getElementById("displayGrav");

//Variables jugador 

//datos jugador
let puntaje = 0;
let nivel = 0;
let trofeos = 0;

// variables jugador interfaz
let inputForm = document.getElementById("jugador");
let inputNombre = document.getElementById("name");
let bienvenida = document.getElementById("bienvenida");


// Variables globales
let lunaVolumen = 0;
let lunaDistancia = 0;
let lunaGravedad = 0;

//Guarda nombre y puntaje en session storage
// Imprime el nombre en pantalla 
inputForm.addEventListener("submit", (e) => {
    // Objeto con los datos del jugador y estado del juego
    const datosJugador = { nombre: inputNombre.value, puntaje: puntaje, nivel: nivel, trofeos: trofeos };
    const jugador = JSON.stringify(datosJugador);

    sessionStorage.setItem("Jugador", jugador);
    bienvenida.innerHTML = "<p>Te damos la bienvenida a las Escuela de Astronautas, " + inputNombre.value + "</p>";
    start.style.display = "block";
    form.style.display = "none";
    e.preventDefault();
});


// Inicia el nivel 1
start.addEventListener("click", () => {
    slideIntro.style.display = "none";
    slide1.style.display = "grid";
});

// Clases objetos principales

// Clases astros

class Planeta {
    constructor (volumen, distancia, gravedad) {
        this.volumen = volumen;
        this.distancia = distancia;
        this.gravedad = gravedad;
    }

    validacion() {
        if (this.volumen < 5000 && this.distancia < 6000 && this.gravedad < 7000) {
            return "Planeta";
        } else {
            return undefined;
        }
    }
}

/*****************************
 *----------NIVEL 1----------*
 *****************************/

class Luna extends Planeta {
    constructor(volumen, distancia, gravedad, planeta) {
        super(volumen,distancia,gravedad);
        this.planeta = planeta;
    }

    get validacion() {
        if (this.volumen == 50 && this.distancia == 365000 && this.gravedad == 1.624) {
            return puntaje += 4;
        } else {
            return puntaje -= 1;
        }
    }
}


// Controles Nivel 1 
// Display cantidades

function volLun() {
    return volumen.value;
}

volumen.addEventListener("input", (e) => {
    vol.innerHTML = "<p>" + e.target.value + "</p>";
    document.getElementById("luna").style.width = e.target.value + "0px";
    document.getElementById("luna").style.height = e.target.value + "0px";
}) 


distancia.addEventListener("input", (e) => {
    let d = e.target.value;
    let dt = d.replace('000', '');

    dist.innerHTML = "<p>" + e.target.value + "</p>";
    document.getElementById("luna").style.left = dt + "px";
});

let gravedad = 0;
plus.addEventListener("click", () => {
    gravedad += 1;
    grav.innerHTML = "<p>" + gravedad + "</p>";
});

minus.addEventListener("click", () => {
    gravedad -= 1;
    grav.innerHTML = "<p>" + gravedad + "</p>";
});

    
const luna = new Luna(volLun(), lunaDistancia, lunaGravedad);

//devuelve array con datos de la Luna
let datosLuna = Object.entries(luna);

btn.addEventListener("click", () => {
    console.log(datosLuna)
})
