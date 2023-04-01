const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("express-flash");
require("dotenv").config();
//for storing session id in db
const MongoDbStore = require("connect-mongo");

const url = "mongodb://0.0.0.0:27017/Food";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Connection failed...");
  });
//session store

//Session cookies config
app.use(
  session({
    secret: process.env.Cookie_Secret,
    resave: false,
    store: MongoDbStore.create({
      mongoUrl: url,
    }),
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 48 }, //48 hrs
  })
);
app.use(flash());
// const connection = mongoose.connection;
// connection

// connection
//   .once("open", () )
//   .catch((err) => console.log("Connection Failed"));

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
// set templete engine
app.use(expressLayout);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");
require("./routes/web")(app);

app.listen(PORT, () => console.log(` Server running at Port ${PORT}`));
