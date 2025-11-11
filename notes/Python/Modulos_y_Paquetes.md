# Módulos y Paquetes

## Importar

```python
import math
print(math.sqrt(16))

```

## Crear módulo

archivo llamado `mimodulo.py`

```python
def saludar():
    print("Hola!")

```

Usar:

```python
import mimodulo
mimodulo.saludar()

```

# ¿Qué carajos es un **módulo** en Python?

Imaginate que vas al supermercado 🍎🍌🍍.

- Cada **fruta** está en **una caja** distinta.
- Una caja tiene **solo manzanas**, otra caja **solo peras**, otra caja **solo bananas**.

👉 **Cada caja** = **un módulo**.

Un **módulo en Python** es simplemente **un archivo `.py`** (como `frutas.py`, `vehiculos.py`, `usuarios.py`)

donde metes **funciones**, **variables** o **clases** relacionadas.

---

### Ejemplo:

```python
`# archivo: frutas.py
def comer_manzana():
print("Ñam ñam 🍎")

def comer_pera():
print("Ñam ñam 🍐")`

```

Este archivo `frutas.py` es un **módulo**.

Cuando quieras usarlo en otro archivo, simplemente **lo importas**:

python

CopiarEditar

`import frutas  frutas.comer_manzana()`

¿Ves? **Agarrás de la caja la fruta que querés**.

---

# 🌟 ¿Y qué onda eso de `from ... import ...`?

Si no quieres decir "frutas." cada vez, podés **importar solo lo que te interesa**:

python

CopiarEditar

`from frutas import comer_manzana  comer_manzana()  # Directo, sin el prefijo frutas.`

Es como ir al super y decir:

*"No me traigas toda la caja de frutas, tráeme **solo la manzana**."* 🍎

---

# 🌟 ¿Y el `as`?

Sirve para ponerle un **apodo** al módulo o función.

Imaginate que "comer_manzana" es muy largo, le ponemos un **apodo más corto**:

python

CopiarEditar

`from frutas import comer_manzana as comer  comer()  # 😋`

**Alias = apodo**.

(Sirve para escribir menos o para evitar confusión si hay nombres repetidos.)

---

# 🌟 Ahora: **¿Qué mier... es un paquete?**

Un **paquete** es simplemente **una caja de cajas** 📦.

Ejemplo mental:

- Supermercado → sección de **frutas** → dentro hay **caja de manzanas**, **caja de peras**.

En código:

- **Paquete**: una carpeta.
- **Módulos**: los archivos `.py` dentro de esa carpeta.

**Pero ojo**:

¡Para que Python entienda que esa carpeta es un **paquete** tiene que tener un archivo mágico llamado `__init__.py` adentro! ✨

bash

CopiarEditar

`mi_proyecto/         <-- paquete │ ├── __init__.py      <-- dice "Hola, soy un paquete" ├── modulo_a.py      <-- módulo ├── modulo_b.py      <-- módulo └── subpaquete/      <-- subpaquete      ├── __init__.py      └── modulo_c.py`

---

# 🌟 ¿Cómo usar un paquete?

Cuando lo quieras usar:

python

CopiarEditar

`import mi_proyecto.modulo_a  mi_proyecto.modulo_a.alguna_funcion()`

¿Viste? Vas **bajando**: del supermercado, a la sección frutas, a la caja manzanas.

**Paquete → módulo → función**.

---

# 🌟 ¿Qué hace `__init__.py`?

- Dice: "Ey Python, esta carpeta es un **paquete**." 📦
- Puede tener código de **inicio** (si querés hacer algo automáticamente).
- Puede controlar **qué se importa** si alguien usa `from paquete import *`.

Si lo dejas vacío, igual funciona como paquete.

---

# 🌟 En resumen en una imagen mental:

plaintext

CopiarEditar

`Supermercado (paquete)  ├─ Caja de Manzanas (modulo_a.py)  ├─ Caja de Peras (modulo_b.py)  └─ Sección de Tropicales (subpaquete/)       └─ Caja de Piñas (modulo_c.py)`

- **Paquete = carpeta** con `__init__.py`
- **Módulo = [archivo.py](http://archivo.py/)**
- **Función = fruta**

Y cuando programas:

- `import supermercado.caja_manzanas`
- `from supermercado.tropicales.caja_piñas import comer_piña`# ¿Qué carajos es un **módulo** en Python?

Imaginate que vas al supermercado 🍎🍌🍍.

- Cada **fruta** está en **una caja** distinta.
- Una caja tiene **solo manzanas**, otra caja **solo peras**, otra caja **solo bananas**.

👉 **Cada caja** = **un módulo**.

Un **módulo en Python** es simplemente **un archivo `.py`** (como `frutas.py`, `vehiculos.py`, `usuarios.py`)

donde metes **funciones**, **variables** o **clases** relacionadas.

---

### Ejemplo:

python

CopiarEditar

`# archivo: frutas.py def comer_manzana():     print("Ñam ñam 🍎")  def comer_pera():     print("Ñam ñam 🍐")`

Este archivo `frutas.py` es un **módulo**.

Cuando quieras usarlo en otro archivo, simplemente **lo importas**:

python

CopiarEditar

`import frutas  frutas.comer_manzana()`

¿Ves? **Agarrás de la caja la fruta que querés**.

---

# 🌟 ¿Y qué onda eso de `from ... import ...`?

Si no quieres decir "frutas." cada vez, podés **importar solo lo que te interesa**:

python

CopiarEditar

`from frutas import comer_manzana  comer_manzana()  # Directo, sin el prefijo frutas.`

Es como ir al super y decir:

*"No me traigas toda la caja de frutas, tráeme **solo la manzana**."* 🍎

---

# 🌟 ¿Y el `as`?

Sirve para ponerle un **apodo** al módulo o función.

Imaginate que "comer_manzana" es muy largo, le ponemos un **apodo más corto**:

python

CopiarEditar

`from frutas import comer_manzana as comer  comer()  # 😋`

**Alias = apodo**.

(Sirve para escribir menos o para evitar confusión si hay nombres repetidos.)

---

# 🌟 Ahora: **¿Qué mier... es un paquete?**

Un **paquete** es simplemente **una caja de cajas** 📦.

Ejemplo mental:

- Supermercado → sección de **frutas** → dentro hay **caja de manzanas**, **caja de peras**.

En código:

- **Paquete**: una carpeta.
- **Módulos**: los archivos `.py` dentro de esa carpeta.

**Pero ojo**:

¡Para que Python entienda que esa carpeta es un **paquete** tiene que tener un archivo mágico llamado `__init__.py` adentro! ✨

bash

CopiarEditar

`mi_proyecto/         <-- paquete │ ├── __init__.py      <-- dice "Hola, soy un paquete" ├── modulo_a.py      <-- módulo ├── modulo_b.py      <-- módulo └── subpaquete/      <-- subpaquete      ├── __init__.py      └── modulo_c.py`

---

# 🌟 ¿Cómo usar un paquete?

Cuando lo quieras usar:

python

CopiarEditar

`import mi_proyecto.modulo_a  mi_proyecto.modulo_a.alguna_funcion()`

¿Viste? Vas **bajando**: del supermercado, a la sección frutas, a la caja manzanas.

**Paquete → módulo → función**.

---

# 🌟 ¿Qué hace `__init__.py`?

- Dice: "Ey Python, esta carpeta es un **paquete**." 📦
- Puede tener código de **inicio** (si querés hacer algo automáticamente).
- Puede controlar **qué se importa** si alguien usa `from paquete import *`.

Si lo dejas vacío, igual funciona como paquete.

---

# 🌟 En resumen en una imagen mental:

plaintext

CopiarEditar

`Supermercado (paquete)  ├─ Caja de Manzanas (modulo_a.py)  ├─ Caja de Peras (modulo_b.py)  └─ Sección de Tropicales (subpaquete/)       └─ Caja de Piñas (modulo_c.py)`

- **Paquete = carpeta** con `__init__.py`
- **Módulo = [archivo.py](http://archivo.py/)**
- **Función = fruta**

Y cuando programas:

- `import supermercado.caja_manzanas`
- `from supermercado.tropicales.caja_piñas import comer_piña`

---

---

---

> [!example] Módulos y Paquetes en Python: Con Peras, Manzanas y Supermercados 🍎🍌🍍
> 
> 
> ---
> 
> ## 🍎 ¿Qué carajos es un módulo en Python?
> 
> Imaginá que vas al supermercado 🍎🍌🍍.
> 
> - Cada fruta está en una **caja distinta**.
> - Una caja tiene **solo manzanas**, otra **solo peras**, otra **solo bananas**.
> 
> 👉 Cada **caja** = un **módulo**.
> 
> Un **módulo en Python** es simplemente un **archivo `.py`** (como `frutas.py`, `vehiculos.py`, `usuarios.py`) donde metés funciones, variables o clases relacionadas.
> 
> ---
> 
> ### Ejemplo de módulo:
> 
> ```python
> # archivo: frutas.py
> def comer_manzana():
>     print("Ñam ñam 🍎")
> 
> def comer_pera():
>     print("Ñam ñam 🍐")
> 
> ```
> 
> Este archivo `frutas.py` es un **módulo**.
> 
> Cuando quieras usarlo en otro archivo, simplemente lo importás:
> 
> ```python
> import frutas
> 
> frutas.comer_manzana()
> 
> ```
> 
> ✅ **Agarrás de la caja la fruta que querés**.
> 
> ---
> 
> ## 🌟 ¿Y qué onda eso de `from ... import ...`?
> 
> Si no querés decir `frutas.` cada vez, podés importar **solo** lo que te interesa:
> 
> ```python
> from frutas import comer_manzana
> 
> comer_manzana()  # Directo, sin el prefijo frutas.
> 
> ```
> 
> Es como ir al super y decir:
> 
> > "No me traigas toda la caja de frutas, tráeme solo la manzana." 🍎
> > 
> 
> ---
> 
> ## 🌟 ¿Y el `as`?
> 
> Sirve para ponerle un **apodo** al módulo o función.
> 
> Imaginate que `comer_manzana` es muy largo. Le ponemos un apodo más corto:
> 
> ```python
> from frutas import comer_manzana as comer
> 
> comer()  # 😋
> 
> ```
> 
> ✅ **Alias = apodo**.
> 
> (Sirve para escribir menos o para evitar confusión si hay nombres repetidos.)
> 
> ---
> 
> ## 🌟 Ahora: ¿Qué mier... es un paquete?
> 
> Un **paquete** es simplemente una **caja de cajas** 📦.
> 
> Ejemplo mental:
> 
> > Supermercado → sección de frutas → dentro hay caja de manzanas, caja de peras.
> > 
> 
> En código:
> 
> - **Paquete** = una carpeta 📁.
> - **Módulos** = los archivos `.py` dentro de esa carpeta.
> 
> **¡Pero ojo!**
> 
> Para que Python entienda que esa carpeta es un paquete tiene que tener un archivo **mágico** llamado `__init__.py` adentro ✨.
> 
> ---
> 
> ### Estructura típica:
> 
> ```
> mi_proyecto/         <-- paquete
> │
> ├── __init__.py      <-- dice "Hola, soy un paquete"
> ├── modulo_a.py      <-- módulo
> ├── modulo_b.py      <-- módulo
> └── subpaquete/      <-- subpaquete
>     ├── __init__.py
>     └── modulo_c.py
> 
> ```
> 
> ---
> 
> ## 🌟 ¿Cómo usar un paquete?
> 
> Cuando quieras usarlo:
> 
> ```python
> import mi_proyecto.modulo_a
> 
> mi_proyecto.modulo_a.alguna_funcion()
> 
> ```
> 
> ✅ Vas bajando: **supermercado → sección frutas → caja de manzanas**.
> 
> > Paquete → módulo → función.
> > 
> 
> ---
> 
> ## 🌟 ¿Qué hace `__init__.py`?
> 
> - Dice: "Ey Python, esta carpeta es un paquete." 📦
> - Puede tener **código de inicio** si querés hacer algo automáticamente.
> - Puede **controlar qué se importa** si alguien usa `from paquete import *`.
> - **Si lo dejás vacío, igual funciona** como paquete.
> 
> ---
> 
> ## 🌟 En resumen con una imagen mental:
>