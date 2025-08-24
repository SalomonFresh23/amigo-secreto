

//variables globales
let amigos = [];
let inputController = document.querySelector("#amigo");
let listaAmigos = document.querySelector("#listaAmigos")
let resultado = document.querySelector("#resultado")

function agregarAmigo() {


    if (inputController.value == "") {
        alert("Debes ingresar un nombre valido")

    } else {
        let nombreInput = document.getElementById("amigo").value;
        amigos.push(nombreInput);
        console.log(amigos)

        inputController.value = "";
        listarAmigos();
    }
}


function listarAmigos() {
    listaAmigos.innerHTML = "";

    for (let index = 0; index < amigos.length; index++) {
        let nombre = document.createElement("li");
        nombre.textContent = amigos[index];
        listaAmigos.appendChild(nombre);

        //boton extra para borrar amigos
        let btnBorrar = document.createElement("button")
        btnBorrar.textContent = "Eliminar"
        nombre.appendChild(btnBorrar);

        btnBorrar.onclick = function () {
            eliminarAmigo(index);
        }



    }
}


function sortearAmigo() {
    if (amigos.length > 0) {
        let indice = Math.floor(Math.random() * amigos.length)
        resultado.innerHTML = `El nombre aleatorio eligido es : ${amigos[indice]}`;
        console.log(indice)

    }
}


function eliminarAmigo(index) {

    amigos.splice(index, 1)
    listarAmigos();


}