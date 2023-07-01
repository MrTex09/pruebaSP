// Imports
require("dotenv").config();
const port = process.env.PORT || 4000;
const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
// El método config de dotenv permite leer variables de entorno desde un archivo .env

// Middlewares
// TODO: Implementar middlewares

app.use(express.static(path.join(__dirname, "public")));

// // Routes
// app.use("/api", require("./routes/reserva.routes"));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(port, () => console.log(`Server on port ${port}`));
