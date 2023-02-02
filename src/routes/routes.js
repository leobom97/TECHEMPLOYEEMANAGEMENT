const express = require("express");
const routes = express.Router();
const UserController = require("../controllers/UserController");
const AddressesController = require("../controllers/AddressesController");
const TechController = require("../controllers/TechController");
const ReportController = require("../controllers/ReportController");

//Users
routes.get("/users", UserController.index);
routes.post("/user", UserController.store);

//Addresses
routes.get("/users/:user_id/addresses", AddressesController.index);
routes.post("/user/:user_id/addresses", AddressesController.store);

//Techs
routes.get("/users/:user_id/techs", TechController.index);
routes.post("/user/:user_id/tech", TechController.store);
routes.delete("/user/:user_id/tech", TechController.delete);

routes.get("/report", ReportController.show);

module.exports = routes;
