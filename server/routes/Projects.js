const express = require("express");
const router = express.Router();
const { Projects } = require("../models");

router.get("/", async (req, res) => {
  const listOfProjects = await Projects.findAll();
  res.json(listOfProjects);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const project = await Projects.findByPk(id);
  res.json(project);
});

router.post("/", async (req, res) => {
  const projects = req.body;
  await Projects.create(projects);
  res.json(projects);
});

module.exports = router;
