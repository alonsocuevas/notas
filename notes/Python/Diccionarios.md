# Diccionarios

# 📘 Diccionarios

```python
persona = {"nombre": "Juan", "edad": 30}
persona["nombre"]
persona.get("edad")
```

## Iterar

```python
for k, v in persona.items():
    print(k, v)
```

> [!faq] ¿Qué son los Diccionarios en Python?
> 
> 
> Los diccionarios (`dict`) son estructuras de datos que almacenan pares de **clave-valor**. A diferencia de las listas y las tuplas, que están indexadas por una secuencia de números, los diccionarios están indexados por **claves**, que pueden ser de casi cualquier tipo inmutable (cadenas, números, tuplas).
> 
> **Características Clave de los Diccionarios:**
> 
> - **No Ordenados (a partir de Python 3.7):** A diferencia de las versiones anteriores de Python, a partir de Python 3.7, los diccionarios **mantienen el orden de inserción** de los elementos. Sin embargo, conceptualmente, se accede a los valores por sus claves, no por su posición.
> - **Mutables:** Puedes agregar, eliminar y modificar pares clave-valor después de crear un diccionario.
> - **Claves Únicas:** Cada clave dentro de un diccionario debe ser única. Si intentas asignar un valor a una clave que ya existe, el valor anterior será reemplazado.
> - **Eficiencia en la Búsqueda:** La búsqueda de valores basada en claves es muy eficiente en los diccionarios, incluso cuando contienen una gran cantidad de elementos.

> [!success] Más sobre la Creación de Diccionarios:
> 
> - **Usando llaves** `{}`: Ya conoces esta forma.
> 
> ```python
> mi_diccionario = {"nombre": "Carlos", "profesion": "Ingeniero", "edad": 35}
> ```
> 
> - **Usando la función** `dict()`:
>     - A partir de pares clave-valor:
>     
>     ```python
>     otro_diccionario = dict(nombre="Elena", ciudad="Valparaíso")
>     ```
>     
>     - A partir de una lista de tuplas (donde cada tupla es un par clave-valor):
>     
>     ```python
>     pares = [("color", "rojo"), ("tamaño", "grande")]
>     diccionario_de_pares = dict(pares)
>     print(diccionario_de_pares)  # Output: {'color': 'rojo', 'tamaño': 'grande'}
>     ```
>     
> - A partir de dos listas (claves y valores):
> 
> ```python
> claves = ["a", "b", "c"]
> valores = [1, 2, 3]
> diccionario_de_listas = dict(zip(claves, valores))
> print(diccionario_de_listas)  # Output: {'a': 1, 'b': 2, 'c': 3}
> ```
> 
> - **Diccionarios por comprensión (Dictionary Comprehensions):** Una forma concisa de crear diccionarios utilizando una sintaxis similar a las listas por comprensión.
> 
> ```python
> cuadrados = {x: x**2 for x in range(5)}  # Crea un diccionario con claves 0-4 y sus cuadradosprint(cuadrados)  # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}nombres = ["Ana", "Benito", "Carla"]
> longitudes = {nombre: len(nombre) for nombre in nombres}
> print(longitudes) # Output: {'Ana': 3, 'Benito': 6, 'Carla': 5}
> ```
> 

> [!success] Acceso a los Valores:
- Usando corchetes [] (ya lo conoces): Si la clave existe, devuelve el valor asociado. Si la clave no existe, genera un error KeyError.
> 
> 
> ```python
> persona = {"nombre": "Juan", "edad": 30}
> nombre = persona["nombre"]
> print(nombre)  # Output: Juan# edad = persona["profesion"]  # Esto generaría un KeyError si "profesion" no existe
> ```
> 
> - **Usando el método** `.get(clave, valor_por_defecto)` **(ya lo conoces):** Intenta encontrar el valor asociado a la clave. Si la clave existe, devuelve el valor. Si la clave no existe, devuelve el `valor_por_defecto` especificado (si se proporciona). Si no se proporciona un valor por defecto, devuelve `None`.
> 
> ```python
> edad = persona.get("edad")
> profesion = persona.get("profesion")
> ciudad = persona.get("ciudad", "Desconocida")
> print(f"Edad: {edad}, Profesión: {profesion}, Ciudad: {ciudad}")
> # Output: Edad: 30, Profesión: None, Ciudad: Desconocida
> ```
> 

> [!success] Modificación de Diccionarios:
> 
> - **Agregar un nuevo par clave-valor:** Simplemente asigna un valor a una nueva clave.
> 
> ```python
> persona["profesion"] = "Ingeniero"print(persona)  # Output: {'nombre': 'Juan', 'edad': 30, 'profesion': 'Ingeniero'}
> ```
> 
> - **Modificar un valor existente:** Asigna un nuevo valor a una clave existente.
> 
> ```
> persona["edad"] = 31
> print(persona)  # Output: {'nombre': 'Juan', 'edad': 31, 'profesion': 'Ingeniero'}
> ```
> 
> - **Eliminar un par clave-valor:**
> - `del diccionario[clave]`: Elimina el par clave-valor asociado a la clave especificada. Genera un `KeyError` si la clave no existe.
> 
> ```python
> del persona["profesion"]
> print(persona)  # Output: {'nombre': 'Juan', 'edad': 31}
> ```
> 
> - `diccionario.pop(clave, valor_por_defecto)`: Elimina y devuelve el valor asociado a la clave. Si la clave no existe, devuelve el `valor_por_defecto` (si se proporciona) o genera un `KeyError`.
> 
> ```python
> edad_eliminada = persona.pop("edad")
> print(f"Edad eliminada: {edad_eliminada}, Diccionario restante: {persona}")
> # Output: Edad eliminada: 31, Diccionario restante: {'nombre': 'Juan'}
> ```
> 
> - `diccionario.popitem()`: Elimina y devuelve el último par clave-valor insertado (en versiones de Python >= 3.7). En versiones anteriores, elimina un par arbitrario.
> 
> ```python
> datos = {"a": 1, "b": 2, "c": 3}
> ultimo_item = datos.popitem()
> print(f"Último item eliminado: {ultimo_item}, Diccionario restante: {datos}")
> # Output (el orden puede variar en Python < 3.7): Último item eliminado: ('c', 3), Diccionario restante: {'a': 1, 'b': 2}
> ```
> 
> - `diccionario.clear()`: Elimina todos los pares clave-valor del diccionario, dejándolo vacío.
> 
> ```python
> datos.clear()
> print(datos)  # Output: {}
> ```
> 

> [!success] Iteración sobre Diccionarios (ya conoces .items()):
> 
> - `.keys()`: Devuelve un objeto iterable (una “vista”) que contiene todas las claves del diccionario.
> 
> ```python
> persona = {"nombre": "Juan", "edad": 30, "profesion": "Ingeniero"}
> for clave in persona.keys():
>   print(clave)
> # Output: nombre#         edad#         profesion
> ```
> 
> - `.values()`: Devuelve un objeto iterable (una “vista”) que contiene todos los valores del diccionario.
> 
> ```python
> for valor in persona.values():
>   print(valor)
> # Output: Juan#         30#         Ingeniero
> ```
> 
> - `.items()` **(ya lo conoces):** Devuelve un objeto iterable (una “vista”) que contiene todos los pares clave-valor del diccionario como tuplas `(clave, valor)`. Es la forma más común de iterar sobre los elementos de un diccionario.
> 
> ```python
> for clave, valor in persona.items():
>   print(f"Clave: {clave}, Valor: {valor}")
> # Output: Clave: nombre, Valor: Juan#         Clave: edad, Valor: 30#         Clave: profesion, Valor: Ingeniero
> ```
> 

> [!success] Otros Métodos Útiles de los Diccionarios:
- diccionario.update(otro_diccionario): Actualiza el diccionario con los pares clave-valor de otro diccionario. Si una clave existe en ambos diccionarios, el valor del segundo diccionario sobrescribe el valor del primero.
> 
> 
> ```python
> datos1 = {"a": 1, "b": 2}
> datos2 = {"b": 3, "c": 4}
> datos1.update(datos2)
> print(datos1)  # Output: {'a': 1, 'b': 3, 'c': 4}
> ```
> 
> - `dict.fromkeys(secuencia, valor_por_defecto=None)`: Crea un nuevo diccionario con las claves de la secuencia proporcionada y todos los valores establecidos en `valor_por_defecto`.
> 
> ```python
> claves = ["nombre", "edad", "ciudad"]
> nuevo_diccionario = dict.fromkeys(claves)
> print(nuevo_diccionario)  # Output: {'nombre': None, 'edad': None, 'ciudad': None}valores_iniciales = dict.fromkeys(claves, "desconocido")
> print(valores_iniciales)  # Output: {'nombre': 'desconocido', 'edad': 'desconocido', 'ciudad': 'desconocido'}
> ```
> 

> [!example] Cuándo usar Diccionarios:
> 
> - Para representar datos con una estructura clara de clave-valor (como registros, configuraciones, etc.).
> - Cuando necesitas buscar información rápidamente basándote en una clave específica.
> -