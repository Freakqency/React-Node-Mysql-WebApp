const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const projectRouter = require("./routes/Projects");
app.use("/projects", projectRouter);
const taskRouter = require("./routes/Tasks");
app.use("/tasks", taskRouter);
const userRouter = require("./routes/Users");
app.use("/auth", userRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
