/* FUNCIÓN JQUERY QUE SE EJCUTA AL FINALIZAR LA CARGA DEL DOM O DOMINIO (PAGÍNA HTML)*/
$(document).ready(function(){
    /* DEFINICIÓN DE MANEJADOR DE VENTO PARA LA ACCIÓN click SOBRE EL ELEMENTO CON ID btnlogin DEL DOM (SOLO SE EJECUTA CUANDO LA ACCIÓN DE HACER CLICK SE REALICÉ) */
    $("#btnlogin").click(function(){
        /* DECLARATIVA PARA OBTENER EL VALOR DE UN ELEMENTO CON ID txtcorreo DEL DOM Y ASIGNARLO A LA VARIABLE email */
        var email = $("#txtcorreo").val();
        /* DECLARATIVA PARA OBTENER EL VALOR DE UN ELEMENTO CON ID txtclave DEL DOM Y ASIGNARLO A LA VARIABLE email */
        var clave = $("#txtclave").val();
        /* VALIDAR QUE EL email o clave ESTEN VACÍOS */
        if(email == "" || clave == ""){
            /* QUITA LA CLASE d-none QUE POSEE EL ELEMENTO CON ID error DEL DOM (CLASE PARA OCULTAR ELEMENTO EN BOOSTRAP) */
            /* VEER DOCUMENTACIÓN https://getbootstrap.com/docs/5.3/utilities/display/ */
            $("#error").removeClass("d-none");
            /* INSERTA,AGREGA O INYECTA CONTENIDO HTML EN EL ELEMENTO CON ID error DEL DOM */
            $("#error").html("<h1>Ambos Campos son Obligatorios.</h1>");
            /* QUITA LA CLASE d-none QUE POSEE EL ELEMENTO CON ID correcto DEL DOM (CLASE PARA OCULTAR ELEMENTO EN BOOSTRAP) */
            /* VEER DOCUMENTACIÓN https://getbootstrap.com/docs/5.3/utilities/display/ */                     
            $("#correcto").addClass("d-none");            
        }
        /* EN CASO DE NO ESTAR VACIÓS SE REALIZAN LAS SIGUIENTES ACCIONES */
        else{
            /* VALIDAR QUE EL NOMBRE DE USUARIO Y CONTRASEÑAS SON admin y 123 RESPECTIVAMENTE*/
            /* NOTA LA EXPRESIÓN == SOLO COMPARA VALORES Y NO TIPOS DE DATOS DEJANDO A JS EL TRABAJO DE VERIFICACIÓN
               SI QUEREMOS VALIDAR EL VALOR Y EL TIPO DE DATO SE DEBE COLOCAR === . EN ESTE CASO ESTAMO VALIDANDO
               QUE LAS VARIABLES email y clave TENGAN LOS VALORES admin y 123 Y TAMBIÉN VERIFICANDO QUE AMBOS CAMPOS
               SEAN DE TIPO TEXTO */
            if(email === "admin" && clave === "123"){
                /* AGREGA LA CLASE d-none QUE POSEE EL ELEMENTO CON ID error DEL DOM (CLASE PARA OCULTAR ELEMENTO EN BOOSTRAP) */
                /* VEER DOCUMENTACIÓN https://getbootstrap.com/docs/5.3/utilities/display/ */                
                $("#error").addClass("d-none");
                /* QUITA LA CLASE d-none QUE POSEE EL ELEMENTO CON ID correcto DEL DOM (CLASE PARA OCULTAR ELEMENTO EN BOOSTRAP) */
                /* VEER DOCUMENTACIÓN https://getbootstrap.com/docs/5.3/utilities/display/ */                     
                $("#correcto").removeClass("d-none");
            }
            /* EN CASO DE QUE LA CONTRASEÑA Y USUARIOS NO SEAN LOS CORRECTOS SE REALIZARÁ LA SIGUIENTE ACCIÓN. */
            else{
                /* QUITA LA CLASE d-none QUE POSEE EL ELEMENTO CON ID error DEL DOM (CLASE PARA OCULTAR ELEMENTO EN BOOSTRAP) */
                /* VEER DOCUMENTACIÓN https://getbootstrap.com/docs/5.3/utilities/display/ */                 
                $("#error").removeClass("d-none");
                /* INSERTA,AGREGA O INYECTA CONTENIDO HTML EN EL ELEMENTO CON ID error DEL DOM */
                $("#error").html("<h1>Usuario o Contraseñas incorrectas.</h1>");
                /* QUITA LA CLASE d-none QUE POSEE EL ELEMENTO CON ID correcto DEL DOM (CLASE PARA OCULTAR ELEMENTO EN BOOSTRAP) */
                /* VEER DOCUMENTACIÓN https://getbootstrap.com/docs/5.3/utilities/display/ */                     
                $("#correcto").addClass("d-none");                 
            }
        }

    });

});