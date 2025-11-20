Para que el ejemplo del SELECT funcione, primero necesitamos una tabla y algunos datos. Imaginemos una tabla llamada `Usuarios`.

> **Nota:** `CREATE TABLE` es para crear la tabla. No es parte del ejercicio pero es necesario la explicacion.

```sql
CREATE TABLE IF NOT EXISTS Usuarios (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    email VARCHAR(50),
    pais VARCHAR(30)
);
```
> **Nota:** `INSERT` es para insertar datos en una tabla. No es parte de este ejercicio en particuar pero es necesaria la explicacion.

**Sintaxis:**
```sql
INSERT INTO nombre_de_la_tabla (columna1, columna2, ...) VALUES (valor1, valor2, ...);
```

**Ejemplo:** Añadimos 4 usuarios a nuestra tabla.
```sql
INSERT INTO Usuarios (id, nombre, email, pais) VALUES (1, 'Juan Perez', 'juan.perez@example.com', 'México');
INSERT INTO Usuarios (id, nombre, email, pais) VALUES (2, 'Ana Garcia', 'ana.garcia@example.com', 'España');
INSERT INTO Usuarios (id, nombre, email, pais) VALUES (3, 'John Doe', 'john.doe@example.com', 'USA');
INSERT INTO Usuarios (id, nombre, email, pais) VALUES (4, 'Maria Rodriguez', 'maria.r@example.com', 'España');
```

## `SELECT`: Consultar datos

Se usa para consultar y obtener datos de una tabla. Es la operación más común.

**Sintaxis básica:**
```sql
SELECT columna1, columna2, ... FROM nombre_de_la_tabla;
```

**Ejemplo 1: Obtener TODAS las columnas de TODOS los usuarios.**
> El asterisco (`*`) es un comodín que significa "todas las columnas".

```sql
SELECT * FROM Usuarios;
```
**Resultado esperado:**
id | nombre          | email                   | pais
---|-----------------|-------------------------|-------
1  | Juan Perez      | juan.perez@example.com  | México
2  | Ana Garcia      | ana.garcia@example.com  | España
3  | John Doe        | john.doe@example.com    | USA
4  | Maria Rodriguez | maria.r@example.com     | España

**Ejemplo 2: Obtener solo el `nombre` y el `email` de todos los usuarios.**
```sql
SELECT nombre, email FROM Usuarios;
```
**Resultado esperado:**
nombre          | email
----------------|-------------------------
Juan Perez      | juan.perez@example.com
Ana Garcia      | ana.garcia@example.com
John Doe        | john.doe@example.com
Maria Rodriguez | maria.r@example.com

**Ejemplo 3: Usando la cláusula `WHERE` para filtrar.**
> Obtener los usuarios que son de 'España'.

```sql
SELECT * FROM Usuarios WHERE pais = 'España';
```
**Resultado esperado:**

id | nombre          | email                   | pais
---|-----------------|-------------------------|-------
2  | Ana Garcia      | ana.garcia@example.com  | España
4  | Maria Rodriguez | maria.r@example.com     | España
---