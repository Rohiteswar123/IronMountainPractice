const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


const products = [
  { id: 1, name: "iPhone", category: "electronics" },
  { id: 2, name: "Laptop", category: "electronics" },
  { id: 3, name: "T-Shirt", category: "fashion" },
  { id: 4, name: "Shoes", category: "fashion" },
];


app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
