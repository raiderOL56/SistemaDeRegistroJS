// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWVTem_3JoajXBbjQJQb4fpAGrilAyKt8",
  authDomain: "examentecnico-40d01.firebaseapp.com",
  projectId: "examentecnico-40d01",
  storageBucket: "examentecnico-40d01.appspot.com",
  messagingSenderId: "864400588257",
  appId: "1:864400588257:web:c8c8df94c0b11234b1a6a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const guardarInfo = (nombre, edad, direccion, pais, estado) => addDoc(collection(db, 'users'), {nombre, edad, direccion, pais, estado});

// Validar campos completos
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const direccion = document.getElementById("direccion");
const pais = document.getElementById("selectPaises");
const estado = document.getElementById("selectEstados");
const form = document.getElementById("formulario");

var flag = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    guardarInfo(nombre.value, edad.value, direccion.value, pais.value, estado.value);
    flag = 1;
    infoGuardada().then(function(mensaje){
        alert(mensaje);
    }).catch(function(error){
        alert(error);
    });
    form.reset();
});

// Función Promise
function infoGuardada(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(flag == 1){
                resolve("Datos guardados correctamente");
            } else {
                reject("Datos no guardados");
            }
        }, 2000);
    });
}