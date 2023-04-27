function escucharTeclado(input){
    console.log('texto:', input.value);
}

$("#txt-apellidos").keyup(function(){
    let texto = $("#txt-apellidos").val()
    console.log('texto', texto);
    console.log('tamaño texto: ', texto.length);
    let tamanio = texto.length
    let ultimaLetra = texto.substring(tamanio -1);
    console.log('ultimaLetra: ', ultimaLetra);
    console.log('insNan: ', isNaN(ultimaLetra));

    if(ultimaLetra ===" " || isNaN(ultimaLetra)){
        $("#txt-apellidos").val(texto.toUpperCase());
    }else{
        texto = texto.substring(0,tamanio - 1);
        $("#txt-apellidos").val(texto.toUpperCase());
    }
    
});