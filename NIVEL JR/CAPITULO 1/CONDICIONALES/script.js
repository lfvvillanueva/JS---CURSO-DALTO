// Condicional "if"
var edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}

// Condicional "if-else"
var edad = 16;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Condicional "switch"
var diaSemana = 3;
var mensaje;

switch (diaSemana) {
  case 1:
    mensaje = "Lunes";
    break;
  case 2:
    mensaje = "Martes";
    break;
  case 3:
    mensaje = "Miércoles";
    break;
  default:
    mensaje = "Día no válido";
    break;
}

console.log(mensaje);
