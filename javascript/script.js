    // Variáveis elementos HTML
    var criptografar = document.getElementById("criptografar");
    var descriptografar = document.getElementById("descriptografar");
    var copiar = document.getElementById("copiar");
    var input = document.getElementById("escrevaMensagem");
    var resultado = document.getElementById("resulado");

    // Recebe textos
    var texto;

    console.log(criptografar);
    console.log(descriptografar);
    console.log(copiar);
    console.log(input.value);
    console.log(resultado);

    // Criptografar textos
    function cript(){
      console.log(input.value);
      if(input.value != ""){
        texto = input.value.replace(/e/g, "enter");
        texto = texto.replace(/i/g, "imes");
        texto = texto.replace(/a/g, "ai");
        texto = texto.replace(/o/g, "ober");
        texto = texto.replace(/u/g, "ufat");

        document.getElementById("resultado").innerHTML = texto;

        resultado.value.textContent = texto;
        input.value = "";

        console.log(texto);
      }
    }

    // Descriptografar textos
    function descript(){
      console.log(input.value);
      if(input.value != ""){
        texto = input.value.replace(/enter/g, "e");
        texto = texto.replace(/imes/g, "i");
        texto = texto.replace(/ai/g, "a");
        texto = texto.replace(/ober/g, "o");
        texto = texto.replace(/ufat/g, "u");

        document.getElementById("resultado").innerHTML = texto;

        resultado.value.textContent = texto;
        input.value = "";

        console.log(texto);
      }
    }

    //Copiar textos
    document.getElementById('copiar').addEventListener('click', copiarTexto);
    function copiarTexto() {
      document.querySelector("#resultado").select();
      document.execCommand("copy");
    }

