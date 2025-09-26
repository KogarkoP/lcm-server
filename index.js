import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/kogarkopavel_gmail_com", (req, res) => {
  const xStr = req.query.x;
  const yStr = req.query.y;

  const isNaturalOrZero = (str) => /^\d+$/.test(str);

  if (!isNaturalOrZero(xStr) || !isNaturalOrZero(yStr)) {
    return res.send("NaN");
  }

  const x = BigInt(req.query.x);
  const y = BigInt(req.query.y);

  const gcd = (x, y) => {
    if (y === 0n) {
      return x;
    }
    return gcd(y, x % y);
  };

  const lcm = x === 0n || y === 0n ? 0n : (x * y) / gcd(x, y);

  res.send(lcm.toString());
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
