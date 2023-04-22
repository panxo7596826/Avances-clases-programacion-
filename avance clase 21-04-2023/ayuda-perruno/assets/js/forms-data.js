function escucharTeclado(input){
    console.log('texto: ' , input.value);
}

$("txt-apellidos").keyup(function(){     //sobreecribimos la funcion con el metodo w3school  revisar por que no toma puede ser que jquery este mal cargado//
    console.log('texto', $("txt-apellidos").val());

});