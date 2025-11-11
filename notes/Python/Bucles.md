# Bucles

> [!tip] Bucle for
> 
> 
> ```python
> for i in range(5):
>   print(i)
> ```
> 

> [!tip] Bucle while
> 
> 
> ```python
> x = 0while x < 5:
>   print(x)
>   x += 1
> ```
> 

> [!tip] break y continue
> 
> 
> ```python
> for i in range(10):
>   if i == 3:
>       continue  if i == 7:
>       break  print(i)
> ```
> 

> [!abstract] Mas sobre el bucle for
El bucle for en Python es especialmente útil para iterar sobre secuencias (como listas, tuplas, cadenas de texto) u otros objetos iterables. La variable de iteración toma el valor de cada elemento en la secuencia durante cada iteración del bucle.
> 
> 
> **Iterando sobre diferentes tipos de datos:**
> 
> ```python
> # Iterando sobre una listafrutas = ["manzana", "banana", "cereza"]
> for fruta in frutas:
>   print(fruta)
> # Iterando sobre una cadena de textomensaje = "Hola"for letra in mensaje:
>   print(letra)
> # Iterando sobre una tuplacolores = ("rojo", "verde", "azul")
> for color in colores:
>   print(color)
> # Iterando con un índice usando enumeratefor indice, fruta in enumerate(frutas):
>   print(f"Índice: {indice}, Fruta: {fruta}")
> ```
> 
> La función `enumerate()` es muy útil cuando necesitas tanto el índice como el valor del elemento mientras iteras sobre una secuencia.
> 
> **La función range() en detalle:**
> 
> Ya has visto `range(5)`, que genera una secuencia de números desde 0 hasta 4. La función `range()` es más flexible:
> 
> - `range(stop)`: Genera números desde 0 hasta `stop` (sin incluir `stop`).
> - `range(start, stop)`: Genera números desde `start` hasta `stop` (sin incluir `stop`).
> - `range(start, stop, step)`: Genera números desde `start` hasta `stop` (sin incluir `stop`), con un incremento de `step`.
> 
> ```python
> # range con inicio y finfor i in range(2, 7):  # Genera 2, 3, 4, 5, 6  print(i)
> # range con inicio, fin y pasofor i in range(0, 10, 2):  # Genera 0, 2, 4, 6, 8  print(i)
> # range en reversafor i in range(5, 0, -1):  # Genera 5, 4, 3, 2, 1  print(i)
> ```
> 

> [!abstract] mas sobre el bucle while
El bucle while continúa ejecutando un bloque de código mientras la condición especificada sea True. Es crucial asegurarse de que la condición eventualmente se vuelva False para evitar un bucle infinito.
> 
> 
> **Ejemplos adicionales de while:**
> 
> ```python
> # Bucle while con una condición basada en la entrada del usuariorespuesta = ""while respuesta.lower() != "salir":
>   respuesta = input("Ingrese algo (o 'salir' para terminar): ")
>   print(f"Usted ingresó: {respuesta}")
> # Bucle while con un contador regresivocontador = 10while contador > 0:
>   print(f"Cuenta regresiva: {contador}")
>   contador -= 1print("¡Despegue!")
> ```
> 
> **La cláusula else en bucles:**
> 
> Tanto los bucles `for` como los bucles `while` pueden tener una cláusula `else`. El bloque de código dentro del `else` se ejecuta cuando el bucle termina de manera normal (es decir, no se interrumpió con una sentencia `break`).
> 
> ```python
> # Ejemplo de else en un bucle forfor i in range(5):
>   print(i)
> else:
>   print("El bucle for terminó normalmente.")
> # Ejemplo de else en un bucle whilecontador = 0while contador < 3:
>   print(contador)
>   contador += 1else:
>   print("El bucle while terminó normalmente.")
> # Ejemplo donde el break impide la ejecución del elsefor i in range(5):
>   if i == 3:
>       break  print(i)
> else:
>   print("Este else no se ejecutará porque se usó break.")
> ```
> 
> La cláusula `else` en bucles puede ser útil para ejecutar código que debe ocurrir solo si el bucle completó todas sus iteraciones sin ser interrumpido.
> 

> [!abstract] Consideraciones importantes sobre los bucles.
- Bucles Infinitos: Ten cuidado al usar bucles while para asegurarte de que la condición eventualmente se vuelva False. Un error común es escribir una condición que nunca se cumple, lo que resulta en un bucle que se ejecuta indefinidamente.
- Eficiencia: Para ciertas tareas, especialmente al trabajar con grandes conjuntos de datos, las comprensiones de listas (list comprehensions) o las expresiones generadoras pueden ser alternativas más concisas y a veces más eficientes que los bucles for tradicionales.
- Legibilidad: Elige el tipo de bucle que mejor se adapte a la tarea. Los bucles for son generalmente más adecuados para iterar sobre secuencias, mientras que los bucles while son útiles cuando necesitas repetir un bloque de código hasta que se cumpla una determinada condición.
> 

> [!abstract] Ejemplo de Comprensión de Lista (alternativa concisa a un bucle for):
> 
> 
> ```python
> numeros = [1, 2, 3, 4, 5]
> cuadrados = [numero ** 2 for numero in numeros]
> print(cuadrados)  # Output: [1, 4, 9, 16, 25]
> ```
>