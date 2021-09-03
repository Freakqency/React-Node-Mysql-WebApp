const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { Name, Password, Type } = req.body;
  bcrypt
    .hash(Password, 10)
    .then((hash) => {
      Users.create({
        Name: Name,
        Password: hash,
        Type: Type,
      });
      res.json("Success");
    })
    .catch(function () {
      console.log("Register Promise Resolved");
    });
});

router.post("/login", async (req, res) => {
  const { Name, Password, Type } = req.body;
  const user = await Users.findOne({ where: { Name: Name } });
  if (!user) res.json({ error: "User Does not exsist" });
  bcrypt
    .compare(Password, user.Password)
    .then((match) => {
      if (!match) res.json({ error: "Invaid password" });
      const accessToken = sign(
        { Name: user.Name, id: user.id, Type: user.Type },
        "importantsecret"
      );
      res.json(accessToken);
    })
    .catch(function () {
      console.log("Promise resolved");
    });
});

module.exports = router;
