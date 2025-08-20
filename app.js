

//variables globales
let amigos = [];
let inputController = document.querySelector("#amigo");
let listaAmigos = document.querySelector("#listaAmigos")


function agregarAmigo() {


    if(inputController.value == ""){
        alert("Debes ingresar un nombre valido")

    }else {
    let nombreInput = document.getElementById("amigo").value;
    amigos.push(nombreInput);
    console.log(amigos)
    
    inputController.value = "";
    listarAmigos();
    }
}


function listarAmigos(){
    listaAmigos.innerHTML = "";

        for (let index = 0; index < amigos.length; index++) {
          let nombre = document.createElement("li");
          nombre.textContent = amigos[index];
          listaAmigos.appendChild(nombre)
        }
    }

