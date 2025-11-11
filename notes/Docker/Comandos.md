# Comandos Docker

> Lista de imágenes descargadas
> ```bash
> docker images
> ```
> 

> Descarga la ultima version de imagen de node.js disponible
> ```bash
> docker pull node
> ```
> 

> Descarga la imagen de node version 18
> ```bash
> docker pull node:18
> ```

> Descarga la imagen de MySQL
> ```bash
> docker pull mysql
> ```
> 

> Elimina la imagen, en este caso es la de node version 16
> ```bash
> docker image rm node:16
> ```
> 

> Esto es para crear un contenedor de mongo, previamente se debió descargar la imagen de mongo con el comando docker pull mongo
> ```bash
> docker create mongo
> ```
> 
> Esto entrega un ID como este:
> `f87fafa531aca031b92d99952e488fd6108e38f0a9beb59f3f0e9376aa026ec9`
> 
> **Luego para iniciar el contenedor se ejecuta esto :**
> 
> ```bash
> docker start f87fafa531aca031b92d99952e488fd6108e38f0a9beb59f3f0e9376aa026ec9
> ```
> 
> Este comanado se compone de la ID del contenedor
> 

> Es para detener el contenedor
> ```bash
> docker stop f87fafa531ac
> ```
> 
> **Se compone de la ID acortada del contenedor**
> 

> Esto muestra los contenedores en el sistema, sin importar si están o no en ejecución
> ```bash
> docker ps-a
> ```
> 

> Esto borra un contenedor pero aquí esta referenciado por el nombre que Docker le asigno a ese contenedor
> ```bash
> docker rm kind_borg
> ```
> 

> Creación de contendor con un nombre asignado por nosotros que hace referencia a la imagen de mongo previamente descargada
> ```bash
> docker create --name monguito mongo
> ```
> 

> Iniciar contenedor desde el nombre asignado por noostros
> ```bash
> docker start monguito
> ```
> 

> Para poder acceder un contenedor primero debemos mapear los puertos
> ```bash
> docker create -p27017:27017 --name monguito mongo
> ```
> 
> - `p27017` **Es el puerto donde instalamos docker**`:27017` **Es el puerto del contenedor que vamos a mapear con nuestra maquina**

> Podemos no especificar que puerto mapear de nuestra maquina haca el contenedor de docker
> ```bash
> docker create -p27017 --name monguito2 mongo
> ```
> 

> Esto visualiza los logs que a emitido un contenedor
> ```bash
> docker logs monguito
> ```
> 

> Esto se queda escuchando los logs que emita un contenedor
> ```bash
> docker logs --follow monguito
> ```
> 

> Hace todo lo anterior en una sola linea de comandos
> ```bash
> docker run --name monguito -p27017:27017 -d mongo
> ```
> 

> En este ejemplo
Para crear un contenedor de mongo en un proyecto primero ve a : https://hub.docker.com/_/mongo
y extrae los parámetros necesarios MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD
Luego
En la raíz de nuestro proyecto crear un archivo llamado: Dockerfile
con el siguinte codigo de ejemplo, Esto puede cambiar
> 
> 
> ```docker
> FROM node:18                         # hace referencia a la imagen que queremos utilizarRUN mkdir -p /home/app               # ruta dentro del mismo contenedorCOPY . /home/app                     # ruta donde se encuentra el codigo fuenteEXPOSE 3000                          # puerto que expondremosCMD ["node", "/home/app/index.js"]   # comando para que la app se ejecute
> ```
> 
> Luego ejecuta esto:
> 
> ```bash
> docker create -p27017:27017 --name monguito -e MONGO_INITDB_ROOT_USERNAME=nico -e MONGO_INITDB_ROOT_PASSWORD=password mongo
> ```
> 

> Lista las redes configuradas en docker
> ```bash
> docker network ls
> ```
> 

> Comando para crear una nueva red llamada mired
> 
> 
> ```bash
> docker network create mired
> ```
> 

> Comando para borrar una red llamada mired
> 
> 
> ```bash
> docker network rm mired
> ```
> 

> comando para crear imagenes en base a un archvo dockerfile creado previamente
> 
> 
> ```bash
> docker build -t miapp:1 .
> ```
> 
> EL comando `docker build` recibe dos argumentos:
> (el nombre que se le asignara a la imagen y su etiqueta o pack = **miapp:1**)
> y
> (la ruta donde se encuentra mi archivo Dockerfile = **.**)
> 

> Ahora cuando creemos nuestros contenedores tenemos que especificar que pertenecen a una red en especifico
> 
> 
> ```bash
> docker create -p2707:2707 --name monguito --network mired -e MONGO_INITDB_ROOT_USERNAME=nico -e MONGO_INITDB_ROOT_PASSWORD=password mongo
> ```
> 
> *Ahora vamos a crear el contenedor de la aplicación que acabamos de colocar dentro de una imagen*
> 
> ```bash
> docker create -p3000:3000 --name chanchito --network mired miapp:1
> ```
> 

> Esto muestra los logs del contenedorllamado chanchito
> 
> 
> ```bash
> docker logs chanchito
> ```
> 

> Para ahorrarse todo lo de arriba
Crea un archivo en la raiz de tu proyecto qe se llame docker-compose.yml
que contenga esto:
> 
> 
> ```yaml
> version: "3.9"services:chanchito: # nombre del contenedor a utilizar    build: . # esto quiere decir que : va a tener que construir la imagen que se encuentra dentro de esta misma ruta    ports:      - "3000:3000" # puerto de maquina host seguido del puerto del contenedor    links:      - monguito # el nombre del contenedor que querems mapear que utilice el contenedor de chanchitomonguito: # nombre del contenedor a utilizar    image: mongo # se indica en base a que iagen crea este contenedor    ports:      - "27017:27017" # puerto del anfitrion seguido del puerto del contenedor    environment: # variables de entorno que necesita el contenedor de mongo para crearce con exito      - MONGO_INITDB_ROOT_USERNAME=nico      - MONGO_INITDB_ROOT_PASSWORD=password    volumes: # esto es para indicarle al contenedor monguito los volúmenes que este va a utilizar      - mongo-data:/data/db # nombre del volumen previamente definido en este archivo unas líneas mas abajo acompañado de la ruta deldirectorio donde mongo guarda su datos de manera predeterminada      # mysql -> /var/lib/mysql      # postgres -> /var/lib/postgresql/datavolumes: # esto es para definir todos los volumenes que van a utilizar nuestros contenedoresmongo-data: # nombre que le asignamos a este volumen
> ```
> 
> Respetar las tabulaciones y espaciados para este archivo
> 

> Este comando es para ejecutar el archivo docker-compose.yml
> 
> 
> ```bash
> docker compose up
> ```
> 
> Para detener la ejecución de este comando se hace con el shortcut **Ctrl + C**
> 

> Este comando elimina los contenedores, imagen y red creados por compose
> 
> 
> ```bash
> docker compose down
> ```
> 

>Para configurar multiples ambientes y agilizar el desarrollo mientras trabajamos con docker En >la raíz de nuestro proyecto creamos un archivo llamado Dockerfile.dev y este archivo debe tener >esto por ejemplo:
> 
> 
> ```docker
> FROM node:18                  # hace referencia a la imagen que queremos utilizarRUN npm i -g nodemon          # este comando instala nodemonRUN mkdir -p /home/app        # ruta dentro del mismo contenedorWORKDIR /home/app             # ruta donde estaremos trabajandoEXPOSE 3000                   # puerto que expondremosCMD ["nodemon", "index.js"]   # comando para que la app se ejecute
> ```
> 
> Luego en la raiz de nuestro proyecto agregamos este otro archivo llamado
> **docker-compose-dev.yml**
> con este codigo :
> 
> ```yaml
> version: "3.9"services:chanchito: # nombre del contenedor a utilizar    build: # esto quiere decir que : va a tener que construir la imagen que se encuentra dentro de esta misma ruta      context: . # la ruta actual de donde se encuentra el archivo docker-compose-dev      dockerfile: Dockerfile.dev # construye la imagen de chanchito utilizando el archivo Dockerfile.dev    ports:      - "3000:3000" # puerto de maquina host seguido del puerto del contenedor    links:      - monguito # el nombre del contenedor que querems mapear que utilice el contenedor de chanchito    volumes:      - .:/home/app # (volumen anónimo = -), (montar la ruta actual al volumen = .) + (ruta de destino dentro del contenedor = :/home/app)monguito: # nombre del contenedor a utilizar    image: mongo # se indica en base a que iagen crea este contenedor    ports:      - "27017:27017" # puerto del anfitrion seguido del puerto del contenedor    environment: # variables de entorno que necesita el contenedor de mongo para crearce con exito      - MONGO_INITDB_ROOT_USERNAME=nico      - MONGO_INITDB_ROOT_PASSWORD=password    volumes: # esto es para indicarle al contenedor monguito los volúmenes que este va a utilizar      - mongo-data:/data/db # nombre del volumen previamente definido en este archivo unas líneas mas abajo acompañado de la ruta deldirectorio donde mongo guarda su datos de manera predeterminada      # mysql -> /var/lib/mysql      # postgres -> /var/lib/postgresql/datavolumes: # esto es para definir todos los volumenes que van a utilizar nuestros contenedoresmongo-data: # nombre que le asignamos a este volumen
> ```
> 
> Respetar las tabulaciones y espaciados para este archivo
>