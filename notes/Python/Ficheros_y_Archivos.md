# Ficheros_y_Archivos

# 📁 Archivos

## Leer archivo

```python
with open("archivo.txt") as f:
    contenido = f.read()
```

## Escribir archivo

```python
with open("nuevo.txt", "w") as f:
    f.write("Hola archivo")
```

> [!abstract] El manejo de archivos es una tarea común en programación. Python proporciona funciones integradas para crear, leer, escribir y manipular archivos en tu sistema.
> 

> [!abstract] 1. Modos de Apertura de Archivos:
> 
> 
> Ya conoces `'r'` (lectura) y `'w'` (escritura). Aquí tienes otros modos importantes:
> 
> - `'a'` **(Añadir):** Abre el archivo para escritura, pero en lugar de sobrescribir el contenido existente, los nuevos datos se añaden al final del archivo. Si el archivo no existe, se crea.
> 
> ```python
> with open("mi_archivo.txt", "a") as f:
>   f.write("\nEste texto se añade al final.")
> ```
> 
> - `'x'` **(Creación exclusiva):** Abre el archivo para escritura, pero solo si el archivo no existe. Si el archivo ya existe, lanza un `FileExistsError`.
> 
> ```python
> try:
>   with open("archivo_nuevo.txt", "x") as f:
>       f.write("Este es un archivo nuevo.")
> except FileExistsError:
>   print("El archivo 'archivo_nuevo.txt' ya existe.")
> ```
> 
> - `'b'` **(Modo binario):** Se utiliza para archivos que no contienen texto (imágenes, audio, archivos comprimidos, etc.). Los datos se leen y escriben como bytes. Se combina con otros modos (ej., `'rb'` para lectura binaria, `'wb'` para escritura binaria, `'ab'` para añadir binario).
> 
> ```python
> with open("imagen.jpg", "rb") as f_binario:
>   datos_imagen = f_binario.read()
> with open("copia_imagen.jpg", "wb") as f_copia:
>   f_copia.write(datos_imagen)
> ```
> 
> - `'t'` **(Modo texto):** Es el modo por defecto si no se especifica nada. Se utiliza para archivos de texto y los datos se leen y escriben como cadenas (strings).
> - `'+'` **(Actualización):** Permite tanto la lectura como la escritura en el mismo archivo. Debe combinarse con otro modo (ej., `'r+'` para lectura y escritura, `'w+'` para escritura y lectura - ¡cuidado, trunca el archivo existente!, `'a+'` para añadir y lectura).
> 
> ```python
> # Lectura y escriturawith open("mi_archivo.txt", "r+") as f:
>   contenido_inicial = f.read()
>   f.write("\nTexto adicional.")
>   f.seek(0)  # Volver al principio del archivo para leer todo  contenido_final = f.read()
>   print("Contenido inicial:", contenido_inicial)
>   print("Contenido final:", contenido_final)
> # Añadir y lecturawith open("log.txt", "a+") as f:
>   f.write(f"\nEvento ocurrido a las {datetime.now()}")
>   f.seek(0)
>   log_completo = f.read()
>   print("Log completo:", log_completo)
> ```
> 

> [!abstract] 2. Métodos para Leer Archivos:
> 
> - `f.read()`: Lee todo el contenido del archivo como una única cadena (o bytes en modo binario). Útil para archivos pequeños.
> - `f.readline()`: Lee una sola línea del archivo, incluyendo el carácter de newline (`\n`) al final (si está presente). Si se llama al final del archivo, devuelve una cadena vacía.
> - `f.readlines()`: Lee todas las líneas del archivo y las devuelve como una lista de cadenas.
> 
> ```python
>    with open("mi_archivo.txt", "r") as f:
>        primera_linea = f.readline()
>        print("Primera línea:", primera_linea.strip()) # .strip() elimina espacios en blanco al principio y al final       todas_las_lineas = f.readlines()
>        print("Todas las líneas:", todas_las_lineas)
>        f.seek(0) # Volver al principio del archivo       for linea in f: # Iterar directamente sobre el objeto archivo (eficiente para archivos grandes)           print("Línea:", linea.strip())
> ```
> 

> [!abstract] 3. Métodos para Escribir Archivos:
> 
> - `f.write(cadena)`: Escribe la cadena especificada al archivo. No añade automáticamente un carácter de newline (`\n`), por lo que debes incluirlo si lo deseas.
> - `f.writelines(lista_de_cadenas)`: Escribe una lista de cadenas al archivo. Tampoco añade automáticamente caracteres de newline.
> 
> ```python
> lineas_a_escribir = ["Primera línea para escribir.\n", "Segunda línea.\n"]
> with open("otro_archivo.txt", "w") as f:
>   f.writelines(lineas_a_escribir)
> ```
> 

> [!abstract] 4. La Sentencia with open(...):
> 
> 
> Como ya estás utilizando, `with open(...)` es la forma recomendada de trabajar con archivos. Asegura que el archivo se cierre correctamente después de que se haya terminado de usar, incluso si ocurren errores. Esto se debe a que `with` utiliza los métodos `__enter__` y `__exit__` del objeto archivo para manejar la apertura y el cierre automáticamente.
> 

> [!abstract] 5. Posicionamiento en Archivos:
> 
> - `f.tell()`: Devuelve la posición actual del “cursor” (punto de lectura/escritura) dentro del archivo, en bytes desde el inicio.
> - `f.seek(offset, from_what=0)`: Cambia la posición del cursor a la posición especificada por `offset`. El argumento `from_what` indica el punto de referencia:
>     - `0` (por defecto): Inicio del archivo.
>     - `1`: Posición actual.
>     - `2`: Final del archivo.
> 
> ```python
> with open("datos.txt", "r+b") as f_binario:
>   print("Posición inicial:", f_binario.tell())
>   f_binario.seek(5)
>   print("Posición después de seek(5):", f_binario.tell())
>   byte = f_binario.read(1)
>   print("Byte leído:", byte)
>   f_binario.seek(-3, 2) # Ir 3 bytes antes del final  print("Posición después de seek(-3, 2):", f_binario.tell())
> ```
> 

> [!abstract] 6. Manejo de Errores Específicos de Archivos:
> 
> 
> Al trabajar con archivos, pueden ocurrir varios tipos de errores, como `FileNotFoundError` (si intentas abrir un archivo que no existe en modo lectura) o `PermissionError` (si no tienes los permisos necesarios para acceder al archivo). Es una buena práctica manejar estas excepciones de forma específica:
> 
> ```python
> try:
>   with open("archivo_inexistente.txt", "r") as f:
>       contenido = f.read()
> except FileNotFoundError:
>   print("Error: El archivo no fue encontrado.")
> except PermissionError:
>   print("Error: No tienes permiso para acceder a este archivo.")
> except Exception as e:
>   print(f"Ocurrió otro error con el archivo: {e}")
> ```
> 

**En resumen, el manejo de ficheros y archivos en Python ofrece una gran flexibilidad. Comprender los diferentes modos de apertura, los métodos de lectura y escritura, la importancia de `with open`, cómo navegar por el archivo y cómo manejar los posibles errores te permitirá interactuar con el sistema de archivos de manera efectiva en tus programas.**

> [!abstract] Manejo de Archivos en Python: Peras, Manzanas y Carpetas 📂🍎
> 
> 
> Trabajar con archivos en Python es como abrir una carpeta en tu casa 📂, leer papeles 📄, escribir en ellos 🖊️ o agregar nuevos papeles.
> 
> ---
> 
> ## 📂 1. Modos de apertura de archivos
> 
> Cuando abres un archivo, decides **cómo vas a tratarlo**:
> 
> | Modo | ¿Qué hace? | Imagen mental |
> | --- | --- | --- |
> | `'r'` | Solo lectura | Leer un cartel |
> | `'w'` | Escribir (borra lo anterior) | Escribir en un pizarrón borrando todo |
> | `'a'` | Añadir al final | Agregar nuevas líneas en el cuaderno |
> | `'x'` | Crear nuevo (error si existe) | Querer abrir una tienda nueva |
> | `'b'` | Modo binario | Leer imágenes, audios |
> | `'t'` | Modo texto | Leer y escribir letras (por defecto) |
> | `'+'` | Leer y escribir | Lapicera y libro juntos |
> 
> ---
> 
> ### 📄 Ejemplos rápidos
> 
> - **Añadir (`'a'`)**:
> 
> ```python
> with open("mi_archivo.txt", "a") as f:
>     f.write("\nTexto añadido al final.")
> ```
> 
> - **Crear exclusivo (`'x'`)**:
> 
> ```python
> try:
>     with open("nuevo_archivo.txt", "x") as f:
>         f.write("Archivo creado.")
> except FileExistsError:
>     print("Ya existe ese archivo.")
> ```
> 
> - **Modo binario (`'rb'`, `'wb'`)**:
> 
> ```python
> with open("imagen.jpg", "rb") as f:
>     datos = f.read()
> with open("copia.jpg", "wb") as f:
>     f.write(datos)
> ```
> 
> - **Leer y escribir (`'r+'`)**:
> 
> ```python
> with open("mi_archivo.txt", "r+") as f:
>     contenido = f.read()
>     f.write("\nNueva línea.")
> ```
> 
> ---
> 
> ## 📖 2. Métodos para leer archivos
> 
> | Método | ¿Qué hace? | Imagen mental |
> | --- | --- | --- |
> | `f.read()` | Lee todo | Comer todo el pastel 🎂 |
> | `f.readline()` | Lee una línea | Comer una rebanada 🍰 |
> | `f.readlines()` | Lista de líneas | Menú completo 📋 |
> 
> ```python
> with open("mi_archivo.txt", "r") as f:
>     primera = f.readline()
>     print(primera.strip())
>     todas = f.readlines()
>     print(todas)
>     f.seek(0)
>     for linea in f:
>         print(linea.strip())
> ```
> 
> ---
> 
> ## ✍️ 3. Métodos para escribir archivos
> 
> | Método | ¿Qué hace? | Imagen mental |
> | --- | --- | --- |
> | `f.write(texto)` | Escribir texto | Agregar una oración ✏️ |
> | `f.writelines(lista)` | Varias líneas | Escribir toda la carta |
> 
> ```python
> lineas = ["Primera línea.\n", "Segunda línea.\n"]
> with open("otro_archivo.txt", "w") as f:
>     f.writelines(lineas)
> ```
> 
> ---
> 
> ## 🤝 4. `with open(...)` — Tu mejor amigo
> 
> Usar `with` abre y **cierra automáticamente** el archivo aunque haya errores.
> 
> ```python
> with open("archivo.txt", "r") as f:
>     contenido = f.read()
> # Aquí ya está cerrado automáticamente
> ```
> 
> ---
> 
> ## 📍 5. Posicionamiento en archivos (`f.tell()` y `f.seek()`)
> 
> | Método | ¿Qué hace? | Imagen mental |
> | --- | --- | --- |
> | `f.tell()` | Dónde estás en el archivo | GPS interno 📍 |
> | `f.seek(offset, from_what)` | Moverse por el archivo | Cambiar de página 📖 |
> 
> ```python
> with open("datos.txt", "r+b") as f:
>     print(f.tell())      # Posición inicial    f.seek(5)            # Ir al byte 5    print(f.tell())
>     byte = f.read(1)     # Leer un byte    print(byte)
>     f.seek(-3, 2)        # Ir 3 bytes antes del final    print(f.tell())
> ```
> 
> Valores de `from_what`:
> - `0`: desde el inicio.
> - `1`: desde la posición actual.
> - `2`: desde el final.
> 
> ---
> 
> ## ⚡ 6. Manejo de errores con archivos
> 
> A veces pasan tragedias: archivo no existe, permisos bloqueados…
>