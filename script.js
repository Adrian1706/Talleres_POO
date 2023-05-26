class figura{
    constructor(color,area){
        this.color = color;
        this.area = area;
    }
    calcularArea(){
        return "La figura es de color " + this.color + " y tiene un area de "+ this.area;
    }
}
class circulo extends figura{
    constructor(color, area, radio){
        super(color,area);
        this.radio = radio;
    }
    calcularArea(){
        return "El circulo es " + this.color + " y el radio es de " + Math.PI*this.radio*this.radio;
    }
}
class rectangulo extends figura{
    constructor(color, largo, ancho){
        super(color,area);
        this.largo = largo;
        this.ancho = ancho;
    }
    calcularArea(){
        return "El rectangulo es " + this.color + " y el area es de " + this.largo*this.ancho;
    }
}
// seleccionar = document.querySelector("#selec")
// seleccionar.addEventListener("change", function(e){
//     e.preventDefault()
//     let selec = document.querySelector("#selec").value;
//     if(selec=="circulo"){
//         document.querySelector("#new").innerHTML=`
//             <div class="col-12">
//                 <input class="form-control me-2" type="text" placeholder="Ingrese el radio" id="radio" style="text-align: center; margin-top: 10px;">
//             </div>`
//     }else if(selec=="rectangulo"){
//         document.querySelector("#new").innerHTML=`
//         <div class="col-6">
//             <input class="form-control me-2" type="text" placeholder="Ingrese el largo" id="largo" style="text-align: center; margin-top: 10px;">
//         </div>
//         <div class="col-6">
//             <input class="form-control me-2" type="text" placeholder="Ingrese el ancho" id="ancho" style="text-align: center; margin-top: 10px;">
//         </div>`
//     }
// })
const boton=document.querySelector("#calculo");
boton.addEventListener("click",function(e){
    e.preventDefault()
    let color = document.querySelector("#color").value;
    let area = document.querySelector("#area").value;
    let obj = new figura (color, area);
    document.querySelector("#result").innerHTML=`
    <p style="background-color:white; margin-top: 20px; margin-left:200px; width:200px; text-align:center">${obj.calcularArea()}</p>`
    // if (select=="circulo"){      
    //     let radio = document.querySelector("#radio").value;
    //     document.querySelector("#result").innerHTML=`
    //     <p style="background-color:white; margin-top: 20px; margin-left:200px; width:200px; text-align:center">El radio del circulo es ${obj.calcularArea()}</p>`
    // }
    // else if (select=="rectangulo"){
    //     let largo = document.querySelector("#largo").value;
    //     let ancho = document.querySelector("#ancho").value;
    //     document.querySelector("#result").innerHTML=`
    //             <p style="background-color:white; margin-top: 20px; margin-left:200px; width:200px; text-align:center">El largo del rectangulo es ${obj2.calcularArea()}</p>`
    // }
})

const boton1=document.querySelector("#calculoC");
boton1.addEventListener("click",function(e){
    e.preventDefault()
    let color = document.querySelector("#colorC").value;
    let radio = document.querySelector("#radio").value;
    let obj1 = new circulo (color, area, radio);
    document.querySelector("#resultC").innerHTML=`
    <p style="background-color:white; margin-top: 20px; margin-left:200px; width:200px; text-align:center">${obj1.calcularArea()}</p>`
});

const boton2=document.querySelector("#calculoR");
boton2.addEventListener("click",function(e){
    e.preventDefault()
    let color = document.querySelector("#colorR").value;
    let largo = document.querySelector("#largo").value;
    let ancho = document.querySelector("#ancho").value;
    let obj2 = new rectangulo (color, largo, ancho);
    document.querySelector("#resultR").innerHTML=`
    <p style="background-color:white; margin-top: 20px; margin-left:200px; width:200px; text-align:center">${obj2.calcularArea()}</p>`
});