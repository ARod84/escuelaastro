/************************************
*-----------------------------------*
*---@game: Escuela de Astronautas---*
*-----------------------------------*
*************************************/
// Variables interfaz
let btn = document.getElementById("create");
let ftw = document.getElementById("ftw");
let btnNext = document.getElementById("lvl2");
let reload1 = document.getElementById("reloadLuna");
let slide1 = document.getElementById("slideLuna");
let slide2 = document.getElementById("slideMarte");
let slide3 = document.getElementById("slideSol");

// Variables globales

let lunaVolumen = prompt("El volumen de la Luna es 1/50 el volumen de la tierra. ¿Cuantas lunas caben en la tierra?");
let lunaDistancia = prompt("¿Cuán lejos crees que esta la Luna de la Tierra? 365000 km o tal vez sólo 100 km (Ingresa los números sin unidades, puntos, ni comas)");
let lunaGravedad = prompt("¿Cuánto vale la gravedad en la superficie de la Luna? ¿1.624 o igual que en la Tierra, 9.81?");
let lunaPlaneta = prompt("¿Alrededor de cuál planeta orbita la Luna?");



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
            return "Luna";
        } else {
            return undefined;
        }
    }
}



let luna = new Luna(lunaVolumen, lunaDistancia, lunaGravedad, lunaPlaneta.toLowerCase());


btn.addEventListener("click", function() {

    if (luna.validacion === "Luna") {
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
    let marteVolumen = prompt("El volumen de Marte es 1/6 del de la Tierra. ¿Cuántos Martes caben en la Tierra");
    let marteDistancia = prompt("¿Cuán lejos crees que esta la Marte de la Tierra?");
    let marteGravedad = prompt("¿Cuánto vale la gravedad en la superficie de la Marte?");
}


let marte = new Planeta(marteVolumen, marteDistancia, marteGravedad);


btn.addEventListener("click", function() {
    console.log(marte)
    /*if (luna.validacion === "Luna") {
        ftw.innerHTML = "<img src='./img/luna.jpg' alt='Luna' class='imagen' width='500' height='500' /><p class='msj'>¡Tu luna se ve bien! Listo para el siguiente nivel.</p>";
        btnNext.style.display = "block";
        btn.style.display = "none";
    } else {
        ftw.innerHTML = "<img src='./img/exp-luna.jpg' alt='Luna explota' class='imagen' width='500' height='500' /><p class='msj'>Tu luna explotó :( ¡Intenta de nuevo!</p>";
        reload1.style.display = "block";
        btn.style.display = "none";
    }*/
})

/* let solVolumen = prompt("¿Cuál es el tamaño (volumen) de la Sol?");
let solDistancia = prompt("¿Cuán lejos crees que esta la Sol de la Tierra?");
let solGravedad = prompt("¿Cuánto vale la gravedad en la superficie del Sol?");

class Estrella extends Planeta {
    constructor (volumen, distancia, gravedad, temperatura, nucleo, tipo) {
        super(volumen,distancia,gravedad);
        this.temperatura = temperatura;
        this.nucleo = nucleo;
        this.tipo = tipo;
    }

    validacion() {
        if (this.volumen < 5000 && this.distancia < 6000 && this.gravedad < 7000 && this.tipo === "enana amarilla") {
            return true;
        } else {
            return false;
        }
    }
}

let sol = new Estrella();
console.log (sol)*/