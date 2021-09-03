const express = require("express");
const router = express.Router();
const { Tasks } = require("../models");
const { validateToken } = require("../middleware/AuthMiddleware");

router.get("/:id", async (req, res) => {
  const Sequelize = require("sequelize");
  const op = Sequelize.Op;
  const id = req.params.id;
  const tasks = await Tasks.findAll({
    attributes: [
      "id",
      "TaskName",
      "AssignedTo",
      "Status",
      ["ProjectProjectId", "ProjectId"],
    ],
    where: {
      ProjectProjectId: {
        [op.eq]: id,
      },
    },
  });
  return res.json(tasks);
});

router.post("/", validateToken, async (req, res) => {
  const task = req.body;
  res.json(task);
});

router.post("/update", validateToken, async (req, res) => {
  const task = req.body;
  var value = {
    TaskName: task.TaskName,
    AssignedTo: task.AssignedTo,
    Status: task.Status,
    ProjectProjectId: task.ProjectProjectId,
  };
  var condition = { where: { id: task.id } };
  Tasks.update(value, condition).then(function (upresult) {});
  const type = req.user.Type;
  console.log(type);
  res.json("Success");
});

module.exports = router;
