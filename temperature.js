function calcular_temperatura(){
    
    var temperatura = document.getElementById("temperatura_original").value;
    if(temperatura.match(/\d+((\.)\d+)*[CcFf]/)){
        temperatura_convertida.innerHTML = "Valor correcto";
    }else{
        temperatura_convertida.innerHTML = "Valor incorrecto";
    }
}