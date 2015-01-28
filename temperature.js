function calcular_temperatura(){
    
    var temperatura = temperatura_original.value;
    
    if(temperatura.match(/[+-]?\d+((\.)\d+)?\s*[CcFf]/)){
        temperatura_convertida.innerHTML = "Valor correcto";
    }else{
        temperatura_convertida.innerHTML = "Valor incorrecto";
    }
}