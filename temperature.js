function calcular_temperatura(){
    
    var temperatura = temperatura_original.value;//guardamos el valor de la temperatura qe ha insertado el usuario
    
    /*
    * Comprobamos que el valor introducido tiene el formato correcto, si no se muestra una alerta 
    */
    if(temperatura.match(/[+-]?\d+((\.)\d+)?\s*[CcFf]/)){
        
        temperatura_convertida.className = "alert alert-success"
        temperatura_convertida.style.display = "block"
        temperatura_convertida.innerHTML = "Valor correcto";
        
    }else{
        
        temperatura_convertida.className = "alert alert-danger"
        temperatura_convertida.style.display = "block"
        temperatura_convertida.innerHTML = "Error en los datos de entrada. Pruebe algo cómo se indica en el formato.";
   
    }
}