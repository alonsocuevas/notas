# Entorno_Virtual

# 🧪 Entornos virtuales

## Crear entorno

```bash
python -m venv env
```

## Activar

- Windows: `env\Scripts\activate`
- Unix: `source env/bin/activate`

## Instalar paquetes

```bash
pip install requests
```

> [!caution] Un entorno virtual en Python es un directorio aislado que contiene una instalación de Python específica, así como las bibliotecas y dependencias que necesita un proyecto en particular. La principal razón para usar entornos virtuales es aislar las dependencias de diferentes proyectos.
> 
> 
> **¿Por qué son importantes los entornos virtuales?**
> 
> - **Aislamiento de dependencias:** Diferentes proyectos pueden requerir diferentes versiones de las mismas bibliotecas. Sin un entorno virtual, instalar una biblioteca para un proyecto podría actualizar o romper la funcionalidad de otro proyecto que dependa de una versión diferente. Los entornos virtuales aseguran que cada proyecto tenga sus propias dependencias aisladas.
> - **Reproducibilidad:** Al compartir un proyecto, puedes incluir un archivo (`requirements.txt`) que liste todas las dependencias instaladas en tu entorno virtual. Otros desarrolladores pueden usar este archivo para recrear exactamente el mismo entorno y asegurarse de que el proyecto funcione correctamente en sus máquinas.
> - **Limpieza del sistema:** Los entornos virtuales mantienen tu instalación global de Python limpia, evitando la acumulación de bibliotecas que solo son necesarias para proyectos específicos.

> [!caution] Más sobre la Creación y Activación:
> 
> - **Creación con**  `venv`: El módulo `venv` es la herramienta estándar para crear entornos virtuales en Python 3. Como ya sabes, `python -m venv env` crea un directorio llamado `env` (puedes elegir otro nombre) que contiene una copia de Python, `pip` y otras herramientas esenciales.
> - **Activación:** La activación del entorno virtual modifica las variables de tu shell para que el intérprete de Python y las herramientas como `pip` que utilices apunten a la instalación dentro del entorno virtual, en lugar de a tu instalación global de Python. El nombre del entorno virtual (por ejemplo, `(env)`) suele aparecer al principio de tu prompt de la terminal cuando está activo.
> - **Desactivación:** Para salir de un entorno virtual y volver a tu instalación global de Python, simplemente ejecuta el comando `deactivate` en tu terminal (tanto en Windows como en Unix/macOS).

> [!caution] Gestión de Paquetes con pip:
> 
> 
> `pip` (Pip Installs Packages) es el gestor de paquetes estándar para Python. Ya conoces el comando básico `pip install <nombre_paquete>`. Aquí tienes otros comandos importantes:
> 
> - **Instalar una versión específica:** Puedes instalar una versión particular de un paquete especificando la versión con `==`:
> 
> ```bash
> pip install requests==2.25.1
> ```
> 
> - **Instalar un rango de versiones:** Puedes especificar rangos de versiones utilizando operadores como `>`, `<`, `>=`, `<=`, `!=`:
> 
> ```bash
> pip install requests>=2.20,<2.26
> ```
> 
> - **Desinstalar un paquete:**
> 
> ```bash
> pip uninstall requests
> ```
> 
> `pip` te preguntará si estás seguro antes de desinstalar el paquete. Puedes usar la opción `-y` o `--yes` para confirmar automáticamente:
> 

```
>
```

> pip uninstall -y requests
> 
> - **Listar los paquetes instalados:**
> 
> ```bash
> pip list
> ```
> 
> Esto muestra una lista de todos los paquetes instalados en el entorno virtual actual, junto con sus versiones.
> 
> - **Mostrar información sobre un paquete:**
> 
> ```bash
> pip show requests
> ```
> 
> Esto proporciona detalles sobre el paquete `requests`, como su versión, autor, dependencias, etc.
> 
> - **Generar el archivo** `requirements.txt`: Este archivo es crucial para la reproducibilidad. Lista todos los paquetes instalados en tu entorno virtual y sus versiones exactas. Puedes crearlo usando el siguiente comando:
> 
> ```bash
> pip freeze > requirements.txt
> ```
> 
> El contenido de `requirements.txt` se verá así:
> 
> ```
> certifi==2023.7.22
> charset-normalizer==3.1.0
> idna==3.4
> requests==2.31.0
> urllib3==2.0.3
> ```
> 
> - **Instalar paquetes desde** `requirements.txt`: Si tienes un archivo `requirements.txt` (por ejemplo, al clonar un proyecto), puedes instalar todas las dependencias necesarias con un solo comando:
> 
> ```bash
> pip install -r requirements.txt
> ```
> 

> [!caution] Otros Herramientas para la Gestión de Entornos y Paquetes:
> 
> 
> Aunque `venv` y `pip` son las herramientas estándar, existen otras alternativas que ofrecen funcionalidades adicionales:
> 
> - `conda`: Es un gestor de paquetes y entornos que se utiliza comúnmente en ciencia de datos y aprendizaje automático. Puede gestionar dependencias que no son paquetes de Python (como bibliotecas del sistema). Viene con la distribución Anaconda o Miniconda.
>     - Crear entorno: `conda create -n mi_entorno python=3.9`
>     - Activar: `conda activate mi_entorno`
>     - Desactivar: `conda deactivate`
>     - Instalar paquete: `conda install requests`
>     - Exportar dependencias: `conda env export > environment.yml`
>     - Crear entorno desde archivo: `conda env create -f environment.yml`
> - `poetry`: Es una herramienta que proporciona gestión de dependencias y empaquetado. Utiliza un archivo `pyproject.toml` para gestionar las dependencias y la información del proyecto.
>     - Crear proyecto: `poetry new mi_proyecto`
>     - Añadir dependencia: `poetry add requests`
>     - Activar shell dentro del entorno: `poetry shell`
>     - Exportar dependencias: `poetry export -f requirements.txt --without-hashes`
>     - Instalar dependencias: `poetry install`
> - `pipenv`: Es otra herramienta que busca simplificar la gestión de entornos virtuales y dependencias, combinando `pip` y `virtualenv` y utilizando un archivo `Pipfile` y `Pipfile.lock`.
>     - Crear entorno (si no existe): `pipenv --python 3.9`
>     - Activar entorno: `pipenv shell`
>     - Añadir dependencia: `pipenv install requests`
>     - Generar archivo de bloqueo: `pipenv lock`
>     - Instalar dependencias: `pipenv sync`

> [!caution] Buenas Prácticas con Entornos Virtuales:
> 
> - **Crea un entorno virtual para cada proyecto:** Esto asegura el aislamiento de las dependencias.
> - **Activa el entorno virtual antes de instalar cualquier paquete específico del proyecto.**
> - **Utiliza** `requirements.txt` **(o el formato de la herramienta que uses, como** `environment.yml` **para** `conda` **o** `Pipfile.lock` **para** `pipenv`/`poetry`) **para registrar las dependencias de tu proyecto.**
> - **Incluye el directorio del entorno virtual** (`env` **o** `.venv` **son nombres comunes) en tu archivo** `.gitignore` **si estás utilizando Git, para evitar subir las dependencias al repositorio.**

---

> [!example] Entornos Virtuales en Python: Peras, Manzanas y Proyectos Aislados 🛒📦
> 
> 
> Un **entorno virtual** en Python es como armar una mini burbuja aislada 🛡️: un directorio que contiene su propia instalación de Python + librerías necesarias **solo** para ese proyecto.
> 
> ---
> 
> ## 🚪 ¿Por qué usar entornos virtuales?
> 
> - **Aislamiento de dependencias**: Cada proyecto usa sus propias librerías sin pisar otras.
> - **Reproducibilidad**: Podés compartir un `requirements.txt` y otros podrán recrear tu entorno exacto.
> - **Mantener tu sistema limpio**: No llenás tu Python global de porquerías de proyectos.
> 
> ---
> 
> ## 🛠️ Creación y Activación de Entornos Virtuales
> 
> - **Crear entorno**:
> 
> ```bash
> python -m venv env
> ```
> 
> - **Activar**:
>     - Windows:
>     
>     ```bash
>     .\env\Scripts\activate
>     ```
>     
>     - Unix/macOS:
>     
>     ```bash
>     source env/bin/activate
>     ```
>     
> - Cuando está activo, tu terminal muestra el nombre `(env)`.
> - **Desactivar**:
> 
> ```bash
> deactivate
> ```
> 
> ---
> 
> ## 📦 Gestión de paquetes con pip
> 
> - **Instalar paquete**:
> 
> ```bash
> pip install requests
> ```
> 
> - **Instalar versión específica**:
> 
> ```bash
> pip install requests==2.25.1
> ```
> 
> - **Instalar rango de versiones**:
> 
> ```bash
> pip install requests>=2.20,<2.26
> ```
> 
> - **Desinstalar paquete**:
> 
> ```bash
> pip uninstall requests
> ```
> 
> (Usa `-y` para confirmar automáticamente)
> 
> - **Listar paquetes instalados**:
> 
> ```bash
> pip list
> ```
> 
> - **Mostrar info de un paquete**:
> 
> ```bash
> pip show requests
> ```
> 
> - **Generar archivo `requirements.txt`**:
> 
> ```bash
> pip freeze > requirements.txt
> ```
> 
> El archivo se verá algo así:
> 
> ```
> certifi==2023.7.22
> charset-normalizer==3.1.0
> idna==3.4
> requests==2.31.0
> urllib3==2.0.3
> ```
> 
> - **Instalar desde `requirements.txt`**:
> 
> ```bash
> pip install -r requirements.txt
> ```
> 
> ---
> 
> ## 🧰 Alternativas avanzadas: Otras herramientas
> 
> ### Conda (usado en ciencia de datos)
> 
> - **Crear entorno**:
> 
> ```bash
> conda create -n mi_entorno python=3.9
> ```
> 
> - **Activar entorno**:
> 
> ```bash
> conda activate mi_entorno
> ```
> 
> - **Desactivar**:
> 
> ```bash
> conda deactivate
> ```
> 
> - **Instalar paquete**:
> 
> ```bash
> conda install requests
> ```
> 
> - **Exportar dependencias**:
> 
> ```bash
> conda env export > environment.yml
> ```
> 
> - **Crear entorno desde archivo**:
> 
> ```bash
> conda env create -f environment.yml
> ```
> 
> ---
> 
> ### Poetry (manejo elegante de proyectos)
> 
> - **Crear proyecto**:
> 
> ```bash
> poetry new mi_proyecto
> ```
> 
> - **Añadir dependencia**:
> 
> ```bash
> poetry add requests
> ```
> 
> - **Activar shell**:
> 
> ```bash
> poetry shell
> ```
> 
> - **Exportar dependencias**:
> 
> ```bash
> poetry export -f requirements.txt --without-hashes
> ```
> 
> - **Instalar dependencias**:
> 
> ```bash
> poetry install
> ```
> 
> ---
> 
> ### Pipenv (combina pip + virtualenv)
> 
> - **Crear entorno**:
> 
> ```bash
> pipenv --python 3.9
> ```
> 
> - **Activar entorno**:
> 
> ```bash
> pipenv shell
> ```
> 
> - **Añadir dependencia**:
> 
> ```bash
> pipenv install requests
> ```
> 
> - **Generar archivo de bloqueo**:
> 
> ```bash
> pipenv lock
> ```
> 
> - **Instalar dependencias**:
> 
> ```bash
> pipenv sync
> ```
> 
> ---
> 
> ## 🌟 Buenas prácticas con entornos virtuales
> 
> - Crea un entorno virtual para **cada proyecto**.
> - **Activa** el entorno antes de instalar paquetes.
> - **Genera y usa** `requirements.txt`, `environment.yml` o `Pipfile.lock`.
> - **Ignora** la carpeta del entorno en Git (`.gitignore`):
> 
> ```
> env/
> .venv/
> ```
>