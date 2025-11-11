# Manejo_de_Errores

# ❗ Manejo de errores

## try / except

```python
try:
    x = 1 / 0except ZeroDivisionError as e:
    print("Error:", e)
```

## finally

```python
try:
    archivo = open("data.txt")
finally:
    archivo.close()
```

> [!important] Manejo de errores
El manejo de errores (también conocido como manejo de excepciones) es el proceso de anticipar y responder a los errores que pueden ocurrir durante la ejecución de un programa. En lugar de que el programa se detenga abruptamente, puedes usar mecanismos para detectar y manejar estos errores de manera controlada.
> 
> 
> **1. La Cláusula** `else` **en** `try...except`:
> 
> Existe una cláusula `else` que puedes agregar a un bloque `try...except`. El código dentro del bloque `else` se ejecuta **solo si no se produjo ninguna excepción** en el bloque `try`.
> 
> ```python
> try:
>   resultado = 10 / 2except ZeroDivisionError as e:
>   print("Error: División por cero:", e)
> else:
>   print("La división fue exitosa. El resultado es:", resultado)
> ```
> 
> En este ejemplo, si la división `10 / 2` se realiza sin errores, se imprimirá el mensaje del bloque `else`. Si ocurre un `ZeroDivisionError`, el bloque `except` se ejecutará y el bloque `else` se omitirá.
> 
> **2. Capturando Múltiples Tipos de Excepciones:**
> 
> Puedes capturar múltiples tipos de excepciones en un solo bloque `except` utilizando una tupla de excepciones:
> 
> ```python
> try:
>   valor = int(input("Ingrese un número: "))
>   resultado = 10 / valor
> except (ValueError, ZeroDivisionError) as e:
>   print("Ocurrió un error:", e)
> ```
> 
> Aquí, si el usuario ingresa algo que no se puede convertir a un entero (`ValueError`) o si ingresa cero (`ZeroDivisionError`), el mismo bloque `except` se ejecutará.
> 
> También puedes tener múltiples bloques `except` para manejar diferentes tipos de excepciones de manera específica:
> 
> ```python
> try:
>   valor = int(input("Ingrese un número: "))
>   resultado = 10 / valor
> except ValueError as e:
>   print("Error: Entrada inválida. Debe ingresar un número entero:", e)
> except ZeroDivisionError as e:
>   print("Error: División por cero:", e)
> ```
> 
> **3. La Cláusula** `finally` **en Detalle:**
> 
> Como ya sabes, el bloque `finally` se ejecuta **siempre**, sin importar si ocurrió una excepción en el bloque `try` o no. Se utiliza típicamente para tareas de limpieza que deben realizarse independientemente del resultado de la operación protegida (como cerrar archivos o liberar recursos).
> 
> Es importante notar que si una excepción ocurre en el bloque `try` y es capturada por un bloque `except`, el bloque `finally` se ejecutará **después** del bloque `except`. Si la excepción no es capturada, el bloque `finally` se ejecutará **antes** de que la excepción se propague y el programa termine.
> 
> **4. Generando Excepciones Manualmente (**`raise`**):**
> 
> En ocasiones, querrás generar una excepción explícitamente en tu código. Esto se hace con la palabra clave `raise`. Puedes generar una instancia de una excepción existente o crear tus propias excepciones personalizadas (lo veremos más adelante).
> 
> ```python
> def verificar_edad(edad):
>   if edad < 0:
>       raise ValueError("La edad no puede ser negativa.")
>   elif edad < 18:
>       raise PermissionError("Acceso denegado. Debes ser mayor de edad.")
>   else:
>       print("Edad válida.")
> try:
>   edad_usuario = int(input("Ingrese su edad: "))
>   verificar_edad(edad_usuario)
> except ValueError as e:
>   print("Error:", e)
> except PermissionError as e:
>   print("Error:", e)
> ```
> 
> En este ejemplo, la función `verificar_edad` genera una excepción `ValueError` o `PermissionError` si la edad no cumple ciertos criterios. Estas excepciones son luego capturadas por los bloques `except` correspondientes.
> 
> **5. Excepciones Personalizadas:**
> 
> Puedes crear tus propias clases de excepción que hereden de la clase base `Exception` (o de una de sus subclases). Esto es útil para indicar errores específicos a tu aplicación y hacer que el manejo de errores sea más semántico.
> 
> ```python
> class SaldoInsuficienteError(Exception):
>   """Excepción que se lanza cuando no hay suficiente saldo en la cuenta."""  def __init__(self, saldo_actual, monto_retiro):
>       self.saldo_actual = saldo_actual
>       self.monto_retiro = monto_retiro
>       super().__init__(f"Saldo insuficiente: Saldo actual = {saldo_actual}, Monto a retirar = {monto_retiro}")
> def realizar_retiro(saldo, monto):
>   if saldo < monto:
>       raise SaldoInsuficienteError(saldo, monto)
>   else:
>       nuevo_saldo = saldo - monto
>       print("Retiro exitoso. Nuevo saldo:", nuevo_saldo)
>       return nuevo_saldo
> saldo_cuenta = 100monto_a_retirar = 150try:
>   saldo_cuenta = realizar_retiro(saldo_cuenta, monto_a_retirar)
> except SaldoInsuficienteError as e:
>   print("Error:", e)
> ```
> 
> Aquí, `SaldoInsuficienteError` es una excepción personalizada que proporciona información específica sobre el error (saldo actual y monto de retiro).
> 
> **6. Buenas Prácticas para el Manejo de Errores:**
> 
> - **Sé específico al capturar excepciones:** Intenta capturar solo los tipos de excepciones que esperas que puedan ocurrir en un bloque `try`. Evita capturar la excepción base `Exception` de forma genérica a menos que realmente tengas la intención de manejar cualquier tipo de error de la misma manera.
> - **No ignores las excepciones silenciosamente:** Un bloque `except` vacío que simplemente hace `pass` puede ocultar errores importantes y dificultar la depuración. Siempre registra o maneja la excepción de alguna manera.
> - **Usa** `finally` **para la limpieza:** Asegúrate de que los recursos (archivos, conexiones de red, etc.) se liberen correctamente utilizando el bloque `finally`.
> - **Piensa en el flujo del programa en caso de error:** ¿Cómo debería comportarse tu programa si ocurre una excepción? Asegúrate de que el manejo de errores sea coherente y proporcione información útil al usuario o registre el error para su posterior análisis.
> - **Documenta las excepciones que tus funciones pueden lanzar:** Esto ayuda a otros desarrolladores (y a ti mismo en el futuro) a entender cómo manejar los posibles errores.

# 🍎 Manejo de errores en Python: versión peras y manzanas

Imaginá que vas caminando cargando un montón de frutas 🍎🍌🍐…

Y de repente… **¡te tropezás!** 🫨

- **Error** = te tropezaste.
- **Manejo de errores** = saber qué hacer **para no caerte de cara** (o para caer lo menos feo posible).

En programación: **los errores son normales**.

La idea es que **no crashee** todo el programa como un tonto, sino **capturarlo**, **manejarlo** y **seguir**.

---

# 🌟 ¿Qué es `try-except`?

- `try`: “Voy a intentar hacer algo que podría fallar”.
- `except`: “Si falla, no me caigo, hago esto otro”.

python

CopiarEditar

`try:     resultado = 10 / 2 except ZeroDivisionError:     print("¡No se puede dividir por cero!")`

✅ Si todo sale bien, `except` **no pasa nada**.

❌ Si explota (ej: división por cero), capturás el error.

---

# 🌟 El **`else`** en `try-except-else`

- `try`: intentás.
- `except`: manejás error si hay.
- `else`: hacés algo **si todo salió bien** (sin errores).

python

CopiarEditar

`try:     resultado = 10 / 2 except ZeroDivisionError:     print("Error: División por cero.") else:     print("La división fue exitosa:", resultado)`

👉 **`else` solo corre si no hubo error**.

(**Cae la fruta perfecta en tu canasta** 🧺).

---

# 🌟 Capturar varios tipos de errores

A veces no sabés **qué fruta te va a golpear** 🍌🍎💥 (qué error va a pasar).

Podés capturar **más de un tipo de error**:

python

CopiarEditar

`try:     valor = int(input("Ingrese un número: "))     resultado = 10 / valor except (ValueError, ZeroDivisionError) as e:     print("Ocurrió un error:", e)`

- `ValueError`: si escriben letras en vez de números.
- `ZeroDivisionError`: si ponen 0.

**Todo cae en el mismo balde** (mismo `except`).

---

# 🌟 O manejar **errores diferentes por separado**

Cada fruta distinta → manejo diferente 🍏🍌:

python

CopiarEditar

`try:     valor = int(input("Ingrese un número: "))     resultado = 10 / valor except ValueError:     print("Entrada inválida. Escribe un número entero.") except ZeroDivisionError:     print("No se puede dividir por cero.")`

Así tratás **cada problema como corresponde**.

---

# 🌟 El `finally`: pase lo que pase, se ejecuta

- ¿Caíste bien?
- ¿Caíste mal?
- ¿No caíste?

**Siempre** hacés algo después. ✅

python

CopiarEditar

`try:     f = open('archivo.txt', 'r')     contenido = f.read() except FileNotFoundError:     print("Archivo no encontrado.") finally:     f.close()`

**`finally` sirve para cerrar la puerta aunque haya temblor.**

(Se ejecuta **SIEMPRE**).

---

# 🌟 Crear errores a propósito con `raise`

A veces **vos mismo querés gritar “¡Error!”** si ves algo raro.

python

CopiarEditar

`def verificar_edad(edad):     if edad < 0:         raise ValueError("La edad no puede ser negativa.")     elif edad < 18:         raise PermissionError("Debes ser mayor de edad.")     else:         print("Edad válida.")`

Y lo capturás como siempre:

python

CopiarEditar

`try:     verificar_edad(-5) except ValueError as e:     print("Error:", e) except PermissionError as e:     print("Error:", e)`

✅ Vos mismo **tirás el plátano** en el suelo para alertar: “¡Ojo acá!”.

---

# 🌟 Crear **tus propios errores** (excepciones personalizadas)

Python tiene errores (`ValueError`, `TypeError`…), pero vos podés **inventar los tuyos** si querés ser más fino.

python

CopiarEditar

`class SaldoInsuficienteError(Exception):     """Error cuando no hay plata suficiente."""     def __init__(self, saldo, monto):         self.saldo = saldo         self.monto = monto         super().__init__(f"Saldo insuficiente: saldo={saldo}, intento de retiro={monto}")  def retirar_dinero(saldo, monto):     if saldo < monto:         raise SaldoInsuficienteError(saldo, monto)     print("Retiro exitoso.")  try:     retirar_dinero(100, 150) except SaldoInsuficienteError as e:     print("Error:", e)`

👉 **Inventás tus propias señales de “PELIGRO”** cuando el programa lo necesita.

---

# 🌟 Buenas prácticas para no romper todo

| Reglas de oro | Por qué |
| --- | --- |
| Sé específico al capturar errores | No captures todo a lo bruto. |
| No ignores los errores | No pongas `except: pass` porque después explota todo sin avisar. |
| Usa `finally` para cerrar cosas | Para liberar memoria, archivos, conexiones, etc. |
| Pensá el flujo si hay error | Que el usuario no vea pantallas feas. |
| Documenta qué errores pueden salir | Para que otros sepan qué puede fallar. |

---

# 🧠 Resumen con frutas:

- `try` → intentás agarrar la fruta 🍎.
- `except` → si se te cae, la levantás 🍌.
- `else` → si todo sale bien, festejás 🍍.
- `finally` → igual cerrás la canasta 🎒.
- `raise` → vos mismo podés tirar una fruta podrida si ves peligro 🍏🚫.
- **Errores personalizados** → inventás tus propias reglas del supermercado 🏬.

---

> [!example] Manejo de Errores en Python: Versión Peras, Manzanas y Tropezones 🍎🍌🍍
> 
> 
> ---
> 
> ## 🍎 Manejo de errores en Python: versión peras y manzanas
> 
> Imaginá que vas caminando cargando un montón de frutas 🍎🍌🍐…
> 
> Y de repente… **¡te tropezás!** 🫨
> 
> - **Error** = te tropezaste.
> - **Manejo de errores** = saber qué hacer para no caerte de cara (o caer lo menos feo posible).
> 
> En programación: **los errores son normales**.
> La idea es que **no crashee** todo el programa como un tonto, sino **capturarlo**, **manejarlo** y **seguir**.
> 
> ---
> 
> ## 🌟 ¿Qué es `try-except`?
> 
> - `try`: “Voy a intentar hacer algo que podría fallar.”
> - `except`: “Si falla, no me caigo, hago esto otro.”
> 
> ```python
> try:
>     resultado = 10 / 2except ZeroDivisionError:
>     print("¡No se puede dividir por cero!")
> ```
> 
> ✅ Si todo sale bien, `except` no pasa nada.
> 
> ❌ Si explota (ej: división por cero), capturás el error.
> 
> ---
> 
> ## 🌟 El `else` en `try-except-else`
> 
> - `try`: intentás.
> - `except`: manejás error si hay.
> - `else`: hacés algo si todo salió bien (sin errores).
> 
> ```python
> try:
>     resultado = 10 / 2except ZeroDivisionError:
>     print("Error: División por cero.")
> else:
>     print("La división fue exitosa:", resultado)
> ```
> 
> 👉 `else` solo corre si no hubo error.
> (Cae la fruta perfecta en tu canasta 🧺).
> 
> ---
> 
> ## 🌟 Capturar varios tipos de errores
> 
> A veces no sabés qué fruta te va a golpear 🍌🍎💥 (qué error va a pasar).
> 
> Podés capturar **más de un tipo de error**:
> 
> ```python
> try:
>     valor = int(input("Ingrese un número: "))
>     resultado = 10 / valor
> except (ValueError, ZeroDivisionError) as e:
>     print("Ocurrió un error:", e)
> ```
> 
> - `ValueError`: si escriben letras en vez de números.
> - `ZeroDivisionError`: si ponen 0.
> 
> ✅ Todo cae en el mismo balde (mismo `except`).
> 
> ---
> 
> ## 🌟 O manejar errores diferentes por separado
> 
> Cada fruta distinta → manejo diferente 🍏🍌:
> 
> ```python
> try:
>     valor = int(input("Ingrese un número: "))
>     resultado = 10 / valor
> except ValueError:
>     print("Entrada inválida. Escribe un número entero.")
> except ZeroDivisionError:
>     print("No se puede dividir por cero.")
> ```
> 
> ✅ Tratás cada problema como corresponde.
> 
> ---
> 
> ## 🌟 El `finally`: pase lo que pase, se ejecuta
> 
> - ¿Caíste bien?
> - ¿Caíste mal?
> - ¿No caíste?
> 
> **Siempre** hacés algo después. ✅
> 
> ```python
> try:
>     f = open('archivo.txt', 'r')
>     contenido = f.read()
> except FileNotFoundError:
>     print("Archivo no encontrado.")
> finally:
>     f.close()
> ```
> 
> ✅ `finally` sirve para cerrar la puerta aunque haya temblor.
> 
> ---
> 
> ## 🌟 Crear errores a propósito con `raise`
> 
> A veces **vos mismo querés gritar “¡Error!”** si ves algo raro.
> 
> ```python
> def verificar_edad(edad):
>     if edad < 0:
>         raise ValueError("La edad no puede ser negativa.")
>     elif edad < 18:
>         raise PermissionError("Debes ser mayor de edad.")
>     else:
>         print("Edad válida.")
> ```
> 
> Y capturarlo como siempre:
> 
> ```python
> try:
>     verificar_edad(-5)
> except ValueError as e:
>     print("Error:", e)
> except PermissionError as e:
>     print("Error:", e)
> ```
> 
> ✅ Vos mismo tirás el plátano en el suelo para alertar: “¡Ojo acá!”.
> 
> ---
> 
> ## 🌟 Crear tus propios errores (excepciones personalizadas)
> 
> Python tiene errores (`ValueError`, `TypeError`…), pero vos podés inventar los tuyos si querés ser más fino.
> 
> ```python
> class SaldoInsuficienteError(Exception):
>     """Error cuando no hay plata suficiente."""    def __init__(self, saldo, monto):
>         self.saldo = saldo
>         self.monto = monto
>         super().__init__(f"Saldo insuficiente: saldo={saldo}, intento de retiro={monto}")
> def retirar_dinero(saldo, monto):
>     if saldo < monto:
>         raise SaldoInsuficienteError(saldo, monto)
>     print("Retiro exitoso.")
> try:
>     retirar_dinero(100, 150)
> except SaldoInsuficienteError as e:
>     print("Error:", e)
> ```
> 
> 👉 Inventás tus propias señales de “PELIGRO” cuando el programa lo necesita.
> 
> ---
> 
> ## 🌟 Buenas prácticas para no romper todo
> 
> | Reglas de oro | Por qué |
> | --- | --- |
> | Sé específico al capturar errores | No captures todo a lo bruto. |
> | No ignores los errores | No pongas `except: pass`. |
> | Usa `finally` para cerrar cosas | Libera memoria, archivos, conexiones. |
> | Pensá el flujo si hay error | Que no vean pantallas feas. |
> | Documenta qué errores pueden salir | Ayudá al futuro vos. |
> 
> ---
> 
> ## 🧠 Resumen con frutas:
> 
> - `try` → Intentás agarrar la fruta 🍎.
> - `except` → Si se te cae, la levantás 🍌.
> - `else` → Si todo sale bien, festejás 🍍.
> - `finally` → Cerrás la canasta 🎒 sí o sí.
> - `raise` → Vos mismo tirás la alerta de fruta podrida 🍏🚫.
> -