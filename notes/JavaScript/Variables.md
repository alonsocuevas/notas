

### "let"
Usamos <span style="color:cyan">"let"</span> para declarar una variable cuando sabemos que su valor puede cambiar en el futuro.

```javascript
let mensaje; // Hemos creado una "caja" llamada "mensaje", pero está >vacía.
mensaje = "¡Hola, Mundo!"; // Ahora hemos guardado el texto "¡Hola, >Mundo!" dentro de la caja "mensaje".

let numero = 10; // También podemos crear la caja y guardar algo en >ella en un solo paso.
numero = 20; // El valor de "numero" ha cambiado a 20.
```
n JavaScript, para crear una de estas "cajas", usamos palabras 
clave especiales. 
Las más comunes son:
* <span style="color:cyan">let</span>
* <span style="color:cyan">const</span>

y una más antigua:
* <span style="color:cyan">var</span> 
### "const"
Usamos <span style="color:cyan">"const"</span> para declarar una constante. 
Su valor no puede cambiar una vez asignado.
Es una buena práctica usar <span style="color:cyan">"const"</span> siempre que sea posible para evitar errores.
```javascript
const pi = 3.1416; // Declaramos la constante "pi".
```
Si intentáramos cambiar su valor, como en la línea de abajo, 
JavaScript nos daría un error.
```javascript
// pi = 3.14; // Esta línea provocaría un error. ¡Intenta >descomentarla para ver qué pasa!
```
### "console.log();"
a consola es una herramienta que nos permite ver los resultados 
de nuestro código y para ello podemos ocupar <span style="color:cyan">"console.log();"</span>
```javascript
console.log(mensaje);
console.log(numero);
console.log(pi);
```
<span style="color:cyan">"console.log();"</span>Este comando es tu mejor amigo. 
Imprime el valor que le pongas entre paréntesis en la "consola" del 
navegador o del entorno de ejecución, permitiéndote ver qué está 
pasando en tu código.