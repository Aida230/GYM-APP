import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js'


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

//Conectar a l BD y arrancar el servidor

async function startServer() {
  try {
    await connectDB();
    
    app.listen(PORT, () => {
      console.log(`Servidor arrancado en el puerto👌😉 ${PORT}`)
    });
  } catch (error) {
    console.error('No se puedo iniciar el servidor 🥲', error.message);
  }
}

startServer()