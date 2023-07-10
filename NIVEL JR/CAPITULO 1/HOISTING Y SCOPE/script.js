// Ejemplo de hoisting y scope en JavaScript

// Declaración de una variable global
var globalVariable = "Soy global";

function exampleFunction() {
  // Declaración de una variable local
  var localVariable = "Soy local";

  // Uso de la variable local
  console.log(localVariable); // Salida: "Soy local"

  // Uso de la variable global dentro de la función
  console.log(globalVariable); // Salida: "Soy global"
}

// Intento de uso de la variable local fuera de la función
console.log(localVariable); // Error: localVariable is not defined

// Uso de la variable global fuera de la función
console.log(globalVariable); // Salida: "Soy global"

// Llamada a la función
exampleFunction();

// Hoisting de función
hoistedFunction(); // Salida: "¡Función hoisted!"

function hoistedFunction() {
  console.log("¡Función hoisted!");
}

// Intento de hoisting de variable
console.log(nonHoistedVariable); // Salida: undefined

var nonHoistedVariable = "No hoisted";

// Uso de la variable después de su declaración
console.log(nonHoistedVariable); // Salida: "No hoisted"
