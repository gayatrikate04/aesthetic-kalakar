// pages/api/health.js
export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    message: "Aesthetic Kalakar is running!",
    timestamp: new Date().toISOString()
  });
}
