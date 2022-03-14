class Celular {
    constructor (color,peso,camara,pantalla,ram) {
        this.color = color;
        this.peso = peso;
        this.camara = camara;
        this.pantalla = pantalla;
        this.ram = ram;
        this.encendido = false;
    }
    presionarBotonEncendido () {
        if (this.encendido == false) {
            alert ("celular prendido");
            this.encendido = true;

        } else {
            alert ("el celular ya esta encendido");
            this.encendido = false;
            console.log("apagando")
        }
    }
    reinciar () {
        if (this.encendido == true) {
            alert ("reinciando celular");
        } else {
            alert ("el celular esta apagado");
        }
    }
    tomarFoto () {
        alert (`foto tomada en una resolucion de: ${this.camara}`);
    }
    
    gabrarVideo () {
        alert (`grabando video en una resolucion de: ${this.camara}`);
    }
    mostrarInfo (){
        return `
            Color: <b>${this.color}</b><br>
            Peso: <b>${this.peso}</b><br>
            Pantalla: <b>${this.pantalla}</b><br>
            Camara: <b>${this.camara}</b><br>
            Ram: <b>${this.ram}</b><br>
        `
    }               
}


class CelularGamaAlta extends Celular {
   
    constructor (color,peso,camara,pantalla,ram,camara2) {
        super (color,peso,camara,pantalla,ram);
        this.camara2 = camara2;
    }

    gabrarVideoLento () {
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial () {
        alert("Reconociendo el rostro");
    }
    infoGamaAlta () {
        
         return this.mostrarInfo() + `Resolucion camara extra: ${this.camara2} <br>`;
    }

    sacarFoto(pixeles){
        
        alert("foto sacada a: " + pixeles + " pixeles")
    }

}
foto = prompt("a cuantos pixeles desea sacar la foto?");
flash = prompt("es de noche");


celular1 = new Celular ("rojo","150g","full HD","5'","2GB");
celular2 = new Celular ("negro","155g","full HD","5.8","1GB");
celular3 = new Celular ("blanco","140g","HD","4.9'","2GB");




/*
celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.gabrarVideo();
celular1.reinciar();
celular1.presionarBotonEncendido();
*/

celular1P = new CelularGamaAlta ("rojo","120g","2K","5.6'","8GB","full hd");
celular2P = new CelularGamaAlta ("negro","105g","4K","5.8","8GB","full hd+");
celular3P = new CelularGamaAlta ("blanco","130g","4K","6.5'","12GB","2K");
celular1P.sacarFoto(foto);

color = prompt("color del nuevo celular")
peso = prompt("peso del nuevo celular")
camara = prompt("definicion de la camara")
pantalla = prompt("tamaño de pantalla")
ram = prompt("memoria ram")
celularExtra = new Celular (color,peso,camara,pantalla,ram)


let celulares = [celular1,celular2,celular3,celular1P,celular2P,celular3P]
const nuevoObjeto = (celularExtra) => {

    celulares.push(celularExtra);

}       
nuevoObjeto(celularExtra);
celulares.forEach((celu) => {
    document.write (celu.mostrarInfo() + "<br>")
        
})

const agregarId = (celulares) => {

    celulares.forEach((item,i)=>{
    item.id=i+1;
    
});
    console.log(celulares)
}

agregarId(celulares);


const verificarObjeto = (celulares) => {

   for (let i = 0; i <= celulares.length; i++) {
 
        if (typeof celulares[i]==='object') {
            console.log("son todos objetos")
            return true
        }else{
            return false
        }
       
   }  
}
verificarObjeto(celulares)


// ejercicio 10

const sumar = (celulares) => {
    
    if (verificarObjeto(celulares)===true) {
        celulares.forEach(e => {
            let colorCelu = e.color;
            let pesoCelu = e.peso;
            sumaLetras = colorCelu.length+pesoCelu.length
            console.log(`${colorCelu + pesoCelu}`);
            if (sumaLetras>=15){ 
                console.log("true");
                return true;
            }else{
                console.log("false")
                return false;
                
            }
        })
    }
}
sumar(celulares);


/*
celulares2.forEach((celu) => {
    document.write (celu.infoGamaAlta() + "<br>")
        
})


/*
for (let celular of celulares) {
    

    document.write(celular.infoGamaAlta() + "<br>") 
}


/*

for (const i; i<=celulares.length; i++) {

    document.write(celulares[i].infoGamaAlta());

}
*/

/*


document.write(resultado)
*/
/*
const contenedor = document.querySelector(".container");
let contador = 0;
function crearLlave(nombre,modelo,precio){
    contador++;
    img = "<img class='llave-img' src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 >${modelo}</h3>`;
    precio = `<p>precio: <b>$${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}



