El hoisting y el scope son dos conceptos fundamentales en JavaScript que afectan cómo se declara y accede a las variables y funciones en un programa. A continuación, te proporcionaré una explicación detallada y técnica de cada uno de estos conceptos:

1. Hoisting:
El hoisting en JavaScript se refiere a un comportamiento especial que ocurre durante la fase de compilación del código, donde las declaraciones de variables y funciones se mueven hacia arriba en su ámbito actual, sin importar dónde se haya realizado la declaración. Esto significa que las variables y funciones pueden ser utilizadas antes de ser declaradas explícitamente en el código.

Sin embargo, es importante tener en cuenta que solo las declaraciones de variables y funciones se ven afectadas por el hoisting, no las asignaciones de valores. Es decir, solo se mueven las declaraciones, no las inicializaciones.

Por ejemplo, considera el siguiente código:

```javascript
console.log(miVariable); // Salida: undefined
var miVariable = 10;
```

Aunque parece que la variable "miVariable" se utiliza antes de ser declarada, el hoisting mueve la declaración de la variable hacia arriba, lo que significa que es equivalente a:

```javascript
var miVariable;
console.log(miVariable); // Salida: undefined
miVariable = 10;
```

Es por eso que la salida es "undefined" en lugar de un error.

El hoisting también se aplica a las declaraciones de funciones, lo que permite utilizar una función antes de su declaración en el código.

```javascript
saludar(); // Salida: "Hola, Mundo"

function saludar() {
  console.log("Hola, Mundo");
}
```

Aquí, la función "saludar()" se utiliza antes de ser declarada, pero el hoisting mueve la declaración de la función hacia arriba, lo que permite que se ejecute sin errores.

2. Scope (Ámbito):
El scope en JavaScript se refiere a la accesibilidad y visibilidad de las variables y funciones en diferentes partes del código. Determina en qué partes del programa una variable o función es accesible o no.

En JavaScript, existen dos tipos principales de scope:

- Global Scope (Ámbito global): Las variables y funciones declaradas fuera de cualquier función tienen un ámbito global y son accesibles desde cualquier parte del código, tanto dentro como fuera de las funciones.

```javascript
var miVariable = 10;

function miFuncion() {
  console.log(miVariable); // Acceso a la variable global
}

miFuncion(); // Salida: 10
console.log(miVariable); // Salida: 10
```

En este ejemplo, la variable "miVariable" se declara fuera de la función y, por lo tanto, tiene un ámbito global. Puede ser accedida tanto dentro de la función "miFuncion()" como fuera de ella.

- Local Scope (Ámbito local): Las variables y funciones declaradas dentro de una función tienen un ámbito local y solo son accesibles dentro de esa función y cualquier función anidada dentro de ella.

```javascript
function miFuncion() {
  var miVariable = 10;
  console.log(miVariable); // Acceso a la variable local
}

miFuncion(); // Salida: 10
console.log(miVariable); // Error: miVariable is not defined
```

En este ejemplo, la variable "miVariable" se declara dentro de la función "miFuncion()", lo que la convierte en una variable local. Solo es accesible dentro de esa función y no puede ser accedida fuera de ella.

Además del ámbito global y local, JavaScript también tiene el concepto de ámbito de bloque a partir de ECMAScript 6 (ES6). El ámbito de bloque se refiere al ámbito limitado por las llaves de un bloque de código, como una sentencia "if" o un bucle "for". Las variables declaradas con "let" y "const" tienen un ámbito de bloque, lo que significa que solo son accesibles dentro del bloque en el que se declaran.

```javascript
if (true) {
  let x = 10;
  console.log(x); // Acceso a la variable de ámbito de bloque
}

console.log(x); // Error: x is not defined
```

En este ejemplo, la variable "x" se declara con "let" dentro del bloque "if", lo que la convierte en una variable de ámbito de bloque. Solo es accesible dentro de ese bloque y no puede ser accedida fuera de él.

El hoisting y el scope son dos conceptos importantes para comprender cómo JavaScript maneja las variables y funciones en diferentes partes del programa. El hoisting permite utilizar variables y funciones antes de ser declaradas explícitamente, mientras que el scope determina la accesibilidad y visibilidad de las variables y funciones en diferentes partes del código.