Backend NestJS para consumir la PokeAPI
Este proyecto es un backend desarrollado con NestJS que permite consultar información de Pokémon desde la PokeAPI, formatearla y servirla a través de un endpoint RESTful con caché integrada.

📝 Descripción
El objetivo de este backend es crear un endpoint RESTful que permita:

Consultar datos de un Pokémon por su ID o nombre

Obtener la información desde la PokeAPI

Formatear los datos en una estructura simplificada

Manejar errores apropiadamente

Implementar caché para evitar múltiples consultas innecesarias a la API externa

✅ Requisitos cumplidos
✅ Crear endpoint /pokemon/:id

✅ Consultar datos desde la PokeAPI

✅ Retornar un JSON estructurado con los siguientes campos:

json
Copy
{
  "id": 25,
  "name": "pikachu",
  "types": ["electric"],
  "abilities": ["static", "lightning-rod"],
  "sprite_url": "https://.../pikachu.png"
}
✅ Manejar errores (404 si no existe el Pokémon)

✅ Implementar caché en el backend para evitar consultas repetidas

✅ Backend funcional y probado en localhost:3000/pokemon/<id>

🏗️ Tecnologías utilizadas
NestJS - Framework backend sobre Node.js

PokeAPI - API pública de Pokémon

@nestjs/axios - Módulo para llamadas HTTP

@nestjs/cache-manager - Sistema de caché en memoria

RxJS - Operador firstValueFrom para consumir observables

HttpException - Gestión de errores personalizados

🗂️ Estructura del proyecto
Copy
pokemon-api/
├── src/
│   ├── main.ts                 # Bootstrap del servidor
│   ├── app.module.ts           # Módulo principal
│   ├── pokemon/
│   │   ├── pokemon.controller.ts  # Controlador del endpoint
│   │   ├── pokemon.service.ts     # Servicio con la lógica de negocio
│   │   └── pokemon.module.ts      # Módulo específico de Pokémon
🚀 Cómo ejecutar el proyecto
Clonar el repositorio

Instalar dependencias:

bash
Copy
npm install
Ejecutar el servidor:

bash
Copy
npm run start:dev
El servidor estará disponible en http://localhost:3000

📌 Endpoints disponibles
Obtener información de un Pokémon
Método: GET

URL: /pokemon/:id

Parámetro: id (número o nombre del Pokémon)

Ejemplo:

bash
Copy
GET http://localhost:3000/pokemon/pikachu
Respuesta exitosa:

json
Copy
{
  "id": 25,
  "name": "pikachu",
  "types": ["electric"],
  "abilities": ["static", "lightning-rod"],
  "sprite_url": "https://.../pikachu.png"
}
Error:

Código 404 si el Pokémon no existe

⚙️ Configuración
El proyecto incluye:

CORS configurado para aceptar peticiones desde http://localhost:4200

Caché en memoria con una duración de 60 segundos