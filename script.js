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



let luna = new Luna(lunaVolumen, lunaDistancia, lunaGravedad);


//devuelve array con datos de la Luna
let datosLuna = Object.entries(luna);

btn.addEventListener("click", function() {

    if (luna.validacion === 4) {
        let datos = "";
        let estadoJuego = "";
        
        // Actualiza estado del juego
        datosJugador = ["Nombre: " + nombre, "Puntaje: " + 4, "Nivel: " + 1];

        for (const [key, value] of datosLuna) {
            datos += `<p>${key}: ${value}</p>`
        }

        datos1.innerHTML = datos;

        // retorna el estado del juego
        for (const item of datosJugador) {
            estadoJuego += `<p>${item}</p>`
        }

        estado1.innerHTML = estadoJuego;
        ftw.innerHTML = "<img src='./img/luna.jpg' alt='Luna' class='imagen' width='500' height='500' /><p class='msj'>¡Tu luna se ve bien! Listo para el siguiente nivel.</p>";
        btnNext.style.display = "block";
        btn.style.display = "none";
        
    } else {
        ftw.innerHTML = "<img src='./img/exp-luna.jpg' alt='Luna explota' class='imagen' width='500' height='500' /><p class='msj'>Tu luna explotó :( ¡Intenta de nuevo!</p>";
        reload1.style.display = "block";
        btn.style.display = "none";
    }
})

function marteLvl() {
    slide1.style.display = "none";
    slide2.style.display = "block";
    alert("SIGUIENTE NIVEL PRÓXIMAMENTE.");
}
