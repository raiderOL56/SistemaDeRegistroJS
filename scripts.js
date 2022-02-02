// Validar qué país está seleccionado
function paisSeleccionado(){
    var paisSelect = document.getElementById("selectPaises").value;
    if(paisSelect == "Mexico"){
        estadosMexico()
    } else if(paisSelect == "Colombia"){
        estadosColombia()
    }
}

// Instertar estados de México
function estadosMexico(){
    let estadosM = ["CDMX", "Michoacán", "Veracruz", "Aguascalientes"]
    for(let i = 0; i < estadosM.length; i++){
        insertarEstados(estadosM[i])
    }
}

// Insertar estados de Colombia
function estadosColombia(){
    let estadosC = ["Córdoba", "Meta", "Choco", "Arauca"]
    for(let j = 0; j < estadosC.length; j++){
        insertarEstados(estadosC[j])
    }
}

// Insertar <option>
function insertarEstados(estado){
    let estadoSelect = document.getElementById("selectEstados")
    let  option = '<option value="' + estado + '">' + estado + '</option>'
    estadoSelect.insertAdjacentHTML("beforeend", option)
}

// Validar campos completos
const nombre = document.getElementById("nombre")
const edad = document.getElementById("edad")
const direccion = document.getElementById("direccion")
const parrafo = document.getElementById("warnings")
const form = document.getElementById("formulario")

form.addEventListener("submit", e=>{
    e.preventDefault
    if(nombre.value.length == 0){
        alert("Escribe tu nombre")
    } else if(nombre.value.length  < 6){
        alert("Nombre inválido")
    }
})