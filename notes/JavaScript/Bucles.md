# Bucles

Los bucles son para repetir una acción varias veces sin tener que escribir el mismo código una y otra vez.
Los dos más comunes son '**for'** y '**while**'.

**Bucle** **for**

Es ideal cuando sabes de antemano cuántas veces quieres que se repita el código.

```jsx
console.log("--- Iniciando bucle 'for' ---");
// La estructura del 'for' tiene 3 partes dentro de los paréntesis, separadas por ';':
// 1. Inicialización: `let i = 0;` (se ejecuta una sola vez, al empezar)
// 2. Condición: `i < 5;` (se revisa antes de cada repetición. Si es false, el bucle termina)
// 3. Incremento: `i++` (se ejecuta después de cada repetición)
for (let i = 0; i < 5; i++) {  
	console.log("El número es: " + i);
}
console.log("--- Bucle 'for' terminado ---");
```

**Bucle while**

Es perfecto cuando no sabes cuántas veces se repetirá el código,
pero sí sabes la condición que debe cumplirse para que se siga ejecutando.

```jsx
console.log("\n--- Iniciando bucle 'while' ---");
let contador = 5;

while (contador > 0) {  
	// El bucle 'while' solo tiene una condición.  
	// Mientras la condición (contador > 0) sea verdadera, el código de adentro se ejecuta.  
	console.log("Tiempo restante: " + contador);    

	// ¡CUIDADO! Es crucial que dentro del 'while' algo cambie que eventualmente  
	// haga la condición falsa. Si no, crearás un bucle infinito.  
	contador--; 
	// Decrementamos el contador. Es lo mismo que `contador = contador - 1;`
}
console.log("¡Despegue! 🚀");
console.log("--- Bucle 'while' terminado ---");

console.log("\nExperimenta cambiando las condiciones y los incrementos/decrementos en ambos bucles.");
```

**Analicémoslo.**

### El Bucle `for`

El bucle `for` es como un robot al que le das 3 instrucciones muy precisas antes de empezar:

`for (let i = 0; i < 5; i++)`

1. **Inicialización (`let i = 0;`)**: "Empieza con un contador `i` en 0". Esto solo pasa una vez, al principio de todo.
2. **Condición (`i < 5;`)**: "Mientras el contador `i` sea menor que 5, sigue trabajando". Esto se comprueba *antes* de cada repetición.
3. **Incremento (`i++`)**: "Después de cada repetición, súmale 1 al contador `i`". `i++` es una forma corta de escribir `i = i + 1`.

El resultado es que el bloque de código se ejecuta para `i = 0`, `i = 1`, `i = 2`, `i = 3` y `i = 4`. Cuando `i` llega a 5, la condición `5 < 5` es falsa, y el bucle se detiene.

### El Bucle `while`

El bucle `while` es más directo. Es como un guardia que solo comprueba una cosa:

`while (contador > 0)`

- **Condición (`contador > 0`)**: "Mientras el `contador` sea mayor que 0, ejecuta el código de adentro".

La parte más importante y peligrosa del `while` es que **tú** eres responsable de asegurarte de que la condición en algún momento se vuelva falsa.

En el ejemplo, lo hacemos con `contador--`. En cada repetición, le restamos 1 al contador. Así, eventualmente llegará a 0, la condición `0 > 0` será falsa y el bucle terminará. Si olvidáramos la línea `contador--`, ¡el programa se quedaría atascado en un **bucle infinito**!

Dime que esto es de color blanco