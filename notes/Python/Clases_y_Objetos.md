# POO Clases y Objetos

# 🧱 Programación Orientada a Objetos

### Clase y objeto

```python
class Persona:
    def __init__(self, nombre):
        self.nombre = nombre
    def saludar(self):
        print(f"Hola, soy {self.nombre}")
juan = Persona("Juan")
juan.saludar()
```

### **Herencia**

```python
class Estudiante(Persona):
    def estudiar(self):
        print(f"{self.nombre} está estudiando.")
```

<aside>

La POO es un paradigma de programación que se basa en la idea de organizar el código en torno a “objetos”. Estos objetos combinan datos (atributos o propiedades) y el código para manipular esos datos (métodos o comportamientos). Los principales pilares de la POO son:

</aside>

### Clases y Objetos:

1. Clase: 
    
    Es un plano o plantilla para crear objetos. Define la estructura (atributos) y el comportamiento (métodos) que tendrán los objetos de esa clase.
    Objeto (Instancia): Es una realización concreta de una clase. Cada objeto creado a partir de una clase tendrá sus propios valores para los atributos definidos en la clase y podrá utilizar los métodos de la clase.
    
2. **Herencia:** 
    
    Es un mecanismo que permite crear nuevas clases (clases derivadas o subclases) basadas en clases existentes (clases base o superclases). La subclase hereda los atributos y métodos de la superclase, lo que fomenta la reutilización de código y la creación de jerarquías de clases.
    
3. **Encapsulamiento:** 
    
    Consiste en ocultar los detalles internos de un objeto y exponer solo una interfaz pública para interactuar con él. Esto protege los datos del objeto de modificaciones externas no deseadas y facilita la abstracción. En Python, el encapsulamiento se logra mediante convenciones de nomenclatura (como usar un prefijo de guion bajo _ para indicar atributos “protegidos” y doble guion bajo __ para atributos “privados” - aunque la privacidad es más una convención que una restricción estricta).
    
4. **Polimorfismo:** 
    
    Significa “muchas formas”. En POO, se refiere a la capacidad de objetos de diferentes clases de responder al mismo método de manera diferente. Esto permite escribir código más genérico y flexible.
    

### Explorando más sobre Clases y Objetos:

- **El método** `__init__` **(Constructor):** Como ya sabes, `__init__` es un método especial que se llama automáticamente cuando se crea un nuevo objeto de la clase. Se utiliza para inicializar los atributos del objeto. El primer parámetro de `__init__` siempre es `self`, que hace referencia a la instancia del objeto que se está creando.
- **Atributos de instancia:** Son variables que pertenecen a un objeto específico. Cada objeto de la misma clase puede tener valores diferentes para sus atributos de instancia. Se acceden utilizando la notación de punto (`objeto.atributo`).
- **Métodos de instancia:** Son funciones que pertenecen a una clase y operan sobre los atributos de los objetos de esa clase. El primer parámetro de un método de instancia siempre es `self`. Se llaman utilizando la notación de punto (`objeto.metodo()`).
- Atributos de clase: Son variables que pertenecen a la clase en sí, en lugar de a una instancia específica. Todos los objetos de esa clase compartirán el mismo valor para los atributos de clase. Se definen dentro de la clase pero fuera de cualquier método y se acceden utilizando el nombre de la clase o a través de una instancia (aunque esto último puede ser confuso si se modifican).

```python
class Perro:
    especie = "Canino"  # Atributo de clase      
    
        def __init__(self, nombre):
            self.nombre = nombre  # Atributo de instancia
fido = Perro("Fido")
rex = Perro("Rex")

print(fido.especie)  # Accediendo al atributo de clase a través de la instancia
print(rex.especie)   # Accediendo al atributo de clase a través de otra instancia
print(Perro.especie) # Accediendo al atributo de clase directamente desde la clase

Perro.especie = "Mamífero" # Modificando el atributo de clase

print(fido.especie)  # El cambio se refleja en todas las instancias
print(rex.especie)
```

- **Métodos de clase:** Son métodos que están vinculados a la clase y no a la instancia del objeto. Se definen utilizando el decorador `@classmethod`. El primer parámetro de un método de clase es `cls`, que hace referencia a la clase misma. Se utilizan a menudo para crear métodos de fábrica (constructores alternativos).

```python
class Circulo:
    def __init__(self, radio):
        self.radio = radio
        
    def calcular_area(self):
        return 3.14159 * self.radio ** 2  
        
    @classmethod  
    def crear_desde_diametro(cls, diametro):
        radio = diametro / 2      
        return cls(radio)  
        # Llama al constructor de la clase (Circulo)
        
circulo1 = Circulo(5)
print(circulo1.calcular_area())

circulo2 = Circulo.crear_desde_diametro(10)
print(circulo2.radio) 
print(circulo2.calcular_area())
```

- **Métodos estáticos:** Son métodos que están definidos dentro de una clase pero no tienen acceso ni a la instancia (`self`) ni a la clase (`cls`). Son como funciones regulares que están lógicamente agrupadas dentro de la clase. Se definen utilizando el decorador `@staticmethod`.

```python
class Calculadora:
  @staticmethod  def sumar(a, b):
      return a + b
  @staticmethod  def restar(a, b):
      return a - b
resultado_suma = Calculadora.sumar(5, 3)
print(resultado_suma)
resultado_resta = Calculadora.restar(10, 4)
print(resultado_resta)
```

### Profundizando en la Herencia:

- **El método** `super()`**:** Se utiliza en las clases derivadas para llamar a métodos de la clase base. Es especialmente útil cuando una subclase redefine un método de la superclase y quiere extender su funcionalidad en lugar de reemplazarla por completo.

```python
class Animal:
  def __init__(self, nombre):
      self.nombre = nombre
  def hacer_sonido(self):
      print("Sonido genérico de animal")
  class Gato(Animal):
  def __init__(self, nombre, raza):
      super().__init__(nombre)  # Llama al constructor de la clase base      self.raza = raza
  def hacer_sonido(self):
      super().hacer_sonido() # Llama al método de la clase base      print("Miau!")
michi = Gato("Michi", "Siamese")
michi.hacer_sonido()
```

- **Herencia múltiple:** Python permite que una clase herede de múltiples clases base. Esto puede ser poderoso pero también puede llevar a problemas de ambigüedad (el “problema del diamante”). El orden en que se listan las clases base en la definición de la subclase determina el orden de búsqueda de atributos y métodos (Method Resolution Order - MRO).

```python
class Padre:
  def habilidad_padre(self):
      print("Habilidad del padre")
class Madre:
  def habilidad_madre(self):
      print("Habilidad de la madre")
class Hijo(Padre, Madre):
  def habilidad_hijo(self):
      print("Habilidad del hijo")
junior = Hijo()
junior.habilidad_padre()
junior.habilidad_madre()
junior.habilidad_hijo()
```

### Encapsulamiento (Convenciones en Python):

- **Atributos “protegidos” (**`_nombre_atributo`**):** Un guion bajo al principio del nombre de un atributo sugiere que no debe ser accedido o modificado directamente desde fuera de la clase. Es una convención de estilo, pero Python no lo impide estrictamente.
- **Atributos “privados” (**`__nombre_atributo`**):** Dos guiones bajos al principio del nombre de un atributo activan la “**name mangling**” de Python. El nombre del atributo se renombra internamente para hacerlo más difícil de acceder desde fuera de la clase (aunque aún es posible). Esto proporciona una forma más fuerte de encapsulamiento, aunque no es una privacidad absoluta.

```python
class CuentaBancaria:
  def __init__(self, saldo):
      self._saldo = saldo  # Atributo protegido      self.__clave_secreta = "clave123" # Atributo privado  def mostrar_saldo(self):
      print(f"Saldo: {self._saldo}")
  def intentar_acceder_clave(self):
      print(f"Intentando acceder a la clave: {self.__clave_secreta}")
cuenta = CuentaBancaria(1000)
cuenta.mostrar_saldo()
print(cuenta._saldo) # Se puede acceder, pero no se recomienda# print(cuenta.__clave_secreta) # Generará un AttributeErrorprint(cuenta._CuentaBancaria__clave_secreta) # Acceso "forzado" (name mangling) - no recomendado
```

### Polimorfismo:

El polimorfismo se manifiesta cuando objetos de diferentes clases responden al mismo método de manera adecuada a su tipo.

```python
class Pajaro:
  def volar(self):
      print("El pájaro está volando.")
class Avion:
  def volar(self):
      print("El avión está volando por el cielo.")
def hacer_volar(volador):
  volador.volar()
pajaro = Pajaro()
avion = Avion()
hacer_volar(pajaro) # Llama al método volar de la clase Pajarohacer_volar(avion)  # Llama al método volar de la clase Avion
```

En este ejemplo, la función `hacer_volar` puede tomar un objeto de la clase `Pajaro` o `Avion`, y llamará al método `volar()` de ese objeto, ejecutando el comportamiento específico de cada clase.

<aside>

**En resumen, la POO en Python te permite modelar el mundo real en tu código utilizando clases y objetos, organizar tu código de manera lógica, reutilizar funcionalidades a través de la herencia, proteger la integridad de los datos con el encapsulamiento y escribir código flexible que se adapta a diferentes tipos de objetos mediante el polimorfismo.**

</aside>

<aside>

## 🍎 **¿Qué es la POO?**

[🍎](data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==)

Imagínate que quieres organizar un supermercado.

En vez de tener **todo tirado por ahí** 🍌🍟🍗🍅, **clasificas las cosas**: frutas en un lado, carnes en otro, cereales aparte.

Así mismo:

- En **POO** vos **organizas el código en torno a “objetos”**.
- Un **objeto** tiene:
    - **Datos** = (las cosas que sabe) = **atributos**.
    - **Acciones** = (las cosas que hace) = **métodos**.

[🍌](data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==)

[🍟](data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==)

[🍗](data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==)

[🍅](data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==)

</aside>

---

# 🌟 Clases y Objetos

- **Clase**: Es como el **plano** de una casa. 🏠
    
    (Define cómo debería ser cualquier casa: puertas, ventanas, etc.)
    
- **Objeto**: Es **una casa real construida** usando ese plano.

**Ejemplo en Python:**

```python
class Perro: def __init__(self, nombre): self.nombre = nombre def ladrar(self):
print(f"{self.nombre} dice: ¡Guau!")
```

Crear un objeto:

```python
mi_perro = Perro("Fido") mi_perro.ladrar()
```

✅ **Clase** = molde.

✅ **Objeto** = cosa viva hecha a partir del molde.

---

# 🌟 Herencia

¿Te imaginas que en vez de inventar todo de nuevo, **heredás** cosas de tu familia? 🧬

- En POO **una clase puede heredar** atributos y métodos de otra clase.

**Ejemplo:**

```python
class Animal: def respirar(self): print("Respirando...") class Perro(Animal): def ladrar(self):
print("¡Guau!")
```

```python
mi_perro = Perro() mi_perro.respirar()  # heredado mi_perro.ladrar()    # propio
```

✅ El perro **heredó** la habilidad de respirar.

---

# 🌟 Encapsulamiento

Imagínate que en el supermercado hay **puertas secretas** 🚪 donde solo los empleados pueden entrar.

- En POO **encapsulas datos** para que no cualquiera los toque.

En Python:

- **`_variable`**: es **protegido** (deberías tratarlo con respeto, pero no está prohibido).
- **`__variable`**: es **privado** (Python lo esconde un poco para protegerlo).

**Ejemplo:**

```python
class Cuenta:     def __init__(self, saldo):         self._saldo = saldo         self.__clave = "secreta"      def ver_saldo(self):         print(self._saldo)
```

Acceder:

```python
cuenta = Cuenta(1000) print(cuenta._saldo)               # Se puede, pero no deberías. print(cuenta._Cuenta__clave)        # Hack feo.
```

✅ El encapsulamiento es **para proteger tus datos**.

---

# 🌟 Polimorfismo

**Poli** = muchas.

**Morfismo** = formas.

- En POO **distintos objetos pueden hacer “lo mismo” de maneras distintas**.

**Ejemplo:**

```python
class Pajaro:     def volar(self):         print("El pájaro vuela.")  class Avion:     def volar(self):         print("El avión vuela.")  def hacer_volar(cosa):     cosa.volar()
```

```python
hacer_volar(Pajaro()) hacer_volar(Avion())
```

✅ Diferentes objetos **responden al mismo método** pero **de su manera**.

---

# 🌟 `__init__`: el constructor

Cada vez que **creás un objeto**, **se llama automáticamente** a `__init__`.

```python
class Perro:     def __init__(self, nombre):         self.nombre = nombre
```

- `self`: se refiere **al objeto que estás creando**.

---

# 🌟 Atributos de instancia vs Atributos de clase

- **Atributo de instancia**: cada objeto tiene su propio valor.
- **Atributo de clase**: todos los objetos comparten el mismo valor.

```python
class Perro:     especie = "Canino"  # atributo de clase      def __init__(self, nombre):         self.nombre = nombre  # atributo de instancia
```

```python
fido = Perro("Fido") rex = Perro("Rex")  print(fido.especie)  # "Canino" print(rex.especie)   # "Canino"
```

Si cambio `Perro.especie = "Mamífero"`, se actualiza para todos.

---

# 🌟 Métodos de clase y estáticos

**Método de clase** (`@classmethod`):

- Trabaja con la **clase** (no con la instancia).
- Usa `cls` en vez de `self`.

```python
class Circulo:     @classmethod     def crear_desde_diametro(cls, diametro):         radio = diametro / 2         return cls(radio)
```

**Método estático** (`@staticmethod`):

- **No necesita** ni instancia ni clase.
- Es **solo una función que vive en la clase** por organización.

```python
class Calculadora:     @staticmethod     def sumar(a, b):         return a + b
```

---

# 🌟 Herencia múltiple

Una clase puede **heredar de varias clases**:

```python
class Padre:     def habilidad_padre(self):         print("Padre")  class Madre:     def habilidad_madre(self):         print("Madre")  class Hijo(Padre, Madre):     def habilidad_hijo(self):         print("Hijo")
```

✅ Junior hereda todo.

---

# 🌟 `super()`

Cuando una subclase quiere **usar algo de la clase base**, usa `super()`.

```python
class Animal:     def sonido(self):         print("Sonido de animal")  class Gato(Animal):     def sonido(self):         super().sonido()         print("Miau!")
```

✅ Así extendés comportamientos, no los borrás.

---

# 🧠 Resumen rápido

| Concepto | Imagen Mental |
| --- | --- |
| Clase | Plano de casa |
| Objeto | Casa construida |
| Herencia | Heredar talentos de tus padres |
| Encapsulamiento | Puertas secretas en supermercado |
| Polimorfismo | Diferentes cosas volando a su manera |
| `__init__` | El constructor que te da vida |
| Método de clase | Trabajo de la clase |
| Método estático | Función suelta dentro de la clase |
|  |  |

---

> [!example] Programación Orientada a Objetos (POO) en Python: Peras, Manzanas y Supermercados 🍎🍌🍍
> 
> 
> La **POO** organiza el código alrededor de **objetos**: cosas que tienen **datos** (atributos) y **acciones** (métodos).
> 
> ---
> 
> ## 🍎 Clases y Objetos
> 
> - **Clase**: El **plano** para construir algo (ejemplo: plano de casa 🏠).
> - **Objeto**: Una **casa real** creada usando ese plano.
> 
> ```python
> class Perro:
>     def __init__(self, nombre):
>         self.nombre = nombre
>     def ladrar(self):
>         print(f"{self.nombre} dice: ¡Guau!")
> ```
> 
> Crear un objeto:
> 
> ```python
> mi_perro = Perro("Fido")
> mi_perro.ladrar()
> ```
> 
> ---
> 
> ## 🧬 Herencia
> 
> - Permite crear una clase basada en otra (hijos heredan talentos de sus padres).
> 
> ```python
> class Animal:
>     def respirar(self):
>         print("Respirando...")
> class Perro(Animal):
>     def ladrar(self):
>         print("¡Guau!")
> ```
> 
> ```python
> mi_perro = Perro()
> mi_perro.respirar()
> mi_perro.ladrar()
> ```
> 
> ---
> 
> ## 🚪 Encapsulamiento
> 
> - Protege datos internos del objeto.
> - `_atributo` → protegido (acceso respetuoso).
> - `__atributo` → privado (más difícil de acceder).
> 
> ```python
> class Cuenta:
>     def __init__(self, saldo):
>         self._saldo = saldo
>         self.__clave = "secreta"    def ver_saldo(self):
>         print(self._saldo)
> ```
> 
> Accediendo:
> 
> ```python
> cuenta = Cuenta(1000)
> print(cuenta._saldo)  # Se puede pero no se recomiendaprint(cuenta._Cuenta__clave)  # Hack feo
> ```
> 
> ---
> 
> ## 🎭 Polimorfismo
> 
> - Mismo método, diferentes comportamientos.
> 
> ```python
> class Pajaro:
>     def volar(self):
>         print("El pájaro vuela.")
> class Avion:
>     def volar(self):
>         print("El avión vuela.")
> def hacer_volar(cosa):
>     cosa.volar()
> ```
> 
> ```python
> hacer_volar(Pajaro())
> hacer_volar(Avion())
> ```
> 
> ---
> 
> ## 🏗️ `__init__`: Constructor de objetos
> 
> - Se ejecuta automáticamente al crear un objeto.
> - `self` referencia al objeto recién creado.
> 
> ```python
> class Perro:
>     def __init__(self, nombre):
>         self.nombre = nombre
> ```
> 
> ---
> 
> ## 📦 Atributos de instancia vs Atributos de clase
> 
> - **Atributo de instancia**: Cada objeto tiene su propio valor.
> - **Atributo de clase**: Todos los objetos comparten el mismo valor.
> 
> ```python
> class Perro:
>     especie = "Canino"  # atributo de clase    def __init__(self, nombre):
>         self.nombre = nombre
> ```
> 
> ```python
> fido = Perro("Fido")
> rex = Perro("Rex")
> print(fido.especie)
> print(rex.especie)
> ```
> 
> Cambiar atributo de clase:
> 
> ```python
> Perro.especie = "Mamífero"print(fido.especie)
> print(rex.especie)
> ```
> 
> ---
> 
> ## 🛠️ Métodos de clase y métodos estáticos
> 
> **Método de clase (`@classmethod`)**:
> 
> ```python
> class Circulo:
>     @classmethod    def crear_desde_diametro(cls, diametro):
>         radio = diametro / 2        return cls(radio)
> ```
> 
> **Método estático (`@staticmethod`)**:
> 
> ```python
> class Calculadora:
>     @staticmethod    def sumar(a, b):
>         return a + b
> ```
> 
> ---
> 
> ## 👪 Herencia múltiple
> 
> - Una clase puede heredar de varias clases.
> 
> ```python
> class Padre:
>     def habilidad_padre(self):
>         print("Padre")
> class Madre:
>     def habilidad_madre(self):
>         print("Madre")
> class Hijo(Padre, Madre):
>     def habilidad_hijo(self):
>         print("Hijo")
> ```
> 
> ```python
> junior = Hijo()
> junior.habilidad_padre()
> junior.habilidad_madre()
> junior.habilidad_hijo()
> ```
> 
> ---
> 
> ## 🧙‍♂️ `super()`: Usar funcionalidades de la clase padre
> 
> ```python
> class Animal:
>     def sonido(self):
>         print("Sonido de animal")
> class Gato(Animal):
>     def sonido(self):
>         super().sonido()
>         print("Miau!")
> ```
> 
> ```python
> michi = Gato()
> michi.sonido()
> ```
> 
> ---
> 
> ## 🧠 Resumen final
> 
> - **Clase** = plano de la casa.
> - **Objeto** = casa construida.
> - **Herencia** = hijos heredan talentos.
> - **Encapsulamiento** = puertas secretas.
> - **Polimorfismo** = diferentes formas de actuar.
> - **Método de clase** = trabaja con la clase.
> - **Método estático** = función suelta adentro.
> -