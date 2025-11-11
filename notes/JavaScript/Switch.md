# Switch

La declaración 'switch' es útil cuando tienes una única variable
y quieres ejecutar diferentes bloques de código basados en su valor exacto.
Es una alternativa más limpia a un 'if/else if/else' largo.

Piensa en ello como un menú: dependiendo de la opción que elijas (el valor de la variable), obtienes un resultado diferente.

Ejemplo: 

```jsx
// Determinar el día de la semana basado en un número.
let diaDeLaSemana = 3; // Cambia este número del 1 al 7

console.log("El número del día es: " + diaDeLaSemana);

switch (diaDeLaSemana) {  
	// El 'switch' evalúa la expresión 'diaDeLaSemana'.    
	case 1: // Compara el valor de 'diaDeLaSemana' con 1    
		console.log("Hoy es Lunes.");    
		break; 
		// 'break' es MUY importante. Evita que el código siga al siguiente caso.
  case 2:    
	  console.log("Hoy es Martes.");    
	  break;
  case 3:    
	  console.log("Hoy es Miércoles.");    
	  break;
  case 4:    
	  console.log("Hoy es Jueves.");    
	  break;
  case 5:    
	  console.log("Hoy es Viernes.");    
	  break;
  case 6:    
	  console.log("Hoy es Sábado.");    
	  break;     
	case 7:    
		console.log("Hoy es Domingo.");    
		break;
  default:    
  // El bloque 'default' se ejecuta si ninguno de los 'case' anteriores coincide.    
  // Es similar al 'else' final en una cadena if/else if.    
  console.log("Número inválido. Por favor, introduce un número del 1 al 7.");    
  break;
}
console.log("\nPrueba a cambiar el valor de 'diaDeLaSemana' y ejecuta el script de nuevo.");
console.log("Un buen experimento: ¿Qué pasa si quitas un 'break'?");

```

Vamos a desglosarlo:

```jsx
switch (diaDeLaSemana) {
// ... casos ...
}
```

- **`switch (diaDeLaSemana)`**: Le decimos a JavaScript que vamos a inspeccionar el valor de la variable `diaDeLaSemana`.

```jsx
case 1:
  console.log("Hoy es Lunes.");
  break;
```

- **`case 1:`**: Esto es como preguntar `if (diaDeLaSemana === 1)`. Compara si el valor de la variable es **exactamente** 1.
- **`console.log(...)`**: Si la comparación es verdadera, se ejecuta esta línea.
- **`break;`**: ¡Esta es la parte crucial! Le dice a JavaScript: "Ok, encontramos una coincidencia y ejecutamos el código. El trabajo aquí ha terminado, sal del bloque `switch` por completo".

```jsx
default:
  console.log("Número inválido...");
  break;
```

- **`default:`**: Si el valor de `diaDeLaSemana` no coincide con ningún `case` (por ejemplo, si le pones el valor `8`), el código dentro del bloque `default` se ejecutará. Es la opción "por defecto".

### El Experimento del `break`

En el código te dejé una pregunta: **"¿Qué pasa si quitas un `break`?"**.

Te invito a que lo pruebes. Borra la línea `break;` del `case 3;`, guarda el archivo y ejecútalo de nuevo con `node script.js` (asegúrate de que `diaDeLaSemana` siga siendo `3`).

Verás que el programa imprime "Hoy es Miércoles." y también "Hoy es Jueves.". Esto ocurre porque, sin el `break`, la ejecución "cae" (fall-through) al siguiente `case` y ejecuta su código también, hasta que encuentra un `break` o se acaba el `switch`.