const express = require("express");
const employeesRouter = require("./routes/employee");
const usersRouter = require("./routes/user");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors({ origin: "*" }));

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//ใช้งาน route
//employee
app.use("/api/v1/", employeesRouter);
app.use("/api/v1/", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
