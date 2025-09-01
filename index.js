import express, { json } from "express";
import { default as bigIntToScientific } from "./utils/toScientific.js";
import { default as findConstantC } from "./utils/findConstant.js";
const app = express();
app.use(json());


app.post("/calculate", (req, res) => {
  try {
    const data = req.body;
    if (!data || !data.keys) {
      return res.status(400).json({ error: "Invalid input JSON" });
    }

    const roots = [];
    for (const key in data) {
      if (key !== "keys") {
        const { base, value } = data[key];
        const decoded = decodeToBase10(value, base);
        roots.push(decoded);
      }
    }

    const c = findConstantC(roots);
    res.json({
      numberOfRoots: roots.length,
      constantC: c.toString(),
      scientific : bigIntToScientific(c)  // convert BigInt to string for JSON
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Start server ---
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
