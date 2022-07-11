//jquery, libreria de funciones
/*
$(document).ready(function () {
  //alert("hola ya estoy listo");
  $("#random").click(function () {
    alert("esta es una accion del boton");
  });
});
*/

function Number(n) {
  document.getElementById("demo1").innerHTML = "Se selecciono boton: " + n;
}

function avisoCambio() {
  alert("Se ha cambiado la cedula");

  let datos =
    "<input type= 'text' value='Cambio' onclick='saludo()' class='btn btn-success'>";
  document.getElementById("saludo").innerHTML = datos;
}

function saludoCambio() {
  alert("Hola a todos, bienvenido");
}

function soloNumeros(e) {
  var key = window.Event ? e.which : e.keyCode;
  if (key <48 || key >57){
    e.preventDefault();
  }

  function display(){
    let checkRadio = document.querySelector('input[name"color"]: checked');
    if(checkRadio!=null){
      document.getElementById("demo3").innerHTML=checkRadio.value+" fue seleccionado";
    }else{
      document.getElementById("demo3"),innerHTML="No se ha seleccionado nada";
    }
  }
}