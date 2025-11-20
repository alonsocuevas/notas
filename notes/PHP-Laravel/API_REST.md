# API REST con PHP y Laravel — Guía completa (desde cero)

> Objetivo: aprender a crear y consumir una API REST con Laravel paso a paso.

---

## Introducción

Esta guía te llevará desde la instalación del entorno hasta la creación de una API REST completa con Laravel: modelos, migraciones, controladores, rutas, validación, recursos (transformers), autenticación con Sanctum, pruebas y buenas prácticas.

La explicación está pensada para seguirla en tu máquina y copiar/pegar comandos y fragmentos de código.

## Requisitos previos

- Sistema: Linux / macOS / Windows con WSL
- PHP >= 8.1 (recomendado 8.2+)
- Composer
- MySQL / MariaDB o PostgreSQL
- Node.js + npm (opcional, para assets)
- Git (opcional)

Comprobar versiones:

```bash
php -v
composer -V
mysql --version
```

---

## 1. ¿Qué es una API REST? (breve)

- REST es un estilo arquitectónico que usa HTTP para exponer recursos.
- Verbos principales: `GET`, `POST`, `PUT`/`PATCH`, `DELETE`.
- Formato de intercambio recomendado: JSON.
- Convención de rutas: usar nombres de recursos en plural `/api/posts`.

---

## 2. Crear un proyecto Laravel nuevo

Instalar un proyecto nuevo con Composer:

```bash
composer create-project laravel/laravel ejemplo-api
cd ejemplo-api
php artisan serve
```

Accede a `http://127.0.0.1:8000` para comprobar que funciona.

---

## 3. Configurar la base de datos

En el archivo `.env` configura los datos de la conexión:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ejemplo_api
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_password
```

Crear la base de datos (ejemplo MySQL):

```sql
CREATE DATABASE ejemplo_api;
```

Ejecutar migraciones base:

```bash
php artisan migrate
```

---

## 4. Migraciones, modelo y controlador para `Post`

Generar modelo y migración:

```bash
php artisan make:model Post -m
```

Edita la migración en `database/migrations/...create_posts_table.php`:

```php
public function up()
{
	Schema::create('posts', function (Blueprint $table) {
		$table->id();
		$table->string('title');
		$table->text('content')->nullable();
		$table->timestamps();
	});
}
```

Ejecuta las migraciones:

```bash
php artisan migrate
```

Crear un controlador tipo resource para API:

```bash
php artisan make:controller Api/PostController --api --model=Post
```

Esto crea los métodos `index, store, show, update, destroy` listos para implementar.

---

## 5. Rutas API

En `routes/api.php` añade:

```php
use App\Http\Controllers\Api\PostController;

Route::apiResource('posts', PostController::class);
```

Rutas generadas:

- `GET /api/posts` -> index
- `POST /api/posts` -> store
- `GET /api/posts/{post}` -> show
- `PUT/PATCH /api/posts/{post}` -> update
- `DELETE /api/posts/{post}` -> destroy

---

## 6. Implementar CRUD en el controlador

Ejemplo de implementación mínima en `app/Http/Controllers/Api/PostController.php`:

```php
namespace App\Http\Controllers\Api;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;

class PostController extends Controller
{
	public function index()
	{
		$posts = Post::latest()->paginate(10);
		return PostResource::collection($posts);
	}

	public function store(Request $request)
	{
		$validated = $request->validate([
			'title' => 'required|string|max:255',
			'content' => 'nullable|string',
		]);

		$post = Post::create($validated);
		return new PostResource($post);
	}

	public function show(Post $post)
	{
		return new PostResource($post);
	}

	public function update(Request $request, Post $post)
	{
		$validated = $request->validate([
			'title' => 'sometimes|required|string|max:255',
			'content' => 'nullable|string',
		]);

		$post->update($validated);
		return new PostResource($post);
	}

	public function destroy(Post $post)
	{
		$post->delete();
		return response()->json(null, 204);
	}
}
```

Y en `app/Models/Post.php` asegúrate de permitir asignación masiva:

```php
class Post extends Model
{
	protected $fillable = ['title', 'content'];
}
```

---

## 7. API Resources (Transformers)

Crear un resource para controlar la salida JSON:

```bash
php artisan make:resource PostResource
```

En `app/Http/Resources/PostResource.php`:

```php
public function toArray($request)
{
	return [
		'id' => $this->id,
		'title' => $this->title,
		'content' => $this->content,
		'created_at' => $this->created_at->toDateTimeString(),
		'updated_at' => $this->updated_at->toDateTimeString(),
	];
}
```

Ventaja: mantener la respuesta consistente y añadir meta o enlaces fácilmente.

---

## 8. Validación con Form Requests

Crear un Form Request para separar la lógica de validación:

```bash
php artisan make:request StorePostRequest
```

En `app/Http/Requests/StorePostRequest.php`:

```php
public function rules()
{
	return [
		'title' => 'required|string|max:255',
		'content' => 'nullable|string',
	];
}
```

Usarlo en el controlador:

```php
use App\Http\Requests\StorePostRequest;

public function store(StorePostRequest $request)
{
	$post = Post::create($request->validated());
	return new PostResource($post);
}
```

Laravel devolverá errores en JSON si la petición indica `Accept: application/json`.

---

## 9. Autenticación API con Laravel Sanctum

Instalar y publicar Sanctum:

```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

Uso típico (tokens personales):

- En el login, generar token:

```php
$token = $user->createToken('api-token')->plainTextToken;
```

- Proteger rutas con middleware `auth:sanctum`:

```php
Route::middleware('auth:sanctum')->group(function () {
	Route::apiResource('posts', PostController::class);
});
```

- Petición con token:

```
Authorization: Bearer <token>
```

Para SPA con cookies seguir la guía oficial de Sanctum e incluir `EnsureFrontendRequestsAreStateful` cuando corresponda.

---

## 10. Factories y Seeders (para datos de prueba)

Crear factory:

```bash
php artisan make:factory PostFactory --model=Post
```

Ejemplo `database/factories/PostFactory.php`:

```php
public function definition()
{
	return [
		'title' => $this->faker->sentence,
		'content' => $this->faker->paragraph,
	];
}
```

Seeder:

```bash
php artisan make:seeder PostSeeder
# en PostSeeder: Post::factory()->count(50)->create();
php artisan db:seed --class=PostSeeder
```

---

## 11. Pruebas automáticas

Crear pruebas de funcionalidad (feature tests):

```bash
php artisan make:test PostApiTest
```

Ejemplo:

```php
public function test_can_list_posts()
{
	Post::factory()->count(5)->create();
	$response = $this->getJson('/api/posts');
	$response->assertStatus(200)
			 ->assertJsonStructure(['data','links','meta']);
}
```

Correr tests:

```bash
php artisan test
```

---

## 12. Consumir la API: `curl` y Postman

Ejemplos con `curl`:

Listar posts:

```bash
curl -s http://127.0.0.1:8000/api/posts | jq
```

Crear post:

```bash
curl -X POST http://127.0.0.1:8000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"Hola","content":"Contenido"}'
```

Con token Bearer:

```bash
curl -H "Authorization: Bearer <token>" http://127.0.0.1:8000/api/posts
```

---

## 13. Buenas prácticas resumidas

- Versiona la API: usar prefijo `api/v1`.
- Paginación por defecto y parámetros `per_page`.
- Validación rigurosa y mensajes claros para el cliente.
- Usar `Resources` para formato consistente.
- Rate limiting y protección contra abuso (`throttle`).
- Logging, errores estructurados y monitorización.
- Documentación (OpenAPI/Swagger o `scribe`).

---

## 14. Despliegue rápido (puntos clave)

- Opciones: Docker, Forge, Vapor, VPS.
- Comandos útiles antes de desplegar:

```bash
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan config:cache
php artisan route:cache
```

- Si usas Docker, crea `Dockerfile` y `docker-compose.yml` con servicios `app`, `db` y `nginx`.

---

## 15. Recursos recomendados

- Documentación Laravel: https://laravel.com/docs
- Sanctum: https://laravel.com/docs/sanctum
- Laracasts (tutorías) y guías prácticas

---

## Resumen de comandos principales

```bash
composer create-project laravel/laravel ejemplo-api
cd ejemplo-api
php artisan migrate
php artisan make:model Post -m
php artisan make:controller Api/PostController --api --model=Post
php artisan make:resource PostResource
php artisan make:request StorePostRequest
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
php artisan make:factory PostFactory --model=Post
php artisan make:seeder PostSeeder
php artisan db:seed
php artisan test
php artisan serve
```