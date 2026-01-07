const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectDB } = require("./Config/db");
const { authController } = require("./Routes/auth.route");
const { notesController } = require("./Routes/notes.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authController);
app.use("/notes", notesController);

const PORT = process.env.PORT || 7600;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
