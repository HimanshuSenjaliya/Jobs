const router = require("express").Router();
const cronJob = require("./cron-job");

router.get("/", (req, res) => {
  return res.status(200).json({ message: "Server is up and running" });
});

router.use("/cron", cronJob);

module.exports = router;
