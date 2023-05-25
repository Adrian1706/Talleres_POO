class persona {
    constructor(nombre, edad, sexo){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
    }
    get getEdad(){
        return this.edad;
    }
    set setEdad(edad){
        this.edad=edad
    }
    saludar(){
        return this.nombre;
    }
    static mayorEdad(edad){
        return edad<18 ? "Menor" : "Mayor"
    }
}
class estudiante extends persona{
    constructor(nombre, edad, sexo, carrera){
        super(nombre, edad, sexo)
        this.carrera=carrera
    }
    estudiar(){
        return super.saludar() + " estudia " + this.carrera
    }
    static mayorEdad(edad){
        return edad<18 ? "Menor" : "Mayor"
    }
}
const boton=document.querySelector("#saludar");
boton.addEventListener("click",saludar);
function saludar(){
    let nombre = document.getElementById("name").value;
    let edad = document.getElementById("age").value;
    let sexo = document.getElementById("sexo").value;
    let materia = document.getElementById("materia").value;
    
    
    let person = new estudiante (nombre, edad, sexo, materia);
    document.getElementById("saludo").innerHTML =`<p style="background-color:white; margin-top: 20px; margin-left:200px; width:200px; text-align:center">${person.estudiar()}</p>
    <p style="background-color:white; margin-left:200px; width:200px; text-align:center">${estudiante.mayorEdad(person.getEdad)}</p>`
}
