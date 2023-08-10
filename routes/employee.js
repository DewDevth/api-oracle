const express = require("express");
const router = express.Router();
const employeesController = require("../controllers/employees");

router.get("/employee-list", employeesController.getEmployees);
router.get("/employee-all", employeesController.getAllEmployees);

module.exports = router;
