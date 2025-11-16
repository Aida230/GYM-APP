import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Cargamos las variables de entorno desde .env
dotenv.config();

export async function connectDB() {
  const { MONGODB_URI } = process.env;

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI no está definida en el archivo .env 😒');
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Conectado a MongoDB 👌');
  } catch (error) {
    console.error('Error al conectar en MongoDb 🥲:', error.message);
    process.exit(1);
  }
}
