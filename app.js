
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




// Variable asignada a un array(lista) para que almacene los nombres ingresados por el usuario en esta
let nombresUsarios = [];

//Funcion que agrega el nombre entregado por el usario al lista (elemento Html), ademas de comprobar que no se repitan los nombres ni se ingrese un campo vacio 
function agregarAmigo() {
    let nombreAmigoUsuario = document.getElementById('amigo').value.trim();

    //Verifica si se oprimio el input cuando esta vacio
    if (nombreAmigoUsuario === "") {
        alert("Por favor, ingresa un nombre");
        return;
    }

    // Verificar si el nombre ya está en la lista
    if (nombresUsarios.includes(nombreAmigoUsuario)) {
        alert("Ese nombre ya fue ingresado");
        return;
    }

    // Agregar el nombre a la lista
    nombresUsarios.push(nombreAmigoUsuario);
    actualizarLista();
    document.getElementById('amigo').value = "";
}

// Función para actualizar la lista
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 
    nombresUsarios.forEach(nombre => {
        let elemento = document.createElement("li");
        elemento.textContent = nombre;
        lista.appendChild(elemento);
    });
}


// Función para sortear un nombre aleatorio mediante el uso de un numero aleatorio que se le asocia la longitud del array de nombres
function sortearAmigo() {
    if (nombresUsarios.length === 0) {
        document.getElementById('resultado').textContent = "No hay nombres en la lista para sortear.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombresUsarios.length);
    let nombreSorteado = nombresUsarios[indiceAleatorio];

    document.getElementById('resultado').textContent = "El nombre sorteado es: " + nombreSorteado;
}

