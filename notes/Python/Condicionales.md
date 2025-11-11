# Condicionales

> [!tip] Condicionales
> 
> 
> ```python
> if condicion:
>   # bloqueelif otra_condicion:
>   # otro bloqueelse:
>   # bloque final
> ```
> 
> **Ejemplo**
> 
> ```python
> edad = 20if edad >= 18:
>   print("Mayor de edad")
> else:
>   print("Menor de edad")
> ```
> 

> [!tip] Ejemplos claves sobre los condicionales
- Evaluación Booleana: La condición que sigue a if o elif siempre debe ser una expresión que se evalúe a un valor booleano: True o False. Esto puede ser el resultado de una comparación, una variable booleana, o cualquier expresión que Python pueda interpretar como verdadero o falso.
- Bloques de Código: Los bloques de código que se ejecutan si una condición es verdadera están definidos por la indentación. Es crucial mantener la misma indentación (generalmente cuatro espacios) dentro de un bloque para que Python lo interprete correctamente.
- Ejecución Secuencial: Python evalúa las condiciones if y elif en orden. Tan pronto como una condición se evalúa como True, el bloque de código correspondiente se ejecuta y el resto de las condiciones (elif y else) se omiten.
- El Bloque else es Opcional: La parte else se ejecuta solo si ninguna de las condiciones if o elif anteriores fue verdadera. No es obligatorio tener un bloque else.
- Múltiples elif: Puedes tener tantos bloques elif como necesites para evaluar diferentes condiciones secuencialmente.
- Condicionales Anidados: Puedes colocar sentencias if, elif, y else dentro de otros bloques condicionales. Esto se conoce como condicionales anidados y puede ser útil para verificar condiciones más complejas.
> 

> [!success] Ejemplos adicionales para ilustrar los puntos claves:
Multiples elif
> 
> 
> ```python
> calificacion = 75if calificacion >= 90:
>   print("Sobresaliente")
> elif calificacion >= 80:
>   print("Notable")
> elif calificacion >= 70:
>   print("Aprobado")
> elif calificacion >= 60:
>   print("Suficiente")
> else:
>   print("Reprobado")
> ```
> 
> En este ejemplo, se evalúan varias condiciones para determinar la calificación basada en una puntuación. La primera condición que se cumpla hará que se ejecute su bloque de código correspondiente.
> 
> **Condicionales Anidados**
> 
> ```python
> tiene_licencia = Trueedad = 17if tiene_licencia:
>    if edad >= 18:
>        print("Puede conducir.")
>    else:
>        print("Tiene licencia, pero aún es menor de edad para conducir.")
> else:
>    print("No tiene licencia, no puede conducir.")
> ```
> 
> Aquí, la segunda condición (`edad >= 18`) solo se verifica si la primera condición (`tiene_licencia`) es verdadera.
> 
> **Evaluación Booleana Directa:**
> Si ya tienes una variable booleana, puedes usarla directamente en la condición `if` sin necesidad de una comparación explícita:
> `python es_estudiante = True if es_estudiante:    print("Tiene descuento de estudiante.") else:    print("No tiene descuento de estudiante.")`**Combinaciones de Condiciones con Operadores Lógicos**
> Puedes usar los operadores lógicos (`and`, `or`, `not`) para combinar múltiples condiciones en una sola sentencia `if` o `elif`:
> 
> ```python
> ingresos = 30000tiene_tarjeta_credito = Trueif ingresos > 25000 and tiene_tarjeta_credito:
>   print("Aprobado para el préstamo.")
> else:
>   print("No cumple con los requisitos para el préstamo.")
> es_fin_de_semana = Trueesta_lloviendo = Falseif es_fin_de_semana or not esta_lloviendo:
>   print("Es un buen día para salir.")
> else:
>   print("Mejor quedarse en casa.")
> ```
> 
> **Consideraciones Importantes:**
> 
> - **Legibilidad:** Aunque los condicionales anidados pueden ser útiles, demasiados niveles de anidación pueden hacer que tu código sea difícil de leer y mantener. En tales casos, considera refactorizar tu lógica utilizando operadores lógicos o dividiendo la lógica en funciones separadas.
> - **Eficiencia:** En algunos casos donde tienes muchas condiciones `elif`, podrías considerar el uso de estructuras de datos como diccionarios para mapear valores a acciones, lo que podría ser más eficiente y legible para un gran número de casos.
> 
> **Ejemplo de Alternativa con Diccionario (para casos específicos):**
> 
> ```python
> estado = "activo"acciones = {
>   "activo": "El usuario está activo.",
>   "inactivo": "El usuario está inactivo.",
>   "pendiente": "La cuenta está pendiente de activación."}
> if estado in acciones:
>   print(acciones[estado])
> else:
>   print("Estado desconocido.")
> ```
>