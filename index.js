import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/kogarkopavel_gmail_com", (req, res) => {
  const x = +req.query.x;
  const y = +req.query.y;

  if (!Number.isInteger(x) || x < 0 || !Number.isInteger(y) || y < 0) {
    return res.send("NaN");
  }

  const gcd = (x, y) => {
    if (y === 0) {
      return x;
    }
    return gcd(y, x % y);
  };

  const lcm = x === 0 || y === 0 ? 0 : (x * y) / gcd(x, y);

  res.status(200).send(String(lcm));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
