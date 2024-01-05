const express = require("express");
const app = express();
const cors = require("cors");
const { connectToMongo } = require("./config/connect");
const { User } = require("./users/schema");

connectToMongo();
app.use(cors({}));

app.get("/", async (req, res) => {
  const users = await User.find({});
  return res.send({ status: "ok", users: users });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
