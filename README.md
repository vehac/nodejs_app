# NodeJS

Docker - Nodejs v16.14.0 - MariaBD

## Inicio
- Crear archivo `.env` en la carpeta del proyecto.

## Docker

- Para la primera vez que se levanta el proyecto con docker o se cambie los archivos de docker, ejecutar:
 
```bash
sudo docker-compose up --build -d
```

- En las siguientes oportunidades ejecutar:

Para levantar:
```bash
sudo docker-compose start
```
Para detener:
```bash
sudo docker-compose stop
```

- Para ver la web, en un navegador copiar la siguiente url:
```bash
http://localhost:8001
```
- Para ingresar al server con docker ejecutar:
```bash
sudo docker-compose exec web sh
```