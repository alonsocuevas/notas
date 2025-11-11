# Operadores

> [!example] Operadores Aritméticos
```python
a + b # Suma
a - b # Resta
a * b # Multiplicación
a / b # División
a % b # Módulo
a ** b # Potencia
a // b # División entera
> 

> [!example] Operadores de Comparación
```python
a == b
a != b
a > b
a < b
a >= b
a <= b
> 

> [!example] Operadores Lógicos
```python
a and b # Y lógico
a or b # O logico
a not a # NO logico
> 

> [!example] Identidad y membresía
```python
a is b
a is not b
x in lista
x not in lista
> 

> [!example] Operadores de Asignación
| Operador | Ejemplo | Equivalente | Descripción |
| ——– | ——- | ———– | —————————————————————————————————————————— |
| = | a = 5 | a = 5 | Asigna el valor de la derecha a la variable de la izquierda. |
| += | a += 3 | a = a + 3 | Suma el valor de la derecha a la variable de la izquierda y asigna el resultado. |
| -= | a -= 2 | a = a - 2 | Resta el valor de la derecha a la variable de la izquierda y asigna el resultado. |
| = | a = 4 | a = a * 4 | Multiplica la variable de la izquierda por el valor de la derecha y asigna el resultado. |
| /= | a /= 5 | a = a / 5 | Divide la variable de la izquierda por el valor de la derecha y asigna el resultado (la división siempre resulta en un float). |
| %= | a %= 3 | a = a % 3 | Calcula el módulo de la variable de la izquierda con el valor de la derecha y asigna el resultado. |
| = | a = 2 | a = a ** 2 | Eleva la variable de la izquierda a la potencia del valor de la derecha y asigna el resultado. |
| //= | a //= 2 | a = a // 2 | Realiza la división entera de la variable de la izquierda por el valor de la derecha y asigna el resultado. |
> 
> 
> **Ejemplo**
> 
> ```python
> x = 10
> print(f”Valor inicial de x: {x}“)
> 
> x += 5 # x ahora es 15 (10 + 5)
> print(f”x += 5: {x}“)
> 
> x -= 3 # x ahora es 12 (15 - 3)
> print(f”x -= 3: {x}“)
> 
> x *= 2 # x ahora es 24 (12*  2)
> print(f”x *= 2: {x}“)
> 
> x /= 4 # x ahora es 6.0 (24 / 4)
> print(f”x /= 4: {x}“)
> 
> x %= 5 # x ahora es 1.0 (6.0 % 5)
> print(f”x %= 5: {x}“)
> 
> y = 3
> y **= 3 # y ahora es 27 (3**  3)
> print(f”y **= 3: {y}“)
> 
> z = 10
> z //= 3 # z ahora es 3 (10 // 3)
> print(f”z //= 3: {z}“)
> 

> [!example] Operadores Bitwise (a nivel de bits)
Estos operadores actúan sobre los operandos como si fueran secuencias de bits. Son menos comunes en la programación general de alto nivel, pero son importantes en áreas como la programación de sistemas, la manipulación de hardware y la criptografía.
> 
> 
> 
> | Operador | Nombre | Descripción | Ejemplo (a=10 (00001010), b=4 (00000100)) | Resultado (en decimal) | Resultado (en binario) |
> | --- | --- | --- | --- | --- | --- |
> | & | AND bit a bit | Realiza un AND bit a bit entre los operandos. El bit resultante es 1 si ambos bits correspondientes son 1. | a & b | 0 | 00000000 |
> | `|` | OR bit a bit | Realiza un OR bit a bit entre los operandos. El bit resultante es 1 si al menos uno de los bits correspondientes es 1. | `a                     | b` |  |  |
> | ^ | XOR (OR exclusivo) bit a bit | Realiza un XOR bit a bit entre los operandos. El bit resultante es 1 si los bits correspondientes son diferentes. | a ^ b | 14 | 00001110 |
> | ~ | NOT bit a bit | invierte los bits del operando. | ~a | -11 | Depende de la representación de enteros (complemento a dos) |
> | << | Desplazamiento a la izquierda | Desplaza los bits del operando de la izquierda el número de posiciones especificado por el operando de la derecha, rellenando con ceros a la derecha. | a << 2 | 40 | 00101000 |
> | >> | Desplazamiento a la derecha | Desplaza los bits del operando de la izquierda el número de posiciones especificado por el operando de la derecha. El comportamiento del bit de signo depende del tipo de desplazamiento (aritmético o lógico). | a >> 1 | 5 | 00000101 |
> 
> **Ejemplo de operadores Bitwise**
> 
> ```python
> a = 10  # Binario: 00001010b = 4   # Binario: 00000100print(f"a & b: {a & b} (Binario: {bin(a & b)})")
> print(f"a | b: {a | b} (Binario: {bin(a | b)})")
> print(f"a ^ b: {a ^ b} (Binario: {bin(a ^ b)})")
> print(f"~a: {~a} (Binario: {bin(~a)})") # El resultado puede variar según la representación de enterosprint(f"a << 2: {a << 2} (Binario: {bin(a << 2)})")
> print(f"a >> 1: {a >> 1} (Binario: {bin(a >> 1)})")
> ```
> 
> **Output:**
> 
> ```bash
> a & b: 0 (Binario: 0b0)a | b: 14 (Binario: 0b1110)a ^ b: 14 (Binario: 0b1110)~a: -11 (Binario: -0b1011)a << 2: 40 (Binario: 0b101000)a >> 1: 5 (Binario: 0b101)
> ```
> 

> [!example] Procedencia de los Operadores
Al igual que en matemáticas, los operadores en Python tienen un orden de precedencia que determina en qué orden se evalúan las operaciones en una expresión. Aquí tienes una tabla de precedencia, de mayor a menor:
> 
> 
> 
> | Nivel | Operadores |
> | --- | --- |
> | 1 | `()` (Paréntesis) |
> | 2 | `**` (Potencia) |
> | 3 | `*`, `/`, `//`, `%` (Multiplicación, División, División entera, Módulo) |
> | 4 | `+`, `-` (Suma, Resta) |
> | 5 | `<<`, `>>` (Desplazamiento de bits) |
> | 6 | `&` (AND bit a bit) |
> | 7 | `^` (XOR bit a bit) |
> | 8 | `| | 9     |`==`,`!=`,`>`,`<`,`>=`,`<=`(Comparación)                          | | 10    |`=`,`+=`,`-=`,`*=`,`/=`,`%=`,`**=`,`//=`(Asignación)            | | 11    |`is`,`is not`,`in`,`not in`(Identidad, Membresía)                   | | 12    |`not`,`and`,`or` (Lógicos) |
> 
> **Consejos sobre la Precedencia:**
> 
> - **Usa paréntesis para claridad:** Si tienes dudas sobre el orden de evaluación o quieres asegurarte de que una parte de la expresión se evalúe primero, utiliza paréntesis. Esto hace que tu código sea más legible y menos propenso a errores.
> - **De izquierda a derecha:** La mayoría de los operadores con la misma precedencia se evalúan de izquierda a derecha. Sin embargo, la exponenciación (`*`) se evalúa de derecha a izquierda.
> 
> **Ejemplo de Procedencia**
> ```python
> resultado1 = 10 + 2 * 3 # Multiplicación (2 * 3) se evalúa primero, luego la suma (10 + 6) -> 16
> print(f”10 + 2 * 3 = {resultado1}“)
> 
> resultado2 = (10 + 2) * 3 # Los paréntesis fuerzan la suma primero (12 * 3) -> 36
> print(f”(10 + 2) * 3 = {resultado2}“)
>