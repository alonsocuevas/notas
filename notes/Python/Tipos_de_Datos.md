# Tipos_de_Datos

# 🧮 Tipos de Datos

- `int`: 10
- `float`: 3.14
- `str`: “hola”
- `bool`: True / False
- `list`: [1, 2, 3]
- `tuple`: (1, 2)
- `set`: {1, 2}
- `dict`: {“clave”: “valor”}

```python
print(type(3.14))  # <class 'float'>
```

> [!abstract] Tipos
En Python, los tipos de datos son una clasificación que especifica qué tipo de valor
puede contener una variable y qué tipo de operaciones se pueden realizar con ese valor.
Python es un lenguaje de tipado dinámico, lo que significa que no necesitas declarar
explícitamente el tipo de dato de una variable; el intérprete lo infiere en tiempo de
ejecución basándose en el valor que se le asigna.
> 

> [!success] Tipo Numericos
> 

> [!tip] int
(Entero): Representa números enteros, tanto positivos como negativos, sin parte decimal.
> 
> 
> ```python
> edad = 30negativo = -5cero = 0
> ```
> 

> [!tip] float
(Coma Flotante): Representa números reales con parte decimal.
> 
> 
> ```python
> pi = 3.14159temperatura = 25.5precio = 99.99
> ```
> 

> [!tip] complex
(Número Complejo): Representa números complejos en la forma a+bj, donde a es la parte real y b es la parte imaginaria, y j es la unidad imaginaria (raiz de -1)
> 
> 
> ```python
> complejo1 = 2 + 3jcomplejo2 = -1 - 2j
> ```
> 

> [!success] Tipo Boolean
> 

> [!tip] bool
(Booleano): Representa valores de verdad. Solo puede tener dos valores: True (verdadero) o False (falso). Son fundamentales para la lógica condicional.
> 
> 
> ```python
> es_mayor_de_edad = Trueesta_lloviendo = False
> ```
> 

> [!success] Tipo de Secuencia
> 

> [!tip] str
(Cadena de Caracteres): Representa secuencias de caracteres Unicode. Se utilizan para almacenar texto. Las cadenas son inmutables, lo que significa que una vez creadas, no se pueden modificar directamente.
> 
> 
> ```python
> nombre = "Juan Pérez"mensaje = 'Hola, mundo!'direccion = """Calle Falsa 123            Ciudad Inventada"""
> ```
> 

> [!tip] list
(Lista): Representa secuencias ordenadas de elementos. Los elementos pueden ser de diferentes tipos y las listas son mutables (se pueden modificar después de su creación). Se definen utilizando corchetes [] y los elementos se separan por comas.
> 
> 
> ```python
> numeros = [1, 2, 3, 4, 5]
> mezclada = [10, "Hola", 3.14, True]
> lista_vacia = []
> ```
> 

> [!tip] tuple
(Tupla): Representa secuencias ordenadas de elementos, similar a las listas, pero son inmutables. Se definen utilizando paréntesis () y los elementos se separan por comas.
> 
> 
> ```python
> coordenadas = (10, 20)
> colores = ("rojo", "verde", "azul")
> tupla_unitaria = (5,) # La coma es importante para indicar que es una tupla de un solo elemento
> ```
> 

> [!tip] range
(Rango): Representa una secuencia inmutable de números, utilizada comúnmente para iterar en bucles for. No almacena todos los números explícitamente, sino que genera los números a medida que se necesitan, lo que lo hace eficiente en términos de memoria.
> 
> 
> ```python
> serie = range(5)      # Genera la secuencia 0, 1, 2, 3, 4pares = range(0, 10, 2) # Genera la secuencia 0, 2, 4, 6, 8
> ```
> 

> [!tip] bytes
(Bytes): Representa secuencias inmutables de bytes (números enteros en el rango de 0 a 255). Se utiliza para trabajar con datos binarios.
> 
> 
> ```python
> datos_binarios = b'\x48\x65\x6c\x6c\x6f' # Representa "Hello" en bytes
> ```
> 

> [!tip] bytearray
(Arreglo de Bytes): Similar a bytes, pero es una secuencia mutable de bytes.
> 
> 
> ```python
> arreglo_bytes = bytearray(b'world')
> arreglo_bytes[0] = 87 # Cambia la 'w' por 'W' (código ASCII de 'W' es 87)
> ```
> 

> [!success] Tipos de Conjuntos
> 

> [!tip] set
Conjunto): Representa una colección no ordenada de elementos únicos. Los conjuntos son mutables y no admiten elementos duplicados. Se definen utilizando llaves {} o la función set().
> 
> 
> ```python
> frutas = {"manzana", "banana", "cereza"}
> numeros_unicos = {1, 2, 2, 3, 3, 3} # Se almacenará como {1, 2, 3}conjunto_vacio = set()
> ```
> 

> [!tip] frozenset
(Conjunto Congelado): Similar a set, pero es inmutable. Una vez creado, no se pueden añadir ni eliminar elementos.
> 
> 
> ```python
> conjunto_inmutable = frozenset({"a", "b", "c"})
> ```
> 

> [!success] Tipos de Mapeo
> 

> [!tip] dict
(Diccionario): Representa una colección no ordenada de pares clave-valor. Las claves deben ser únicas e inmutables (generalmente cadenas o números), mientras que los valores pueden ser de cualquier tipo. Los diccionarios son mutables y se definen utilizando llaves {} donde cada par clave-valor se separa por dos puntos :.
> 
> 
> ```python
> persona = {"nombre": "Ana", "edad": 25, "ciudad": "Santiago"}
> telefonos = {"casa": "123-4567", "movil": "987-6543"}
> diccionario_vacio = {}
> ```
> 

> [!success] Tipos Nulo
> 

> [!tip] NoneType
(None): Representa la ausencia de un valor o un valor nulo. Es un objeto único en Python.
> 
> 
> ```python
> variable_sin_valor = None
> ```
> 

> [!success] Como verificar el tipo de dato:
Puedes usar la función incorporada type() para determinar el tipo de dato de una variable:
> 
> 
> ```python
> x = 10print(type(x))   # Output: <class 'int'>y = "Hola"print(type(y))   # Output: <class 'str'>z = [1, 2, 3]
> print(type(z))   # Output: <class 'list'>
> ```
> 

> 
>