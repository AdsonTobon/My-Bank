



document.getElementById("btn-password").addEventListener('click',iniciarSesion);

  function iniciarSesion(){

    var formulario = document.getElementById("form");

    var claveCorrecta = 1234;
    var clave = document.getElementById("Password").value;

    if( clave == claveCorrecta) {

    
    alert("Contra correcta");
    formulario.submit();

    }else{
        alert("Contraseña incorrecta!!");
    }
  }

