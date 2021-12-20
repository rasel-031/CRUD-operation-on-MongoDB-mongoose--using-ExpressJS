const express = require("express");
const router = express.Router();
const db = require("../model/databaseSchema");

//json body-parser
router.use(express.json());

router.get("/", (req, res) => {
  db.find((err, result) => {
    if (err) {
      console.log("Your data is not found.");
    } else {
      res.status(200);
      res.send(JSON.stringify(result));
    }
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.findById(id, (err, result) => {
    if (err) {
      console.log("Your data is not found.");
    } else {
      res.status(200);
      res.send(JSON.stringify(result));
    }
  });
});

router.use((req, res) => {
  res.status(404);
  res.set("Content-Type", "text/plain");
  res.send("Opps..404 Page Not Found.");
});

module.exports = router;
