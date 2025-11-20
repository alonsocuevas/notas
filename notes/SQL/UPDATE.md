Para que el ejemplo del UPDATE funcione, primero necesitamos una tabla y algunos datos. Imaginemos una tabla llamada `Usuarios`.

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

## `UPDATE`: Modificar registros
Se usa para modificar registros existentes en una tabla.

**Sintaxis:**
```sql
UPDATE nombre_de_la_tabla SET columna1 = valor1, columna2 = valor2, ... WHERE condicion;
```
> **¡¡¡ADVERTENCIA!!!** Si olvidas la cláusula `WHERE`, ¡actualizarás **TODAS** las filas de la tabla!

**Ejemplo:** Cambiar el email del usuario con `id = 3`.
```sql
UPDATE Usuarios SET email = 'john.doe.new@example.com' WHERE id = 3;
```
Para verificar el cambio, podemos hacer un `SELECT`:
```sql
SELECT * FROM Usuarios WHERE id = 3;
```
**Resultado esperado:**
id | nombre   | email                    | pais
---|----------|--------------------------|------
3  | John Doe | john.doe.new@example.com | USA

---
