import { Routine } from '../models/routine.model.js';

// GET /routines -> listar todas las rutinas
export const getRoutines = async (req, res) => {
  try {
    const routines = await Routine.find();
    res.json(routines);
  } catch (error) {
    console.error('Error al obtener rutinas 🥲:', error);
    res.status(500).json({ message: 'Error al obtener las rutinas 🥲' });
  }
};

// POST /routines -> crear una nueva rutina
export const createRoutine = async (req, res) => {
  try {
    const { name, description, level, exercises, userId } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'El nombre de la rutina es obligatorio 😎' });
    }

    const newRoutine = await Routine.create({
      name,
      description,
      level,
      exercises,
      userId,
    });

    res.status(201).json(newRoutine);
  } catch (error) {
    console.error('Error al crear rutina 😩:', error);
    res.status(500).json({ message: 'Error al crear la rutina 😩' });
  }
};

// PUT /routines/:id -> actualizar una rutina
export const updateRoutine = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedRoutine = await Routine.findByIdAndUpdate(id, req.body, {
      new: true,       // devuelve la rutina ya actualizada
      runValidators: true, // respeta las validaciones del esquema
    });

    if (!updatedRoutine) {
      return res.status(404).json({ message: 'Rutina no encontrada 🫠' });
    }

    res.json(updatedRoutine);
  } catch (error) {
    console.error('Error al actualizar rutina 😑:', error);
    res.status(500).json({ message: 'Error al actualizar la rutina 😑' });
  }
};

// DELETE /routines/:id -> eliminar una rutina
export const deleteRoutine = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRoutine = await Routine.findByIdAndDelete(id);

    if (!deletedRoutine) {
      return res.status(404).json({ message: 'Rutina no encontrada 😒' });
    }

    res.json({ message: 'Rutina eliminada correctamente 🙌' });
  } catch (error) {
    console.error('Error al eliminar rutina 😩:', error);
    res.status(500).json({ message: 'Error al eliminar la rutina 😩' });
  }
};
