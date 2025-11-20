## `JOIN`: Combinar datos de múltiples tablas

La cláusula `JOIN` se usa para combinar filas de dos o más tablas basándose en una columna relacionada entre ellas.

Para estos ejemplos, imaginemos una segunda tabla llamada `Pedidos`:

```sql
CREATE TABLE IF NOT EXISTS Pedidos (
    pedido_id INT PRIMARY KEY,
    fecha DATE,
    total DECIMAL(10, 2),
    usuario_id INT
);

INSERT INTO Pedidos (pedido_id, fecha, total, usuario_id) VALUES (101, '2023-11-15', 150.50, 2);
INSERT INTO Pedidos (pedido_id, fecha, total, usuario_id) VALUES (102, '2023-11-16', 75.00, 3);
INSERT INTO Pedidos (pedido_id, fecha, total, usuario_id) VALUES (103, '2023-11-17', 200.00, 2);
INSERT INTO Pedidos (pedido_id, fecha, total, usuario_id) VALUES (104, '2023-11-18', 50.25, 5); -- Nota: usuario_id=5 no existe en la tabla Usuarios
```

### `INNER JOIN`: Solo filas coincidentes

Devuelve solo los registros que tienen valores coincidentes en ambas tablas. Es el tipo de `JOIN` más común.

**Sintaxis:**
```sql
SELECT T1.columna1, T2.columna2, ...
FROM tabla1 AS T1
INNER JOIN tabla2 AS T2 ON T1.columna_comun = T2.columna_comun;
```

**Ejemplo:** Obtener los usuarios y los pedidos que han realizado.
> Solo aparecerán los usuarios que hayan hecho al menos un pedido.

```sql
SELECT U.nombre, P.pedido_id, P.total
FROM Usuarios AS U
INNER JOIN Pedidos AS P ON U.id = P.usuario_id;
```
**Resultado esperado:**
| nombre     | pedido_id | total  |
|------------|-----------|--------|
| Ana Garcia | 101       | 150.50 |
| John Doe   | 102       | 75.00  |
| Ana Garcia | 103       | 200.00 |

### `LEFT JOIN` (o `LEFT OUTER JOIN`): Todas las filas de la izquierda, y las coincidentes de la derecha

Devuelve **todos** los registros de la tabla de la izquierda (`tabla1`) y los registros coincidentes de la tabla de la derecha (`tabla2`). Si no hay coincidencia, el resultado es `NULL` en las columnas de la tabla derecha.

**Sintaxis:**
```sql
SELECT T1.columna1, T2.columna2, ...
FROM tabla1 AS T1
LEFT JOIN tabla2 AS T2 ON T1.columna_comun = T2.columna_comun;
```

**Ejemplo:** Obtener **todos** los usuarios y sus pedidos, si es que tienen.
> Aparecerán todos los usuarios, incluso si no han hecho pedidos.

```sql
SELECT U.nombre, P.pedido_id, P.total
FROM Usuarios AS U
LEFT JOIN Pedidos AS P ON U.id = P.usuario_id;
```
**Resultado esperado:**
| nombre          | pedido_id | total  |
|-----------------|-----------|--------|
| Juan Perez      | NULL      | NULL   |
| Ana Garcia      | 101       | 150.50 |
| Ana Garcia      | 103       | 200.00 |
| John Doe        | 102       | 75.00  |
| Maria Rodriguez | NULL      | NULL   |