// querySelector sirve para seleccionar elementos del DOM usando selectores de css
let lista = document.querySelector("#miLista");
console.log(lista);
lista.style.backgroundColor = "yellow";
let btn = document.querySelector("#btnResaltar");
function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
  
  btn.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    lista.style.backgroundColor = rndCol;
  }

  let btn2 = document.querySelector("#btnOcultar");
  function ocultarlista() {
  lista.style.display = "none";
  } 
  // ocultarLista es una funcion que se va a ejecutar cuando se le haga click al boton
// event listener
  btn2.onclick = ocultarlista;

  let btn3 = document.querySelector("#btnMostrar");
  function mostrarlista() {
    lista.style.display = "";
  } 
  btn3.onclick = mostrarlista;
    