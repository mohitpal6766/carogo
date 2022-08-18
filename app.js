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
  Users.deleteMany({}, function (err) {
    console.log("success");
  });
  res.render("home", { logged: logged });
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/register", (req, res) => {
  res.render("register");
});
app.post("/register", (req, res) => {
  try {
    const newUser = Users.create(req.body);
    logged = true;
    res.redirect("/");
  } catch (error) {
    res.send("user already exist");
  }

  //   res.render("register", { logged: true });
});

app.get("/logout", async (req, res) => {
  logged = false;
  res.redirect("/");
});
module.exports = app;
