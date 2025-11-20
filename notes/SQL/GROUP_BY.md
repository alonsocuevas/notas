# GROUP BY en SQL

La cláusula `GROUP BY` se utiliza en SQL para agrupar filas que tienen los mismos valores en columnas específicas en una única fila de resumen. Es una de las herramientas más poderosas para el análisis de datos porque, cuando se combina con funciones de agregación como `COUNT()`, `SUM()`, `AVG()`, etc., permite calcular métricas para cada grupo.

### Sintaxis Básica

```sql
SELECT
    columna_agrupadora,
    funcion_de_agregacion(columna_a_calcular)
FROM
    nombre_de_la_tabla
WHERE
    condicion -- (Opcional)
GROUP BY
    columna_agrupadora;
```

- **`SELECT columna_agrupadora`**: La columna por la que quieres agrupar los datos.
- **`funcion_de_agregacion(columna_a_calcular)`**: La operación que quieres realizar en cada grupo (contar, sumar, promediar, etc.).
- **`FROM nombre_de_la_tabla`**: La tabla de donde se obtienen los datos.
- **`GROUP BY columna_agrupadora`**: La cláusula que le dice a SQL cómo debe agrupar las filas.

---

### Ejemplo Práctico

Imaginemos que tenemos una tabla `Usuarios` con los siguientes datos:

| id | nombre          | pais   |
|----|-----------------|--------|
| 1  | Juan Perez      | México |
| 2  | Ana Garcia      | España |
| 3  | John Doe        | USA    |
| 4  | Maria Rodriguez | España |
| 5  | Carlos Lopez    | México |

Si queremos saber cuántos usuarios hay en cada país, no podemos simplemente hacer un `SELECT` normal. Necesitamos agrupar los datos por la columna `pais` y luego contar cuántos usuarios hay en cada uno de esos grupos.

#### Consulta SQL

```sql
SELECT
    pais,
    COUNT(id) AS total_usuarios
FROM
    Usuarios
GROUP BY
    pais;
```

#### Desglose de la Consulta:

1.  **`SELECT pais, COUNT(id) AS total_usuarios`**:
    *   `pais`: Seleccionamos la columna `pais` para que aparezca en el resultado y sepamos a qué grupo pertenece cada recuento.
    *   `COUNT(id)`: Usamos la función de agregación `COUNT()` para contar el número de filas (en este caso, por su `id`) dentro de cada grupo.
    *   `AS total_usuarios`: Le damos un alias (un nombre descriptivo) a la columna del resultado del conteo.

2.  **`FROM Usuarios`**:
    *   Indicamos que los datos provienen de la tabla `Usuarios`.

3.  **`GROUP BY pais`**:
    *   Esta es la parte clave. Le decimos a la base de datos que junte todas las filas que tengan el mismo valor en la columna `pais` en un solo grupo. Creará un grupo para 'México', uno para 'España' y uno para 'USA'.
    *   La función `COUNT(id)` se aplicará por separado a cada uno de estos grupos.

#### Resultado Esperado

La consulta anterior producirá el siguiente resultado, que resume la cantidad de usuarios por país:

| pais   | total_usuarios |
|--------|----------------|
| México | 2              |
| España | 2              |
| USA    | 1              |

Como puedes ver, `GROUP BY` nos ha permitido pasar de una lista de usuarios a un informe resumido y mucho más útil para el análisis.