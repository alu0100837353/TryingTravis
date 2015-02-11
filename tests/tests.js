var assert = chai.assert;

suite('Temperature converter', function(){
    suite('Farenheit to...', function(){
        test('32f = 0º Celcius', function(){
           temperatura_original.value = "32f"; 
           celcius.checked = true;
           calcular_temperatura();
           assert.deepEqual(temperatura_convertida.innerHTML, "0º Celcius")
        });
        test('0f = 0º Farenheit', function(){
           temperatura_original.value = "0f"; 
           farenheit.checked = true;
           calcular_temperatura();
           assert.deepEqual(temperatura_convertida.innerHTML, "0º Farenheit")
        });
        test('50f = 283.15º Kelvin', function(){
           temperatura_original.value = "50f"; 
           kelvin.checked = true;
           calcular_temperatura();
           assert.deepEqual(temperatura_convertida.innerHTML, "283.15º Kelvin")
        });
        test('10f = 469.67º Rankine', function(){
           temperatura_original.value = "10f"; 
           rankine.checked = true;
           calcular_temperatura();
           assert.deepEqual(temperatura_convertida.innerHTML, "469.67º Rankine")
        });
        test('41f = 469.67º Réaumur', function(){
           temperatura_original.value = "41f"; 
           reaumur.checked = true;
           calcular_temperatura();
           assert.deepEqual(temperatura_convertida.innerHTML, "4º Réaumur")
        });
    });
    suite('Celcius to...', function(){
        test('0c = 0º Celcius', function(){
           temperatura_original.value = "0c"; 
           celcius.checked = true;
           calcular_temperatura();
           assert.deepEqual(temperatura_convertida.innerHTML, "0º Celcius")
        });
        test('-5c = 23º Farenheit', function(){
           temperatura_original.value = "-5c"; 
           farenheit.checked = true;
           calcular_temperatura();
           assert.deepEqual(temperatura_convertida.innerHTML, "23º Farenheit")
        });
        test('10c = 283.15º Kelvin', function(){
           temperatura_original.value = "10c"; 
           kelvin.checked = true;
           calcular_temperatura();
           assert.deepEqual(temperatura_convertida.innerHTML, "283.15º Kelvin")
        });
        test('-100c = 311.67º Rankine', function(){
           temperatura_original.value = "-100c"; 
           rankine.checked = true;
           calcular_temperatura();
           assert.deepEqual(temperatura_convertida.innerHTML, "311.67º Rankine")
        });
        test('2c = 1.6º Réaumur', function(){
           temperatura_original.value = "2c"; 
           reaumur.checked = true;
           calcular_temperatura();
           assert.deepEqual(temperatura_convertida.innerHTML, "1.6º Réaumur")
        });
    });
    test('5X = error', function() {
        temperatura_original.value = "5X";
        calcular_temperatura();
        assert.deepEqual(temperatura_convertida.innerHTML, "Error en los datos de entrada. Pruebe algo cómo se indica en el formato.");
    });
});