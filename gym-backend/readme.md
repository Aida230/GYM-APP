Pasos para crear el backend:
1. crear la carpeta gym-backend dentro de la carpeta principal del proyecto
2. iniciaizar el proyecto con node:
    - npm init -y
3. crear la estructura minima:
    - mkdir src
    - cd src
    - touch index.js
    - cd ..
4. Instalar dependencias principales:
    - npm install express cors dotenv moongose
5. Instalar dependencias de desarrollo:
    - npm install -D nodemon
6. Configurar los scripts en el package.json:
      "scripts": {
        "dev": "nodemon src/index.js",
        "start": "node src/index.js"
}
7. Crear archivo .env para variables de entorno
      ejemplo:  PORT=4000
                MONGODB_URI=TU_URL_DE_MONGODB_AQUI
8. Crear archivo .gitignore:
      ejemplo: node_modules
              .env
9. Crear el archivo de configuración de la base de datos
        crear carpeta config dentro de src y añadir el archivo db.js
10. Añadir la conexion de la base de datos al archivo index.js
