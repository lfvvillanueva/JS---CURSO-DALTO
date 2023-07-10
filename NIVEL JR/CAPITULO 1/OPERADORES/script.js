// Operadores de asignación
var x = 10;

// Operadores aritméticos
var suma = 5 + 3;
var resta = 7 - 2;
var multiplicacion = 4 * 6;
var division = 10 / 2;
var resto = 10 % 3;

console.log("Suma:", suma); // Salida: 8
console.log("Resta:", resta); // Salida: 5
console.log("Multiplicación:", multiplicacion); // Salida: 24
console.log("División:", division); // Salida: 5
console.log("Resto:", resto); // Salida: 1

// Operadores de incremento y decremento
var contador = 5;
contador++; // equivalente a: contador = contador + 1;
console.log("Incremento:", contador); // Salida: 6

contador--; // equivalente a: contador = contador - 1;
console.log("Decremento:", contador); // Salida: 5

// Operadores de comparación
var x = 5;
var y = "5";

console.log("Igualdad (==):", x == y); // Salida: true (compara los valores sin tener en cuenta el tipo de dato)
console.log("Igualdad estricta (===):", x === y); // Salida: false (compara los valores y los tipos de dato)
console.log("Desigualdad (!=):", x != y); // Salida: false
console.log("Desigualdad estricta (!==):", x !== y); // Salida: true
console.log("Mayor que (>):", x > 3); // Salida: true
console.log("Menor que (<):", x < 10); // Salida: true
console.log("Mayor o igual que (>=):", y >= 5); // Salida: true
console.log("Menor o igual que (<=):", y <= 5); // Salida: true

// Operadores lógicos
var a = true;
var b = false;

console.log("AND (&&):", a && b); // Salida: false
console.log("OR (||):", a || b); // Salida: true
console.log("NOT (!):", !a); // Salida: false

// Operadores de concatenación
var saludo = "Hola";
var nombre = "Juan";
var mensaje = saludo + " " + nombre;
console.log("Mensaje:", mensaje); // Salida: "Hola Juan"

// Operadores ternarios
var edad = 18;
var mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log("Mensaje de edad:", mensaje); // Salida: "Eres mayor de edad"
