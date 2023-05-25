class animal{
    constructor(nombre, edad){
        this.nombre=nombre
        this.edad=edad
    }
    hacerSonido(){
        return this.nombre + " está haciendo un sonido"
    }
}
class perro extends animal {
    constructor(nombre, edad, raza){
        super(nombre, edad)
        this.raza=raza
    }
    moverCola(){
        return this.nombre + " de raza " + this.raza + " está moviendo la cola"
    }
}
const boton=document.querySelector("#sound");
boton.addEventListener("click",function(e){
    e.preventDefault()
    let nombre=document.querySelector("#name").value;
    let edad=document.querySelector("#age").value;
    let raza=document.querySelector("#raza").value;
    let pet = new perro(nombre, edad, raza); 
    document.querySelector("#sonido").innerHTML=`
    <p style="background-color:white; margin-top: 20px; margin-left:200px; width:200px; text-align:center">${pet.hacerSonido()}</p>
    <p style="background-color:white; margin-left:200px; width:200px; text-align:center">${pet.moverCola()}</p>`
});