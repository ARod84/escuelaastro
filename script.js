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
/*let nombre = prompt("Bienvenido a la Escuela de Astronautas. ¿Cuál es tu nombre?");
let lunaVolumen = prompt("El volumen de la Luna es 1/50 el volumen de la tierra. ¿Cuantas lunas caben en la tierra?");
let lunaDistancia = prompt("¿Cuán lejos crees que esta la Luna de la Tierra? 365000 km o tal vez sólo 100 km (Ingresa los números sin unidades, puntos, ni comas)");
let lunaGravedad = prompt("¿Cuánto vale la gravedad en la superficie de la Luna? ¿1.624 o igual que en la Tierra, 9.81?");
let lunaPlaneta = prompt("¿Alrededor de cuál planeta orbita la Luna?");*/

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
        if (this.volumen == 50 && this.distancia == 365000 && this.gravedad == 1.624 && this.planeta === "tierra") {
            return puntaje += 4;
        } else {
            return puntaje -= 1;
        }
    }
}



/*let luna = new Luna(lunaVolumen, lunaDistancia, lunaGravedad, lunaPlaneta.toLowerCase());


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
*/