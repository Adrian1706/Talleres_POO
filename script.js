class figura{
    constructor(color,area){
        this.color = color;
        this.area = area;
    }
    calcularArea(){
        return this.area;
    }
}
class circulo extends figura{
    constructor(color, area, radio){
        super(color,area);
        this.radio = radio;
    }
    calcularArea(){
        return "El area del circulo es" + Math.PI*this.radio*this.radio;
    }
}
class rectangulo extends figura{
    constructor(color, area, largo, ancho){
        super(color,area);
        this.largo = largo;
        this.ancho = ancho;
    }
    calcularArea(){
        return "El area del rectangulo es " + this.largo*this.ancho;
    }
}
seleccionar = document.querySelector("#selec")
seleccionar.addEventListener("change", function(e){
    e.preventDefault()
    let selec = document.querySelector("#selec").value;
    if(selec=="circulo"){
        document.querySelector("#new").innerHTML=`
            <div class="col-12">
                <input class="form-control me-2" type="text" placeholder="Ingrese el radio" id="radio" style="text-align: center; margin-top: 10px;">
            </div>`
    }else if(selec=="rectangulo"){
        document.querySelector("#new").innerHTML=`
        <div class="col-6">
            <input class="form-control me-2" type="text" placeholder="Ingrese el largo" id="largo" style="text-align: center; margin-top: 10px;">
        </div>
        <div class="col-6">
            <input class="form-control me-2" type="text" placeholder="Ingrese el ancho" id="ancho" style="text-align: center; margin-top: 10px;">
        </div>`
    }
})
const boton=document.querySelector("#calculo");
boton.addEventListener("click",function(e){
    e.preventDefault()
    let color = document.querySelector("#color").value;
    let area = document.querySelector("#area").value;
    
    let largo = document.querySelector("#largo").value;
        let ancho = document.querySelector("#ancho").value;
    let obj = new circulo(color, area, radio);
    let obj2 = new rectangulo(color, area, largo, ancho);
    if (select=="circulo"){
        document.querySelector("#result").innerHTML=`
        <p style="background-color:white; margin-top: 20px; margin-left:200px; width:200px; text-align:center">El radio del circulo es ${obj.calcularArea()}</p>`
    }
    else if (select=="rectangulo"){
        document.querySelector("#result").innerHTML=`
                <p style="background-color:white; margin-top: 20px; margin-left:200px; width:200px; text-align:center">El largo del rectangulo es ${obj2.calcularArea()}</p>`
    }
})