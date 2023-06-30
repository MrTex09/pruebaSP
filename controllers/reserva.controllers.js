const ctrlReservas = {};
const Tarea = require("../models/Reserva");

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas

// Obtener una reserva

// Crear una reserva
(ctrlReservas.crearReserva = async (req, res) => {
  const { reserva, codigo_reserva } = req.body;
  try {
    const reserva = await reserva.create({
      reserva,
      codigo_reserva,
      clienteId: req.cliente.id,
    });

    if (!reserva) {
      throw {
        status: 400,
        message: "no se pudo crear la reserva",
      };
    }

    return res.json(reserva);
  } catch (error) {
    console.log(error);
    return res
      .status(error.status || 500)
      .json(error.message || "Error interno del servidor");
  }
}),
  // Actualizar una reserva

  // Eliminar una reserva de forma lógica

  (module.exports = ctrlReservas);
