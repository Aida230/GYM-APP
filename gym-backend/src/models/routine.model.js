import mongoose from 'mongoose';

//1. De ES6 saco Schema y model para escribir menos
const { Schema, model } = mongoose;

//2. Definir el sub-esquema de ejercicios

const exerciceSchema = new Schema (
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    sets: {
      type: Number,
      default: 4,
      min: 1
    },
    reps: {
      type: Number,
      default: 8,
      min: 1,
    },
    weight: {
      type: Number,
      default: 0,
      min: 0,
    },
    restTime: {
      type: Number,
      default: 60,
      min: 0,
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  {
    _id: false, //no necesito un id propio para cada ejercicio
  }
);

//Esquema principal e rutina

const routineSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    level: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner',
    },
    //Listado de ejercicios usando el sub-esquema
    exercises: {
      type: [exerciceSchema], //array de ejercicios
      default: [],
    },
    //A quien pertenece la rutina, por ahora opcional si me gusta lo meto si no pues lo quito luego
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true, //createdAt y updatedAt automaticos
  }
);

//Creo el modelo a partir del esquema
export const Routine = model('Routine', routineSchema)
