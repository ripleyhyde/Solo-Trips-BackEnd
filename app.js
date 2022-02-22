const express = require("express");
const cors = require("cors");
const connectDb = require("./database");
const tripRoutes = require("./api/trips/trips.routes");

//Middleware
const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.use("/", tripRoutes);

connectDb();
app.listen(8000);
