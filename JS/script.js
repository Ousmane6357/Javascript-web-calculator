function calculo(){


    var elementokm = document.getElementById('ingreso');
    var ingreso = elementokm.value;
    var cantkm = Number(ingreso);

    var cantLitro = cantkm /10.9;

    var resultado = document.getElementById('resultado');
    resultado.textContent = 'Carga '+ cantLitro + 'litros de com'
    
    

    
}
