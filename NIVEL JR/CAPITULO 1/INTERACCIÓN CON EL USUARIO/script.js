// Utilizando prompt()
var nombre = prompt("Por favor, ingresa tu nombre:");
console.log("Nombre ingresado:", nombre);

// Utilizando confirm()
var confirmacion = confirm("¿Estás seguro de que deseas continuar?");
console.log("Confirmación:", confirmacion);

// Utilizando alert()
alert("¡Hola, mundo!");

// Utilizando input HTML
// Creación de un campo de texto y un botón en el HTML
// <input type="text" id="nombreInput" placeholder="Ingresa tu nombre">
// <button onclick="obtenerNombre()">Obtener nombre</button>

// Función para obtener el valor del campo de texto
function obtenerNombre() {
  var nombre = document.getElementById("nombreInput").value;
  console.log("Nombre ingresado:", nombre);
}
