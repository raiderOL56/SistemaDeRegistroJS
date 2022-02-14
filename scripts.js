// import {guardarInfo} from './firebase.js';

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