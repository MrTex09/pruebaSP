// TODO: Crear modelo de datos de Reserva
// Importar Sequelize y configurar la conexión a la base de datos
const { sequelize, DataTypes } = require("");

// Definir el modelo "Cliente"
const Cliente = sequelize.define(
  "Cliente",
  {
    cliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo_electronico: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: "cliente",
  }
);

// Crear tabla si no existe
cliente.sync();

// Establecer la relación entre Cliente y Reserva
Usuario.hasMany(Reserva, { foreignKey: "cliente_id" });
Reserva.belongsTo(Cliente, { foreignKey: "cliente_id" });

// Sincronizar los modelos con la base de datos
sequelize
  .sync()
  .then(() => {
    console.log("Los modelos se han sincronizado correctamente.");
  })
  .catch((error) => {
    console.error("Error al sincronizar los modelos:", error);
  });
module.exports = Cliente;
