# Funciones

## Definición

```python
def saludar(nombre):
    print(f"Hola {nombre}")
```

## Return

```python
def sumar(a, b):
    return a + b
```

## Argumentos variables

```python
def sumar_todo(*args):
    return sum(args)
```

## Parámetros nombrados

```python
def datos(**kwargs):
    print(kwargs)
```

> [!tip] ¿Qué son las Funciones en Python?
> 
> 
> En esencia, una función es un bloque de código organizado y reutilizable que realiza una tarea específica. Las funciones te permiten dividir programas grandes en partes más pequeñas y manejables, evitando la repetición de código y haciendo que tu programa sea más legible, organizado y fácil de mantener.
> 
> **Beneficios de Usar Funciones:**
> 
> - **Modularidad:** Dividen el código en bloques lógicos, lo que facilita la comprensión y el mantenimiento.
> - **Reusabilidad:** Puedes llamar a una función múltiples veces desde diferentes partes de tu programa sin tener que reescribir el mismo código.
> - **Organización:** Hacen que el código sea más estructurado y fácil de seguir.
> - **Abstracción:** Ocultan los detalles de implementación de una tarea, permitiéndote enfocarte en qué hace la función en lugar de cómo lo hace.
> 
> **Estructura Básica de una Función:**
> 
> Como ya has visto, la estructura básica para definir una función en Python es la siguiente:
> 
> ```python
> def nombre_de_la_funcion(parametros):
>   """Documentación de la función (docstring)"""  # Bloque de código de la función  # ...  return valor_de_retorno (opcional)
> ```
> 
> - **def:** Palabra clave que indica el inicio de la definición de una función.
> - **nombre_de_la_funcion:** Un identificador único para tu función. Sigue las mismas reglas de nombrado que las variables (letras, números, guion bajo, no empezar con número).
> - **(parametros):** Son valores que la función puede recibir como entrada. Pueden ser cero o más parámetros, separados por comas. Estos son opcionales.
> - **:** Dos puntos que marcan el final de la línea de definición de la función.
> - **“““Documentación de la función (docstring)”““:** Una cadena de texto multilínea (opcional pero muy recomendada) que describe qué hace la función, sus parámetros y qué devuelve. Se accede a ella usando `help(nombre_de_la_funcion)` o `nombre_de_la_funcion.__doc__`.
> - **# Bloque de código de la función:** El conjunto de instrucciones que se ejecutan cuando se llama a la función. Debe estar indentado.
> - **return valor_de_retorno (opcional):** La palabra clave `return` se utiliza para enviar un valor de vuelta al lugar donde se llamó la función. Si no se especifica `return` o se usa `return` sin ningún valor, la función devuelve `None` por defecto.

> [!success] Definición de función (def)
- Utilizas la palabra clave def para indicar que estás a punto de definir una función.
> 
> - Luego viene el `nombre_de_la_funcion` (en tu caso, `saludar`). Es importante elegir nombres descriptivos que indiquen la tarea de la función.
> - Después del nombre, entre paréntesis `()`, se definen los **parámetros** que la función puede recibir como entrada. En `saludar(nombre)`, `nombre` es un parámetro. Una función puede tener cero o más parámetros.
> - Finalmente, los dos puntos `:` marcan el inicio del bloque de código que pertenece a la función. Este bloque debe estar **indentado**.
> 
> ```python
> def saludar(nombre):
>   """Esta función saluda a la persona con el nombre proporcionado."""  print(f"Hola {nombre}")
> ```
> 

> [!success] Sentencia (return)
- La palabra clave return se utiliza dentro de una función para enviar un valor de vuelta al lugar donde se llamó la función.
> 
> - En tu ejemplo `sumar(a, b)`, la función toma dos parámetros (`a` y `b`), realiza la suma (`a + b`), y luego **devuelve** el resultado de esa suma.
> - Una función puede tener múltiples sentencias `return`, pero la ejecución de la función termina tan pronto como se encuentra una de ellas.
> - Si una función no tiene una sentencia `return` explícita, o tiene un `return` sin ningún valor, devuelve automáticamente `None`.
> 
> ```python
> def sumar(a, b):
>   """Esta función devuelve la suma de dos números."""  return a + b
> resultado = sumar(5, 3)  # La función devuelve 8, que se asigna a 'resultado'print(resultado)  # Imprime 8
> ```
> 

> [!success] Argumentos Variables (*args)
- El parámetro especial *args en la definición de una función permite que la función acepte un número variable de argumentos posicionales.
- Dentro de la función, args se trata como una tupla que contiene todos los argumentos que se pasaron al llamar a la función.
- Es muy útil cuando no sabes de antemano cuántos argumentos necesitará tu función.
> 
> 
> ```python
> def sumar_todo(*args):
>   """Esta función devuelve la suma de todos los argumentos posicionales."""  print(f"Los argumentos recibidos son: {args}")  # Para ver la tupla  return sum(args)
> total1 = sumar_todo(1, 2, 3)      # args será (1, 2, 3)total2 = sumar_todo(10, 20, 30, 40) # args será (10, 20, 30, 40)print(f"Total 1: {total1}")  # Imprime 6print(f"Total 2: {total2}")  # Imprime 100
> ```
> 

> [!success] Párametros Nombrados (kwargs)
- El parámetro especial **kwargs permite que una función acepte un número variable de argumentos de palabra clave** (o argumentos nombrados).
> 
> - Dentro de la función, `kwargs` se trata como un **diccionario** donde las claves son los nombres de los argumentos pasados y los valores son sus respectivos valores.
> - Es útil para pasar una colección de datos a una función donde el nombre de cada dato es importante.
> 
> ```python
> def datos(**kwargs):
>   """Esta función imprime los argumentos de palabra clave recibidos."""  print(f"Los argumentos nombrados recibidos son: {kwargs}")
>   for clave, valor in kwargs.items():
>       print(f"{clave}: {valor}")
> datos(nombre="Ana", edad=30, ciudad="Santiago")
> # kwargs será {'nombre': 'Ana', 'edad': 30, 'ciudad': 'Santiago'}persona = {"nombre": "Carlos", "profesion": "Programador"}
> datos(**persona)  # Desempaquetando un diccionario como kwargs# kwargs será {'nombre': 'Carlos', 'profesion': 'Programador'}
> ```
> 
> ooooooo
> 

> [!tip] Llamando a una Función:
Para ejecutar el código dentro de una función, necesitas “llamarla” por su nombre, seguido de paréntesis (). Si la función espera argumentos, debes proporcionarlos dentro de los paréntesis.
> 
> 
> ```python
> saludar("Ana")  # Llama a la función saludar con el argumento "Ana"resultado_suma = sumar(5, 3)  # Llama a la función sumar con los argumentos 5 y 3, y guarda el resultadoprint(resultado_suma)
> total = sumar_todo(1, 2, 3, 4, 5)  # Llama a sumar_todo con varios argumentosprint(total)
> mis_datos = {"nombre": "Carlos", "edad": 25, "ciudad": "Santiago"}
> datos(nombre="Carlos", edad=25, ciudad="Santiago") # Llama a datos con argumentos nombradosdatos(**mis_datos) # Desempaqueta el diccionario mis_datos como argumentos nombrados
> ```
> 

> [!tip] Tipos de Argumentos:
> 
> 
> Python ofrece flexibilidad en cómo se pasan los argumentos a las funciones:
> 
> 1. **Argumentos Posicionales:** Son los argumentos más comunes. Se pasan a la función en el mismo orden en que se definieron los parámetros. En tu ejemplo de `sumar(a, b)`, `a` recibe el primer valor pasado y `b` el segundo.
> 2. **Argumentos Nombrados (o de Palabra Clave):** Al llamar a una función, puedes especificar los argumentos usando el nombre del parámetro seguido de un signo igual (`=`). Esto permite pasar los argumentos en cualquier orden y hace que la llamada a la función sea más explícita.
> ```python
> def restar(x, y):
> return x - y

```
>
```

> resultado1 = restar(10, 5) # Argumentos posicionales (x=10, y=5)
resultado2 = restar(y=5, x=10) # Argumentos nombrados (x=10, y=5)
print(f”Resultado 1: {resultado1}, Resultado 2: {resultado2}“)
> 
> 
> ```
> 
> 3. **Valores por Defecto para Parámetros:** Puedes definir valores por defecto para los parámetros en la definición de la función. Si no se proporciona un valor para ese parámetro al llamar a la función, se utilizará el valor por defecto.
> ```python
> def potencia(base, exponente=2):
>   return base ** exponente
> 
> resultado3 = potencia(5)  # El exponente toma el valor por defecto de 2 (5^2 = 25)
> resultado4 = potencia(5, 3)  # Se proporciona un valor para el exponente (5^3 = 125)
> print(f"Resultado 3: {resultado3}, Resultado 4: {resultado4}")
> ```
> 
> 1. **Argumentos Variables (args):** Como ya viste, `args` permite a una función aceptar un número variable de argumentos posicionales. Estos argumentos se recogen en una tupla dentro de la función. Es útil cuando no sabes de antemano cuántos argumentos se pasarán.
> 2. **Parámetros Nombrados (**kwargs):** También como viste, `*kwargs` permite a una función aceptar un número variable de argumentos nombrados (clave-valor). Estos argumentos se recogen en un diccionario dentro de la función, donde las claves son los nombres de los argumentos y los valores son sus respectivos valores.
> 
> ```python
> def mostrar_info(**info):
>   for clave, valor in info.items():
>       print(f"{clave}: {valor}")
> mostrar_info(nombre="Elena", edad=32, profesion="Ingeniera")
> ```
> 

> [!tip] El return en Detalle:
> 
> - La sentencia `return` finaliza la ejecución de la función y puede devolver un valor al código que la llamó.
> - Una función puede tener múltiples sentencias `return`, pero solo se ejecutará la primera que se alcance.
> - Si no hay una sentencia `return` explícita, la función devuelve implícitamente `None`.
> - Puedes devolver múltiples valores desde una función separándolos por comas. Estos valores se devolverán como una tupla.
> 
> ```python
> def obtener_nombre_edad():
>   nombre = "Pedro"  edad = 40  return nombre, edad
> n, e = obtener_nombre_edad()
> print(f"Nombre: {n}, Edad: {e}")
> datos_personales = obtener_nombre_edad()
> print(f"Datos personales (tupla): {datos_personales}")
> ```
> 

> [!tip] Ámbito de las Variables (Scope):
Es importante entender el concepto de ámbito de las variables en relación con las funciones:
- Variables Locales: Las variables que se definen dentro de una función solo son accesibles dentro de esa función. Se dice que tienen un ámbito local.
- Variables Globales: Las variables que se definen fuera de cualquier función tienen un ámbito global y pueden ser accedidas desde cualquier parte del programa (aunque modificarlas dentro de una función requiere la palabra clave global).
> 
> 
> ```python
> variable_global = 10def mi_funcion_local():
>   variable_local = 5  print(f"Variable local dentro de la función: {variable_local}")
>   print(f"Variable global dentro de la función: {variable_global}")
> mi_funcion_local()
> # print(variable_local)  # Esto generaría un error porque variable_local no está definida fuera de la funcióndef modificar_global():
>   global variable_global
>   variable_global = 20  print(f"Variable global modificada dentro de la función: {variable_global}")
> modificar_global()
> print(f"Variable global fuera de la función después de la modificación: {variable_global}")
> ```
> 

> [!tip] Funciones como Objetos de Primera Clase:
> 
> 
> En Python, las funciones son objetos de primera clase, lo que significa que pueden:
> 
> - Ser asignadas a variables.
> - Ser pasadas como argumentos a otras funciones.
> - Ser devueltas por otras funciones.
> 
> ```python
> def operacion(x, y, func):
>   return func(x, y)
> def multiplicar(a, b):
>   return a * b
> resultado_operacion = operacion(4, 3, multiplicar)
> print(f"Resultado de la operación: {resultado_operacion}")
> mi_funcion = saludar
> mi_funcion("Sofía")
> ```
> 

> [!tip] Funciones Anónimas (Lambda):
> 
> 
> Python también permite crear funciones pequeñas y anónimas (sin un nombre formal) utilizando la palabra clave `lambda`. Las funciones lambda suelen utilizarse para operaciones simples y concisas.
> 
> ```python
> doble = lambda x: x * 2print(doble(7))
> sumar_lambda = lambda a, b: a + b
> print(sumar_lambda(2, 8))
> ```
> 

> 
>