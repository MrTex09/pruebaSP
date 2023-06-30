const ctrlcliente = {};
const Tarea = require("../models/cliente");

// ==========================================
//         Rutas para CRUD de  cliente
// ==========================================

// Obtener todas las  cliente

// Obtener una cliente

// Crear una cliente

usuarioCtrl.crearUsuario = async (req, res) => {
  const { cliente, nombre, apellido, direccion, correo_electronico, telefono } =
    req.body;

  try {
    // Se verifica si el usuario ya existe
    const existecliente = await cliente.findOne({
      where: {
        nombre,
      },
    });

    if (existecliente) {
      throw {
        // throw siempre debe ejecutarse dentro de un try catch
        status: 400,
        message: "El cliete ya existe",
      };
    }

    const nuevoCliente = new Cliente({
      cliente,
      nombre,
      apellido,
      direccion,
      correo_electronico,
      telefono,
    });

    // // Encriptar contraseña
    // const salt = await bcrypt.genSalt(10);
    // nuevoUsuario.password = await bcrypt.hash(password, salt);

    // Guardar usuario en la base de datos
    const clienteCreado = await nuevoCliente.save();

    if (!clienteCreado) {
      throw {
        message: "Error al crear el cliente",
      };
    }

    // Se retorna la respuesta al cliente
    return res.status(201).json({
      message: "cliente creado exitosamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: error.message || "Error al crear el cliente",
    });
  }
};
// Actualizar una cliente

// Eliminar una cliente de forma lógica

module.exports = ctrlcliente;
