function calcular_temperatura(){
    
    var temperatura = temperatura_original.value;//guardamos el valor de la temperatura qe ha insertado el usuario
    var expresion_regular = /([+-]?\d+(?:\.\d+)?)\s*([CcFf])/;
    var matching = temperatura.match(expresion_regular);
    var mensaje_mostrado = "Error en los datos de entrada. Pruebe algo cómo se indica en el formato.";
    /*
    * Comprobamos que el valor introducido tiene el formato correcto, si no se muestra una alerta 
    */
    if(matching){
        var numero = matching[1];
        var tipo_grado = matching[2];
        
        switch (tipo_grado) {
            case 'c' || 'C':
                numero = numero * 1.8 + 32;
                mensaje_mostrado = numero + "º Farenheit";
                break;
            
            default:
                // code
        }
        temperatura_convertida.className = "alert alert-success"
        temperatura_convertida.style.display = "block"
        temperatura_convertida.innerHTML = mensaje_mostrado;
        
    }else{
        
        temperatura_convertida.className = "alert alert-danger"
        temperatura_convertida.style.display = "block"
        temperatura_convertida.innerHTML = mensaje_mostrado;
   
    }
}