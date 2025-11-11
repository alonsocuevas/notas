# Requests_y_APIs

# 🌐 APIs con requests

```python
import requests
r = requests.get("https://jsonplaceholder.typicode.com/posts")
data = r.json()
print(data[0])
```

## POST

```python
requests.post(url, json={"clave": "valor"})
```

## 🧠 ¿Qué es `requests` en Python?

Es una **librería que te permite hacer peticiones HTTP**, como cuando abres una página web, pero desde código.

Lo usás para:

- Acceder a datos de internet.
- Conectarte a APIs.
- Enviar formularios.
- Enviar y recibir datos (JSON).

Instalación (si no la tenés):

bash

CopiarEditar

`pip install requests`

---

## 🌐 ¿Y qué es una API?

Una API es una **puerta de entrada a datos y servicios**, como un menú de restaurante.

📌 Vos pedís algo (ej: “Dame los datos de Pikachu”) y la API responde con un archivo (JSON) con esa info.

Ejemplos:

- API de Pokémon → devuelve datos de pokémon.
- API del clima → te dice la temperatura actual.
- API de un banco → devuelve tus transacciones (si estás logueado, obvio).

---

## ✅ Primer ejemplo: hacer una solicitud `GET` a una API real

Vamos a usar la API de Pokémon (gratis y pública).

python

CopiarEditar

`import requests  url = "https://pokeapi.co/api/v2/pokemon/pikachu" respuesta = requests.get(url)  if respuesta.status_code == 200:     datos = respuesta.json()     print("Nombre:", datos["name"])     print("Altura:", datos["height"])     print("Peso:", datos["weight"]) else:     print("Error:", respuesta.status_code)`

🔎 ¿Qué hace?

- Se conecta a la URL.
- Verifica si el estado es 200 (éxito).
- Convierte la respuesta JSON en un diccionario.
- Muestra el nombre, altura y peso del Pokémon.

---

## 🤖 ¿Qué es una respuesta JSON?

Es un formato de datos. Se ve así:

json

CopiarEditar

`{   "name": "pikachu",   "height": 4,   "weight": 60 }`

En Python, eso se convierte en un diccionario con `respuesta.json()`.

---

## 💡 Ejercicio 1: Consultar un Pokémon por teclado

python

CopiarEditar

`import requests  pokemon = input("Escribe el nombre de un Pokémon: ").lower() url = f"https://pokeapi.co/api/v2/pokemon/{pokemon}"  respuesta = requests.get(url)  if respuesta.status_code == 200:     datos = respuesta.json()     print(f"\n{pokemon.capitalize()} tiene las siguientes habilidades:")     for habilidad in datos["abilities"]:         print("-", habilidad["ability"]["name"]) else:     print("Pokémon no encontrado.")`

✍️ Proba con: `bulbasaur`, `charizard`, `snorlax`.

---

## 📨 ¿Cómo enviar datos con `POST`?

Supongamos que queremos enviar un formulario a una API.

python

CopiarEditar

`import requests  url = "https://jsonplaceholder.typicode.com/posts"  datos = {     "title": "Hola Mundo",     "body": "Este es un post de prueba",     "userId": 1 }  respuesta = requests.post(url, json=datos)  print("Código:", respuesta.status_code) print("Respuesta:", respuesta.json())`

🎯 Esta API no guarda nada real, pero **simula cómo sería enviar datos a un servidor**.

---

## 🧠 Resumen mental:

| Acción | Código | ¿Para qué sirve? |
| --- | --- | --- |
| GET | `requests.get(url)` | Traer datos desde un servidor |
| POST | `requests.post(url, json=data)` | Enviar datos al servidor |
| Código HTTP | `respuesta.status_code` | Saber si fue exitoso |
| Leer JSON | `respuesta.json()` | Convertir la respuesta en diccionario |

---

## ⚠️ Errores comunes:

- Te olvidás de `.json()` y tratás de acceder a la respuesta como si ya fuera un dict.
- La URL está mal escrita (da error 404).
-