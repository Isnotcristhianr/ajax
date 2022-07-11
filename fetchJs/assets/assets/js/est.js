class est {
  constructor(edad, cedula) {
    this.edad = edad;
    this.cedula = cedula;
  }

  ingresar() {
    if (this.edad >= 18) {
      resp = "Puede ingresar";
    } else {
      resp = "No puede ingresar";
    }
    return resp;
  }

  evaCedula() {
    /*
     if (this.cedula.length == 10) {
      alert("Cedula correcta");
    } else {
      alert("Cedula incorrecta");
    }
    */

    //separar caracteres
    let cad = document.getElementById("ced").value.trim();

    let total = 0;
    let longitud = cad.length;
    let aux;
    let lonvalida = longitud - 1;

    //recorrer
    if (cad != "" && longitud === 10) {
      for (let i = 0; i < lonvalida; i++) {
        //par
        if (i % 2 == 0) {
          aux = cad.charAt(i) * 2; //implicitamente se convierte a numero

          if (aux > 9) {
            aux -= 9;
          }

          total += aux;
        }
        //impar
        else {
          total += parseInt(cad.charAt(i)); //explicitamente se convierte a numero
        }
      }

      total = total % 10 ? 10 - (total % 10) : 0;

      console.log("total " + total);

      if (cad.charAt(lonvalida) == total) {
        document.getElementById("demo2").innerHTML = "Cedula correcta";
      } else {
        document.getElementById("demo2").innerHTML = "Cedula incorrecta";
      }
      
    } else {
      alert("Cedula incorrecta");
    }
  }

}
