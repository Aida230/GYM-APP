import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

//Cargamos las variables de entorno desde .env
dotenv.config();

//Creamos la app de express:
const app = express();

//Middlewares globales:
app.use(cors());
app.use(express.json());

//Variables de configuracion
const PORT = process.env.PORT || 4000;

//Ruta de prueba
app.get('/Aida', (req, res ) => {
  res.json({ message: 'Guapa 😘'});
});

//Arranacar el servidor
app.listen(PORT, () => {
  console.log(`Servidor arrancado en el puerto👌😉 ${PORT}`)
});