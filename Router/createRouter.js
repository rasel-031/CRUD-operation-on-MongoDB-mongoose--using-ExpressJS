const express = require("express");
const router = express.Router();
const db = require("../model/databaseSchema");

//json body-parser
router.use(express.json());

router.post("/", (req, res) => {
  console.log(req.body);
  const data = req.body;
  const user = new db(data);
  user.save((err) => {
    if (err) {
      console.log("Data is not inserted.");
      res.send("Opps..Data is not inserted.");
    } else {
      console.log("Data is inserted.");
      res.send("Data is inserted.");
    }
  });
});

router.use((req, res) => {
  res.status(404);
  res.set("Content-Type", "text/plain");
  res.send("Opps..404 Page Not Found.");
});

module.exports = router;
