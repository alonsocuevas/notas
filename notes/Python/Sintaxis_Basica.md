# Sintaxis_Básica

# ✏️ Sintaxis básica

> [!success] Comentarios
```python
# Comentario de una sola línea
““”
Comentario
de
multilínea
““”
> 

> [!Indentación]
- Se usan 4 Espacios
- No se usan llaves {} , todo se estructura por niveles
> 
> 
> **Cómo funciona la indentación:**
> Cuando te encuentras con una de estas declaraciones que introducen un bloque, la siguiente línea (y todas las líneas que pertenecen a ese bloque) deben estar indentadas un nivel más que la línea de la declaración. El nivel de indentación estándar es de **cuatro espacios**.
> Cuando el bloque de código termina, la siguiente línea de código vuelve al mismo nivel de indentación que la declaración que *inició* el bloque.
> **Ejemplos para ilustrar:**
> 
> **Sentencia `if`:**
> 
> ```python
> condicion = Trueif condicion:
>   print("La condición es verdadera")  # Esta línea pertenece al bloque del 'if'  valor = 10                      # Esta línea también pertenece al bloque del 'if'print("Esto se ejecuta siempre")      # Esta línea está fuera del bloque del 'if'
> ```
> 
> En este ejemplo, las dos líneas indentadas después de `if condicion:` se ejecutan solo si `condicion` es `True`. La línea `print("Esto se ejecuta siempre")` no está indentada al mismo nivel, por lo que se ejecuta independientemente del valor de `condicion`.
> 
> ***Bucle for :***
> 
> ```python
> frutas = ["manzana", "banana", "cereza"]
> for fruta in frutas:
>   print("Me gusta la", fruta) # Esta línea pertenece al bloque del 'for'print("¡Terminamos de listar!") # Esta línea está fuera del bloque del 'for'
> ```
> 
> La linea `print("Me gusta la", fruta)` se ejecutará una vez por cada elemento en la lista `frutas` porque está indentada dentro del bloque del bucle `for`.
> 
> - ** Definición de una función***
> 
> ```python
> def saludar(nombre):
>   """Esta función saluda a la persona."""
>   mensaje = f"Hola, {nombre}!" # Esta línea pertenece al bloque de la función  print(mensaje) # Esta línea también pertenece al bloque de la funciónsaludar("Ana") # Esta línea está fuera de la definición de la función
> ```
> 
> Las líneas indentadas dentro de la definición de la función `saludar` se ejecutarán cuando se llame a la función.
> 
> **La importancia de la consistencia:**
> Python es extremadamente sensible a la indentación. **Mezclar espacios y tabulaciones para indentar el mismo bloque de código generará un error** `IndentationError`. Por eso, la convención de usar **cuatro espacios** es tan importante: garantiza la consistencia en todo tu código y en el código de otros desarrolladores.
> 
> La mayoría de los editores de código (incluido VS Code) están configurados para insertar automáticamente cuatro espacios cuando presionas la tecla Tab, lo que ayuda a mantener la consistencia. Es recomendable configurar tu editor para que esto sea automático.
> 
> **Errores comunes de indentación:**
> - `bash IndentationError: expected an indented block`:
> Este error ocurre cuando una declaración que requiere un bloque de código (como `iffor`, `def`) es seguida inmediatamente por una línea que no está indentada.
> 
> - `IndentationError: unexpected indent:`
> Este error ocurre cuando una línea está indentada pero no pertenece a ningún bloque de código activo.
> - `IndentationError: unindent does not match any outer indentation level:`
> Este error suele ocurrir cuando intentas desindentar un bloque de código pero la
> indentación no coincide con el nivel de indentación de un bloque padre.

> [!success] Variables
Una variable es como una etiqueta que le pones a un valor para poder referirte a él más tarde en tu código. Imagina que tienes una caja y le pones una etiqueta con un nombre; ese nombre te permite saber qué hay dentro de la caja sin tener que abrirla cada vez.
> 
> 
> Para crear una variable y asignarle un valor en Python, utilizas el operador de **asignación** (`=`). La sintaxis es simple:
> 
> ```python
> nombre_de_variable = valor
> ```
> 
> - `nombre_de_la_variable`: Es el nombre que eliges para tu etiqueta. Debe ser descriptivo de lo que representa el valor.
> - `=`: Es el operador de asignación. Indica que el valor de la derecha se va a almacenar en la variable de la izquierda.
> - `valor`: Es el dato que quieres almacenar en la variable. Puede ser un número, texto, una lista, etc.
> 
> **Ejemplos:**
> 
> ```python
> edad = 30nombre = "Juan Pérez"altura = 1.75es_estudiante = Falsecolores_favoritos = ["azul", "verde", "morado"]
> ```
> 
> En estos ejemplos:
> - `edad` ahora “etiqueta” el valor entero `30`.
> - `nombre` ahora “etiqueta” la cadena de texto `"Juan Pérez"`.
> - `altura` ahora “etiqueta” el número de punto flotante `1.75`.
> - `es_estudiante` ahora “etiqueta” el valor booleano `False`.
> - `colores_favoritos` ahora “etiqueta” la lista de cadenas `["azul", "verde", "morado"]`.
> 
> **Tipado Dinámico:**
> Una característica importante de Python es que tiene **tipado dinámico**. Esto significa que **no necesitas declarar explícitamente el tipo de dato de una variable** cuando la creas. El tipo de la variable se infiere automáticamente en función del valor que le asignas.
> 
> En lenguajes con tipado estático (como Java o C++), tendrías que especificar si una variable va a almacenar un entero, una cadena, etc., antes de asignarle un valor. Python lo hace automáticamente, lo que a menudo hace que el código sea más conciso.
> 
> ```python
> x = 10       # Python infiere que 'x' es un enteroprint(type(x))  # Imprime: <class 'int'>x = "Hola"   # Ahora 'x' se convierte en una cadena de textoprint(type(x))  # Imprime: <class 'str'>x = 3.14     # Ahora 'x' se convierte en un número de punto flotanteprint(type(x))  # Imprime: <class 'float'>
> ```
> 
> Como ves, la misma variable `x` puede referirse a diferentes tipos de datos a lo largo del programa.
> 
> **Nombres de Variables (Identificadores):**
> Al elegir nombres para tus variables, debes seguir ciertas reglas y convenciones:
> - **Deben comenzar con una letra (a-z, A-Z) o un guion bajo (`_`).** No pueden empezar con un número.
> - **Pueden contener letras, números y guiones bajos.** No se permiten espacios ni otros caracteres especiales.
> - **Son sensibles a mayúsculas y minúsculas (case-sensitive).** `miVariable`, `MiVariable` y `mivariable` son tres variables diferentes.
> - **No pueden ser palabras reservadas (keywords) de Python.** Estas son palabras que tienen un significado especial en el lenguaje (por ejemplo, `if`, `for`, `while`, `def`, `class`, `True`, `False`, `None`, etc.).
> **Convenciones de Nombres (Recomendaciones):**
> Aunque las siguientes no son reglas estrictas, seguir estas convenciones hace que tu código sea más legible y consistente:
> - **Usar nombres descriptivos y significativos.** Por ejemplo, `contador` en lugar de `c`, `nombre_usuario` en lugar de `nu`.
> - **Utilizar snake_case para nombres de variables.** Esto significa usar letras minúsculas y separar las palabras con guiones bajos (ejemplo: `nombre_de_archivo`, `cantidad_total`).
> - **Para constantes (valores que no deberían cambiar), usar letras mayúsculas separadas por guiones bajos.** (ejemplo: `PI = 3.14159`, `MAX_USUARIOS = 100`).
> 
> **Reasignación de Valores:**
> Puedes cambiar el valor almacenado en una variable en cualquier momento asignándole un nuevo valor utilizando el operador `=`.
> 
> ```python
> contador = 0print(contador)  # Imprime: 0contador = contador + 1print(contador)  # Imprime: 1contador = 5print(contador)  # Imprime: 5
> ```
>