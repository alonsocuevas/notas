# Operadores

### **Asignación (`=`)**

Este es el más simple. Se usa para *asignar* un valor a una variable.

```jsx
let edad = 25;// Le asignamos el valor 25 a la variable 'edad'
let pais = "Chile";// Le asignamos el texto "Chile" a la variable 'pais'
```

---

### **Aritméticos**

Son los que ya conoces de las matemáticas. Sirven para hacer cálculos.

- `+` (Suma)
- (Resta)
- (Multiplicación)
- `/` (División)
- `%` (Módulo o Resto): Te da el sobrante de una división. Por ejemplo, `10 % 3` es `1`, porque 10 dividido entre 3 es 3 y sobra 1.

---

### **Comparación**

Los usamos para comparar dos valores. El resultado siempre será un valor booleano: `true` (verdadero) o `false` (falso).

- `==` : ¿Son iguales en valor? (Ej: `5 == "5"` es `true`. No es estricto.)
- `===` : ¿Son estrictamente iguales en valor Y tipo? (Ej: `5 === "5"` es `false` porque uno es número y el otro es texto). **¡Usa siempre este por defecto!**
- `!=` : ¿Son diferentes en valor?
- `!==`: ¿Son estrictamente diferentes en valor o tipo?
- `>` : Mayor que
- `<` : Menor que
- `>=`: Mayor o igual que
- `<=`: Menor o igual que

---

### **Lógicos**

Nos permiten combinar comparaciones.

- `&&` (AND / Y): Devuelve `true` si **ambas** condiciones son verdaderas.
    - `edad > 18 && pais === "México"`
- `||` (OR / O): Devuelve `true` si **alguna** de las condiciones es verdadera.
    - `edad > 18 || pais === "Colombia"`
- `!` (NOT / No): Invierte el resultado. Si algo es `true`, lo convierte en `false` y viceversa.
    - `!(edad > 18)`

---

### **¡Vamos a la práctica!**

*¡Bienvenido a tu primera lección de JavaScript!*

*Este es un archivo para que practiques.*

*Puedes cambiar los valores y ver cómo afectan los resultados.*

```jsx
// VARIABLES DE EJEMPLO 
let numero1 = 10;
let numero2 = 4;
let nombre = "Juan";
let edad = 20;
```

```jsx
// --- 1. OPERADORES ARITMÉTICOS ---
console.log("--- Operadores Aritméticos ---");
let suma = numero1 + numero2; // 10 + 4
console.log("Suma:", suma); // Resultado: 14
let resta = numero1 - numero2; // 10 - 4
console.log("Resta:", resta); // Resultado: 6
let multiplicacion = numero1 * numero2; // 10 * 4
console.log("Multiplicación:", multiplicacion); // Resultado: 40
let division = numero1 / numero2; // 10 / 4
console.log("División:", division); // Resultado: 2.5
let modulo = numero1 % numero2; // El resto de 10 / 4
console.log("Módulo (resto):", modulo); // Resultado: 2
```

```jsx
// --- 2. OPERADORES DE COMPARACIÓN ---
console.log("\n--- Operadores de Comparación ---");

// ¿10 es mayor que 4?
let esMayor = numero1 > numero2;
console.log("¿numero1 > numero2?:", esMayor); 
// Resultado: true

// ¿numero1 es estrictamente igual a 10?
let esIgual = numero1 === 10; 
console.log("¿numero1 === 10?:", esIgual); 
// Resultado: true

// ¿numero2 no es estrictamente igual al texto "4"?
let esDiferente = numero2 !== "4"; 
console.log("¿numero2 !== \'4\':?", esDiferente); 
// Resultado: true (porque uno es número y el otro texto)
```

```jsx
// --- 3. OPERADORES LÓGICOS ---
console.log("\n--- Operadores Lógicos ---");

// Ejemplo 1: ¿Es Juan un adulto joven? (mayor de 18 y menor de 30)
let esAdultoJoven = edad > 18 && edad < 30;
console.log("¿Es un adulto joven?:", esAdultoJoven); 
// Resultado: true

// Ejemplo 2: ¿Se llama Juan o tiene más de 25 años?
let seLlamaJuanOMayorDe25 = nombre === "Juan" || edad > 25;
console.log("¿Se llama Juan o es mayor de 25?:", seLlamaJuanOMayorDe25); 
// Resultado: true (porque la primera condición es verdadera)
```

```jsx
// Ejemplo 3: Negación
let noEsMayorDeEdad = !(edad >= 18);
console.log("¿No es mayor de edad?:", noEsMayorDeEdad); 
// Resultado: false (porque sí es mayor de edad, y ! lo invierte)
```