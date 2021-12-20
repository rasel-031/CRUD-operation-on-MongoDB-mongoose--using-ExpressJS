const express = require("express");
const app = express();
const readRouter = require("./Router/readRouter");
const createRouter = require("./Router/createRouter");
const updateRouter = require("./Router/updateRouter");
const deleteRouter = require("./Router/deleteRouter");

app.listen(4000, () => {
  console.log("Server is running on port: 4000");
});

//use for insert data/post request
app.use("/create", createRouter);
//use for read data/get request
app.use("/read", readRouter);
//use for update data/put request
app.use("/update", updateRouter);
//use for delete data/delete request
app.use("/delete", deleteRouter);

app.use((req, res) => {
  res.status(404);
  res.set("Content-Type", "text/plain");
  res.send("Opps..404 Page Not Found.");
});
