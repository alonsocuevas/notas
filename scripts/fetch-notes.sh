#!/usr/bin/env bash

# --- Script para Obtener Notas desde un Repositorio Git ---
# Este script clona un repositorio Git que contiene los apuntes en formato Markdown
# y los coloca en la carpeta local `notes/`.

# --- Uso ---
# Ejecutar desde la raíz del proyecto:
# ./scripts/fetch-notes.sh <URL_DEL_REPOSITORIO_GIT>
# Ejemplo:
# ./scripts/fetch-notes.sh git@github.com:tu_usuario/mis_notas.git

# --- Configuración de Seguridad del Script ---
# `set -e`: Termina el script inmediatamente si un comando falla.
# `set -u`: Trata las variables no definidas como un error.
# `set -o pipefail`: Si un comando en una tubería falla, el código de salida de toda la tubería es el del comando que falló.
set -euo pipefail

# --- Variables ---
# `$1` es el primer argumento pasado al script (la URL del repositorio).
REPO_URL="$1"
# `TARGET_DIR` es la carpeta donde se clonará el repositorio.
TARGET_DIR="notes"

# --- Validación de Argumentos ---
# Comprueba si se proporcionó una URL de repositorio. Si no, muestra el uso correcto y sale.
if [ -z "$REPO_URL" ]; then
  echo "Uso: $0 <URL_DEL_REPOSITORIO_GIT>"
  exit 1
fi

# --- Limpieza del Directorio Anterior ---
# Si la carpeta `notes` ya existe, la elimina para asegurar una clonación limpia.
if [ -d "$TARGET_DIR" ]; then
  echo "Eliminando la carpeta existente $TARGET_DIR/..."
  rm -rf "$TARGET_DIR"
fi

# --- Clonación del Repositorio ---
echo "Clonando $REPO_URL en $TARGET_DIR..."
# `git clone`: Clona el repositorio.
# `--depth=1`: Realiza una clonación superficial, descargando solo el último commit para ahorrar tiempo y espacio.
git clone --depth=1 "$REPO_URL" "$TARGET_DIR"

# --- Mensaje Final ---
echo "¡Listo! Ahora puedes ejecutar la aplicación apuntando a este nuevo directorio de notas:"
echo "export NOTES_DIR=$(pwd)/$TARGET_DIR && npm run dev"
