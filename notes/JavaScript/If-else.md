# if else

La declaración `if` te permite ejecutar un bloque de código solo si una condición específica es verdadera. Es como tomar una decisión. Por ejemplo: 

"**Si** está lloviendo, **entonces** tomo un paraguas.

También existe **`else`** (para ejecutar código cuando la condición es falsa) y **`else if`** (para encadenar múltiples condiciones).

**Empecemos con un ejemplo práctico.**

```jsx
// Imagina que queremos determinar si una persona es mayor de edad.
// Puedes cambiar este valor para probar diferentes resultados.
let edad = 25; 

console.log("La edad es: " + edad);

// La estructura 'if' evalúa si la condición dentro de los paréntesis es verdadera.
if (edad >= 18) {
// Este bloque de código se ejecuta si la edad es 18 o más.
console.log("Eres mayor de edad.");
}
```

- **`if (edad >= 18)`**: Esta es la **condición**. El programa comprueba si el valor de la variable `edad` es mayor o igual a 18.
- **`{ ... }`**: Este es el **bloque de código**. Si la condición es verdadera (`true`), el código dentro de las llaves se ejecutará. Si es falsa (`false`), el programa simplemente lo ignorará y continuará.

```jsx
// Ahora, ¿qué pasa si queremos manejar también el caso contrario? Usamos 'else'.
let temperatura = 15; // en grados Celsius

console.log("\nLa temperatura es: " + temperatura + "°C");
if (temperatura > 25) {
console.log("Hace calor. ¡Ponte ropa ligera!");
} else {
// Este bloque se ejecuta si la condición del 'if' es falsa.
console.log("No hace calor. Quizás necesites un suéter.");
}
```

- Aquí añadimos la cláusula **`else`**. Funciona como un "si no...".
- Si la condición `temperatura > 25` es verdadera, se ejecuta el primer bloque.
- Si es falsa, se ejecuta el bloque de código dentro del `else`. Un `if/else` siempre garantiza que uno de los dos bloques se ejecute.

```jsx
// Finalmente, podemos encadenar múltiples condiciones con 'else if'.
// Volvamos al ejemplo de la edad.
console.log("\nEvaluando la edad con if, else if, y else:");

if (edad < 13) {
console.log("Eres un niño.");
} else if (edad >= 13 && edad < 18) {
// '&&' significa 'Y'. Ambas condiciones deben ser verdaderas.
console.log("Eres un adolescente.");
} else if (edad >= 18 && edad < 65) {
console.log("Eres un adulto.");
} else {
// Si ninguna de las condiciones anteriores fue verdadera, se ejecuta esta.
console.log("Eres un adulto mayor.");
}

console.log("\n¡Intenta cambiar los valores de 'edad' y 'temperatura' y observa los resultados!");
```

- Esta es la forma más completa. Te permite evaluar múltiples condiciones en cadena.
- **`else if`**: Añade otra condición para comprobar. El programa las evalúa en orden.
- **Importante**: Tan pronto como una condición es verdadera, su bloque de código se ejecuta y el resto de la cadena (`else if`, `else`) se ignora por completo.
- El **`else`** final es opcional y actúa como un "comodín" que se ejecuta si ninguna de las condiciones anteriores fue verdadera.