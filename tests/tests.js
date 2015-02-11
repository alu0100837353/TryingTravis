var assert = chai.assert;

suite('temperature', function(){
    test('32f = 0c', function(){
       temperatura_original.value = "32f"; 
       celcius.checked = true;
       calcular_temperatura();
       assert.deepEqual(temperatura_convertida.innerHTML, "0º Celcius")
    });
    test('5X = error', function() {
        temperatura_original.value = "5X";
        calcular_temperatura();
        assert.deepEqual(temperatura_convertida.innerHTML, "Error en los datos de entrada. Pruebe algo cómo se indica en el formato.");
    });
});