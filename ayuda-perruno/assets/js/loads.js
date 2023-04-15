function loadData() {
    const url = "http://127.0.0.1:5501/assets/data.json";
    const response = fetch(url)
        .then((response) => {
            /*VALIDACION RESPUESTA RECURSO*/
            if (response.ok) {
                console.log("response.text:", response.text);
                return response.text();
            } else {
                console.log("response.status ", response.status);
                throw new Error(response.status);
            }
        })
        .then((data) => {
            /*LECTURA DE LA DATA JSON*/
            console.log("Datos: ", data);
            const objJson = JSON.parse(data);
            for (i = 0; i < objJson.length; i++) {
                console.log("_________________");
                console.log("Codigo: ", objJson[i].codigo);
                console.log("Titulo: ", objJson[i].titulo);
                console.log("Imagen: ", objJson[i].imagen);
                console.log("Descripcion :", objJson[i].descripcion);
            }
        })
        .catch((err) => {
            /*CAPTURA DE ERRORES*/
            console.error("ERROR", err.message);
        });
}
loadData();
