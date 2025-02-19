
//Funcion para agregar nombres de amigos pulsando el boton añadir (elemento HTML)
//let nombresUsarios = [];

//function agregarAmigo() {
//   let nombreAmigoUsuario = document.getElementById('amigo').value.trim();
//   if (nombreAmigoUsuario === "") {
//    alert("Por favor, ingresa un nombre.");
//    return;
//    let agregarALaLista = document.getElementById('listaAmigos');


//    console.log(nombreAmigoUsuario);
//    console.log(agregarALaLista);
//}

//agregarAmigo()


//Limpia la caja para poder ingresar otros nombres
//function limpiarCaja() {
//    document.getElementById('amigo').value = "";
//}




// Array para almacenar los nombres
let nombresUsarios = [];
function agregarAmigo() {
    // Obtener el valor del input y limpiar espacios extra
    let nombreAmigoUsuario = document.getElementById('amigo').value.trim();

    // Validar que el input no esté vacío
    if (nombreAmigoUsuario === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    // Agregar el nombre al array
    nombresUsarios.push(nombreAmigoUsuario);

    // Actualizar la lista en la interfaz
    actualizarLista();

    // Limpiar el input
    document.getElementById('amigo').value = "";
}

// Función para actualizar la lista
function actualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ""; // Limpiar lista

    nombresUsarios.forEach(nombre => {
        let elemento = document.createElement("li");
        elemento.textContent = nombre;
        lista.appendChild(elemento);
    });
}

