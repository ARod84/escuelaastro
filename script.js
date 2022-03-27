/************************************
*-----------------------------------*
*---@game: Escuela de Astronautas---*
*-----------------------------------*
*************************************/
// Variables interfaz


// Variables globales

let lunaVolumen = prompt("¿Cuál es el tamaño (volumen) de la Luna?");
let lunaDistancia = prompt("¿Cuán lejos crees que esta la Luna de la Tierra?");
let lunaGravedad = prompt("¿Cuánto vale la gravedad en la superficie de la Luna?");

let solVolumen = prompt("¿Cuál es el tamaño (volumen) de la Sol?");
let solDistancia = prompt("¿Cuán lejos crees que esta la Sol de la Tierra?");
let solGravedad = prompt("¿Cuánto vale la gravedad en la superficie del Sol?");

let marteVolumen = prompt("¿Cuál es el tamaño (volumen) de la Marte?");
let marteDistancia = prompt("¿Cuán lejos crees que esta la Marte de la Tierra?");
let marteGravedad = prompt("¿Cuánto vale la gravedad en la superficie de la Marte?");


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
            return true;
        } else {
            return false;
        }
    }
}

class Luna extends Planeta {
    constructor(planeta) {
        this.planeta = planeta;
    }

    validacion() {
        if (this.volumen < 9000 && this.distancia < 10000 && this.gravedad < 11000 && this.planeta === "tierra") {
            return true;
        } else {
            return false;
        }
    }
}

class Estrella extends Planeta {
    constructor (temperatura, nucleo, tipo) {
        this.temperatura = temperatura;
        this.nucleo = nucleo;
        this.tipo = tipo;
    }

    validacion() {
        if (this.volumen < 5000 && this.distancia < 6000 && this.gravedad < 7000 && this.tipo) {
            return true;
        } else {
            return false;
        }
    }
}