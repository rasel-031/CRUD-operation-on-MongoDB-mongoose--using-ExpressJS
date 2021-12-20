const express = require("express");
const router = express.Router();
const db = require("../model/databaseSchema");

//json body-parser
router.use(express.json());

router.put("/:id", (req, res) => {
  const id = req.params.id;
  db.findByIdAndUpdate(id, req.body, (err) => {
    if (err) {
      console.log("Data is not updated.");
      res.send("Data is not updated.");
    } else {
      console.log("Data is updated.");
      res.send("Data is updated.");
    }
  });
});

router.use((req, res) => {
  res.status(404);
  res.set("Content-Type", "text/plain");
  res.send("Opps..404 Page Not Found.");
});

module.exports = router;
