import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>✅ OpenClawMarty test běží</h1>
    <p>Railway služba je spuštěná.</p>
    <p>Čas: ${new Date().toISOString()}</p>
  `);
});

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "openclawmarty-test", time: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`OpenClawMarty test listening on port ${port}`);
});
