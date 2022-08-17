const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const Users = require("./models/user");

const app = express();

let logged = false;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.render("home", { logged: logged });
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/register", (req, res) => {
  res.render("register");
});
app.post("/register", (req, res) => {
  const newUser = Users.create(req.body);
  logged = true;
  res.redirect("/");

  //   res.render("register", { logged: true });
});

module.exports = app;
