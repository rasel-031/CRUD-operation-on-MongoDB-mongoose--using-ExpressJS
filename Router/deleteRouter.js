const express = require("express");
const router = express.Router();
const db = require("../model/databaseSchema");

//json body-parser
router.use(express.json());

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.findByIdAndDelete(id, (err) => {
    if (err) {
      console.log("Data is not deleted.");
      res.send("Data is not deleted.");
    } else {
      console.log("Data is deleted.");
      res.send("Data is deleted.");
    }
  });
});

router.use((req, res) => {
  res.status(404);
  res.set("Content-Type", "text/plain");
  res.send("Opps..404 Page Not Found.");
});

module.exports = router;
