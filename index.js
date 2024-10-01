const express = require("express");
const app = express();
const router = require("./src/api/routes")

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Server Running Up to Date........." });
//   console.log("Server Running Up to Date.........");
// });

app.use(router)

app.listen(3300, () => {
  console.log("Server Running at 3300");
});

module.exports = app;
