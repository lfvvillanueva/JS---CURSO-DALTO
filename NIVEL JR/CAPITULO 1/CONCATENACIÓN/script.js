// Operador de concatenación (+)
var nombre = "Juan";
var saludo = "Hola, " + nombre + "!";

console.log(saludo); // Salida: "Hola, Juan!"

// Método concat()
var nombre = "Juan";
var apellido = "Pérez";
var nombreCompleto = nombre.concat(" ", apellido);

console.log(nombreCompleto); // Salida: "Juan Pérez"

// Template literals (plantillas de cadena)
var nombre = "Juan";
var edad = 25;
var mensaje = `Hola, ${nombre}. Tienes ${edad} años.`;

console.log(mensaje); // Salida: "Hola, Juan. Tienes 25 años."

// Dato curioso: Coerción automática de tipo en el operador de concatenación
var numero = 5;
var cadena = "El número es: " + numero;

console.log(cadena); // Salida: "El número es: 5"

// Dato curioso: Concatenación sin conversión automática de tipo en el método concat()
var nombre = "Juan";
var edad = 25;
var mensaje = nombre.concat(" tiene ", edad, " años");

console.log(mensaje); // Salida: "Juan tiene 25 años"

// Dato curioso: Expresiones dentro de las plantillas de cadena
var x = 5;
var y = 3;
var resultado = `La suma de ${x} y ${y} es ${x + y}`;

console.log(resultado); // Salida: "La suma de 5 y 3 es 8"
