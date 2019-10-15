class Persona {
    constructor(nombre, apellido, edad, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
    }

    saludar(fn) {
        console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    
    soyAlto() {
        return this.altura >= 1.8
    }
    
    
}

//Con estends hacemos referencia la herencia de otra funcion o clase
class Desarrollador extends Persona {
    
    constructor(nombre, apellido, edad, altura) {
        //para llamar el constructor de la clase o funcion heredada usamos super
        super(nombre, apellido, edad, altura)
    }
    
    saludar(fn) {
        console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)    
        if (fn) {
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah, no sabia que eras desarrollador`)
    }
}

var sacha = new Persona('Sacha', 'Lifszyc', 27, 1.72)
var erika = new Persona('Erika', 'Luna', 24, 1.57)
var marcial = new Desarrollador('Marcial', 'Ambriz', 23, 1.82)

//sacha.saludar()