
let amigos = [];

function agregaAmigo() {
    let nombre = document.querySelector('#amigo');
    
    if (nombre.value == "") {
        alert("Ingrese un nombre, por favor");
        agregaAmigo;
    } else {
        amigos.push(nombre.value);
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = ""; //limpia la lista antes de actualizar
        
        amigos.forEach(elemento=> {
            let item = document.createElement("li");
            item.textContent=elemento;
            lista.appendChild(item);
        })
    }
    document.querySelector('#amigo').value = '';
};

function sortearAmigo(){
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let elegido = amigos[indiceAleatorio];
    
                amigos.splice(indiceAleatorio,1);
    
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    return asignarTextoElemento("#resultado", elegido);
};

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};




