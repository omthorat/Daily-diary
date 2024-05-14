const express = require("express");
const note = require("./data/note");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const cors = require("cors");
const connectDB = require("./config/db");
const { route } = require("./routes/userRoute");
const app = express();

dotenv.config();
app.use(cors());
connectDB();
app.use(express.json());
app.use("/api/users", userRoute);
// app.use("/api/login", userRoute);
app.get("/", (req, res) => {
  res.send("...api is running fine");
});
app.get("/api", (req, res) => {
  res.json(note);
});

const Port = process.env.PORT || 5011;
app.listen(Port, console.log(`port ${Port} or 5011`));
