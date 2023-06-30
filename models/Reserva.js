// TODO: Crear modelo de datos de Reserva
// Importar Sequelize y configurar la conexión a la base de datos
const { sequelize, DataTypes } = require("../database");
const Cliente = require("./cliente");

// Definir el modelo "Reserva"
const Reserva = sequelize.define(
  "Reserva",
  {
    reserva: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo_reserva: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    // Other model options go here
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "reserva",
  }
);

// Crear tabla si no existe
Reserva.sync();

// Sincronizar los modelos con la base de datos
sequelize
  .sync()
  .then(() => {
    console.log("Los modelos se han sincronizado correctamente.");
  })
  .catch((error) => {
    console.error("Error al sincronizar los modelos:", error);
  });

module.exports = Reserva;
