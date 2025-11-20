Para que el ejemplo funcione, primero necesitamos una tabla y algunos datos. Imaginemos una tabla llamada `Usuarios`.

> **Nota:** `CREATE TABLE` es para crear la tabla. No es parte del ejercicio pero es necesario la explicacion.

```sql
CREATE TABLE IF NOT EXISTS Usuarios (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    email VARCHAR(50),
    pais VARCHAR(30)
);
```

---

## `INSERT`: Añadir nuevos registros

Se usa para añadir nuevos registros (filas) a una tabla.

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