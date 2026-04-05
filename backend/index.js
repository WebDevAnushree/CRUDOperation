const express = require("express");
const app = express();
const cors = require("cors");


require("dotenv").config();
app.use(cors());

const PORT = process.env.PORT || 4001;
app.use(express.json());

const todoRoutes = require("./routes/todos");
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE baby</h1>`);
});
