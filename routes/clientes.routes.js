const router = require("express").Router();
const { crearCliente } = require("../controllers/cliente_controllers");

// Obtener todas las cliente

// Obtener todas las clientes
router.get("/");

// Crear una reserva
router.post("/api/crearCliente", crearCliente);

// Actualizar una cliente
router.put("/api/:id");

// Eliminar una reserva de forma lógica
router.delete("/api/:id");

module.exports = router;
