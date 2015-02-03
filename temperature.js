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
        var tipo_conversion = $('input[name=grados]:checked').val();
        numero = parseFloat(numero);
        switch (tipo_grado) {
            //De celcius a...
            case 'c':
            case 'C':
                switch (tipo_conversion) {
                    //farenheit
                    case 'f':
                        numero = numero * 1.8 + 32;
                        mensaje_mostrado = numero + "º Farenheit";
                        break;
                        //celcius
                    case 'c':
                        mensaje_mostrado = numero + "º Celcius";
                        break;
                        //kelvin
                    case 'k':
                        numero = numero + 273.15;
                        mensaje_mostrado = numero + "º Kelvin";
                        break;  
                    //rankine
                    case 'ra':
                        numero = (numero * 9)/5 + 491.67;
                        mensaje_mostrado = numero + "º Rankine";
                        break;
                    //reaumur
                    case 're':
                        numero = (numero * 4)/5;
                        mensaje_mostrado = numero + "º Réaumur";
                        break;    
                    default:
                        mensaje_mostrado = "Elija algún tipo al que covertir";
                }
                break;
            
            default:
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