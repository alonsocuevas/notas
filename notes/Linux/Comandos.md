# Comandos Linux

> Mide velocidad de descarga, subida y latencia usando Speedtest.net.
> 
> 
> ```bash
> speedtest
> ```
> 

> [!abstract] Mide la velocidad de conexión (subida y bajada)
> 
> 
> ```bash
> speedtest-cli
> ```
> 

> [!abstract] Combina ping y traceroute para mostrar en tiempo real la latencia y pérdida de paquetes hacia google.com.
> 
> 
> ```bash
> mtr google.com
> ```
> 

> [!abstract] Envía 10 paquetes a google.com para medir latencia promedio y pérdida de paquetes.
> 
> 
> ```bash
> ping google.com -c 10
> ```
> 

> [!abstract] Muestra los saltos intermedios que los paquetes realizan para llegar a google.com, incluyendo latencia por cada salto.
> 
> 
> ```bash
> traceroute google.com
> ```
> 

> [!abstract] Mide la velocidad al descargar un archivo de 10 MB desde Cloudflare
> 
> 
> ```bash
> wget --output-document=/dev/null https://speed.cloudflare.com/__down?bytes=10485760
> ```
> 

> [!abstract] Verifica si el puerto 80 (HTTP) de google.com está abierto y accesible.
> 
> 
> ```bash
> nc -zv google.com 80
> ```
> 

> [!abstract] Realiza una prueba de ancho de banda hacia un servidor público compatible (bouygues.iperf.fr).
> 
> 
> ```bash
> iperf3 -c bouygues.iperf.fr
> ```
> 

> [!abstract] Ruta hacia mi escritorio
> 
> 
> ```bash
> /mnt/c/Users/alons/Desktop
> ```
> 

> [!abstract] Te mostrara una lista de redes wifi disponibles
> 
> 
> ```bash
> nmcli dev wifi
> ```
> 

> [!abstract] Detallara la conexión activa
> 
> 
> ```bash
> nmcli connection show --active
> ```
> 

> [!abstract] Lista los dispositivos USB conectados
> 
> 
> ```bash
> lsusb
> ```
> 

> [!abstract] Lista los dispositivos USB conectados y sus detalles
> 
> 
> ```bash
> lsusb -v
> ```
> 

> [! tip] Matar proceso en los puertos
> 
> 
> ```bash
> sudo kill -9 Codigo_de_Proceso
> ```
> 

> [!tip] Detalla la conexión activa
> 
> 
> ```bash
> nmcli connection show --active
> ```
> 

> [!abstract] Para renombrar una carpeta primero debes estar parado donde se encuentra esa capeta (NO ADENTRO).
> 
> 
> ```bash
> mv nombre_actual nombre_nuevo
> ```
> 

> [!success] Activar entorno virtual automaticamente para Python
Crear carpeta del proyecto
> 
> 
> ```bash
> mkdir ~/dev/mi_proyecto
> ```
> 
> ```bash
> cd ~/dev/mi_proyecto
> ```
> 
> **Crear entorno virtual**
> 
> ```bash
> python3 -m venv venv
> ```
> 
> **Crear** `.envrc` **y decirle que active el venv:**
> 
> ```bash
> echo "source ./venv/bin/activate" > .envrc
> ```
> 
> **Permitir a** `direnv` **cargar** `.envrc`:
> 
> ```bash
> direnv allow
> ```
> 

### 🖥️ 1. `htop`

> Monitor de procesos a todo color y en tiempo real (mejor que top).
> 

bash

CopiarEditar

`htop`

---

### 🎨 2. `neofetch`

> Muestra info del sistema con tu logo de distro en ASCII art.
> 

bash

CopiarEditar

`neofetch`

*Si no lo tienes:*

bash

CopiarEditar

`sudo apt install neofetch`

---

### 🐧 3. `screenfetch`

> Similar a neofetch, pero con otro estilo de arte ASCII.
> 

bash

CopiarEditar

`screenfetch`

---

### 🔥 4. `cmatrix`

> La “lluvia” de Matrix en tu terminal.
> 

bash

CopiarEditar

`cmatrix`

*Instalación:*

bash

CopiarEditar

`sudo apt install cmatrix`

---

### 🌍 5. `glances`

> Estadísticas del sistema en modo “dashboard” en vivo.
> 

bash

CopiarEditar

`glances`

*Instalación:*

bash

CopiarEditar

`sudo apt install glances`

---

### 📈 6. `gotop` o `bpytop`

> Monitor de recursos con gráficos animados. Estética 🔥.
> 

bash

CopiarEditar

`bpytop`

*Instalación en Ubuntu:*

bash

CopiarEditar

`sudo apt install bpytop`

---

### 📜 7. `lolcat`

> Colorea la salida de cualquier comando en arcoíris 🌈.
> 

bash

CopiarEditar

`echo "Linux es genial" | lolcat`

*Instalación:*

bash

CopiarEditar

`sudo apt install lolcat`

---

### 🧙‍♂️ 8. `cowsay` + `fortune` + `lolcat`

> Mensajes sabios (o absurdos) dichos por una vaca, ¡a colores!
> 

bash

CopiarEditar

`fortune | cowsay | lolcat`

*Instalación:*

bash

CopiarEditar

`sudo apt install fortune cowsay lolcat`

### 📉 4. `gping`

> Ping con gráfica animada en tiempo real.
> 

bash

CopiarEditar

`sudo snap install gping gping google.com`

### 🌍 8. `mapscii`

> Un mapa mundial interactivo… en la terminal 😮.
> 

bash

CopiarEditar

`telnet mapscii.me`

> (Sí, se ve como Google Maps en ASCII)
> 

### 💬 9. `nyancat`

> El mítico gatito arcoíris, corriendo por tu terminal.
> 

bash

CopiarEditar

`sudo apt install nyancat nyancat`

### 🧪 12. `vtop`

> Monitor interactivo con gráficas de CPU/RAM en formato web-style.
> 

bash

CopiarEditar

`sudo npm install -g vtop vtop`

> (Necesitas tener node y npm instalados)
> 

### 🔄 14. `tty-clock`

> Un reloj digital gigante para tu terminal.
> 

bash

CopiarEditar

`sudo apt install tty-clock tty-clock -c -s -C 6`

### 🎛️ 15. `bashtop` (versión anterior de `btop` pero aún sexy)

bash

CopiarEditar

`sudo apt install bashtop bashtop`

### 💥 17. `cbonsai`

> ¡Cultiva un bonsái virtual! Cada vez es diferente.
> 
> 
> Minimalista y relajante. 🪴
> 

bash

CopiarEditar

`sudo apt install cbonsai cbonsai`

### ⏱️ 20. `sl` (Steam Locomotive 🚂)

> ¿Te equivocaste al escribir ls? ¡Un tren animado te castiga!
> 

bash

CopiarEditar