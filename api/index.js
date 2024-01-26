const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://fpasamuelmayowa51:5iX35jgh9yB9P6Im@cluster0.unk3ntp.mongodb.net/datausers"
  )
  .then((res) => console.log("database connected!!!"))
  .catch((err) => console.log(err.message));

const port = 8000 || process.env.PORT;
app.listen(port, () => {
  console.log("SERVER IS RUNNING   " + port);
});

module.exports = app;
