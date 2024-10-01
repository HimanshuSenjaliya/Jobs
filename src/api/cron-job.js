module.exports = async function handler(req, res) {
  try {
    console.log("cron-job Working.............");
    res.status(200).json({ message: "Morning subscription product updated" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update morning subscriptions" });
  }
};
