# Listas_Tuplas_Sets

# 📚 Listas, Tuplas, Sets

## Listas

```python
lista = [1, 2, 3]
lista.append(4)
lista[0]  # Acceso
```

## Tuplas

```python
tupla = (1, 2)
x, y = tupla
```

## Sets

```python
conjunto = {1, 2, 3}
conjunto.add(4)
```

> [!example] Listas (list)
> 
> 
> Como bien sabes, las listas son **secuencias ordenadas** de elementos. Esto significa que el orden en que agregas los elementos se mantiene y puedes acceder a ellos mediante su índice (posición). Las listas son **mutables**, lo que significa que puedes modificarlas después de su creación (agregar, eliminar, cambiar elementos).
> 
> **Más sobre Listas:**
> 
> - **Creación:**
> 
> ```python
> lista_vacia = []
> otra_lista = ['manzana', 'banana', 'cereza']
> lista_mixta = [1, 'hola', 3.14, True]
> ```
> 
> - **Acceso a Elementos:** Ya viste el acceso por índice (empezando desde 0). También puedes usar índices negativos para acceder desde el final de la lista (-1 es el último elemento, -2 el penúltimo, etc.).
> 
> ```python
> frutas = ['manzana', 'banana', 'cereza']
> print(frutas[1])   # Output: bananaprint(frutas[-1])  # Output: cereza
> ```
> 
> - **Slicing (Rebanado):** Puedes extraer subconjuntos de una lista utilizando slicing.
> 
> ```python
> numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
> sublista1 = numeros[2:5]   # Elementos desde el índice 2 hasta el 4 (sin incluir el 5) -> [2, 3, 4]sublista2 = numeros[:3]    # Elementos desde el inicio hasta el índice 2 (sin incluir el 3) -> [0, 1, 2]sublista3 = numeros[6:]    # Elementos desde el índice 6 hasta el final -> [6, 7, 8, 9]sublista4 = numeros[::2]   # Todos los elementos con un paso de 2 -> [0, 2, 4, 6, 8]sublista5 = numeros[::-1]  # Reversa la lista -> [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
> ```
> 
> - **Modificación de Elementos:**
> 
> ```python
> colores = ['rojo', 'azul', 'verde']
> colores[1] = 'amarillo'  # Cambia el elemento en el índice 1print(colores)         # Output: ['rojo', 'amarillo', 'verde']
> ```
> 
> - **Métodos de Listas (algunos importantes):**
> - `append(elemento)`: Agrega un elemento al final de la lista (ya lo conoces).
> - `insert(indice, elemento)`: Inserta un elemento en un índice específico.
> 
> ```python
> mi_lista = [1, 2, 3]
> mi_lista.insert(1, 10)
> print(mi_lista)      # Output: [1, 10, 2, 3]
> ```
> 
> - `extend(iterable)`: Agrega todos los elementos de un iterable (como otra lista o tupla) al final de la lista.
> 
> ```python
> lista1 = [1, 2]
> lista2 = [3, 4, 5]
> lista1.extend(lista2)
> print(lista1)      # Output: [1, 2, 3, 4, 5]
> ```
> 
> - `remove(elemento)`: Elimina la primera aparición de un elemento específico. Genera un error si el elemento no está en la lista.
> 
> ```python
> letras = ['a', 'b', 'c', 'b']
> letras.remove('b')
> print(letras)      # Output: ['a', 'c', 'b']
> ```
> 
> - `pop(indice)`: Elimina y devuelve el elemento en el índice especificado. Si no se proporciona un índice, elimina y devuelve el último elemento.
> 
> ```python
> numeros = [10, 20, 30]
> elemento_eliminado = numeros.pop(1)
> print(f"Elemento eliminado: {elemento_eliminado}, Lista restante: {numeros}")
> # Output: Elemento eliminado: 20, Lista restante: [10, 30]print(f"Último elemento eliminado: {ultimo_elemento}, Lista restante: {numeros}")
> # Output: Último elemento eliminado: 30, Lista restante: [10]
> ```
> 
> - `index(elemento)`: Devuelve el índice de la primera aparición de un elemento. Genera un error si el elemento no está en la lista.
> 
> ```python
> frutas = ['manzana', 'banana', 'cereza']
> indice_banana = frutas.index('banana')
> print(f"El índice de 'banana' es: {indice_banana}")  # Output: El índice de 'banana' es: 1
> ```
> 
> - `count(elemento)`: Devuelve el número de veces que aparece un elemento en la lista.
> 
> ```python
> valores = [1, 2, 2, 3, 2, 4]
> conteo_dos = valores.count(2)
> print(f"El número 2 aparece {conteo_dos} veces.")  # Output: El número 2 aparece 3 veces.
> ```
> 
> - `sort()`: Ordena la lista in-place (modifica la lista original). Puedes usar `reverse=True` para ordenar en orden descendente.
> 
> ```python
> numeros = [3, 1, 4, 1, 5, 9, 2, 6]
> numeros.sort()
> print(numeros)      # Output: [1, 1, 2, 3, 4, 5, 6, 9]numeros.sort(reverse=True)
> print(numeros)      # Output: [9, 6, 5, 4, 3, 2, 1, 1]
> ```
> 
> - `clear()`: Elimina todos los elementos de la lista, dejándola vacía.
> 
> ```python
> mi_lista = [1, 2, 3]
> mi_lista.clear()
> print(mi_lista)      # Output: []
> ```
> 

> [!tip] Tuplas (tuple)
Las tuplas también son secuencias ordenadas de elementos, al igual que las listas. Sin embargo, la diferencia clave es que las tuplas son inmutables. Una vez que se crea una tupla, no puedes modificar sus elementos (no puedes agregar, eliminar ni cambiar elementos directamente).
Más sobre Tuplas:
- Creación:
> 
> 
> ```python
>    tupla_vacia = ()
>    tupla_un_elemento = (5,)  # ¡Ojo con la coma al final para tuplas de un solo elemento!   otra_tupla = (10, 20, 30)
>    tupla_de_lista = tuple([1, 2, 3])  # Convertir una lista a tupla
> ```
> 
> Los paréntesis son opcionales en la creación de tuplas, pero se recomiendan para mayor claridad, especialmente en casos complejos.
> - **Acceso a Elementos y Slicing:** Funcionan exactamente igual que en las listas, ya que son secuencias ordenadas.
> 
> ```python
> mi_tupla = (10, 20, 30, 40)
> print(mi_tupla[0])    # Output: 10print(mi_tupla[1:3])  # Output: (20, 30)
> ```
> 
> - **Desempaquetado de Tuplas (ya lo conoces):** Una forma elegante de asignar los elementos de una tupla a variables individuales. Funciona también con listas.
> 
> ```python
> coordenadas = (5, 10)
> x, y = coordenadas
> print(f"x: {x}, y: {y}")  # Output: x: 5, y: 10
> ```
> 
> - **Métodos de Tuplas (son menos debido a la inmutabilidad):**
>     - `count(elemento)`: Devuelve el número de veces que aparece un elemento en la tupla.
>     - `index(elemento)`: Devuelve el índice de la primera aparición de un elemento.
>     **¿Por qué usar Tuplas?**
> - **Inmutabilidad:** Garantiza que los datos no se modificarán accidentalmente. Esto es útil para representar datos fijos, como coordenadas, configuraciones que no deberían cambiar, etc.
> - **Rendimiento:** En algunas operaciones, las tuplas pueden ser ligeramente más rápidas que las listas debido a su naturaleza estática.
> - **Uso como Claves de Diccionarios:** Las tuplas pueden usarse como claves en diccionarios (los que veremos más adelante), mientras que las listas no, debido a que las claves de los diccionarios deben ser inmutables.

> 
>