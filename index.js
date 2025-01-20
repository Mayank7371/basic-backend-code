const { UserModel, TodoModel } = require("./db.js");
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
mongoose.connect("");
const seceret = "thisisfuckingshit";
const app = express();
const port = 3000;
app.use(express.json());
app.post("/signup", async (req, res) => {
  // CRUD ka create part hai ye!
  const { email, password, name } = req.body;
  await UserModel.create({
    // async function because it is a database call it will return a promise
    email: email,
    password: password,
    name: name,
  });
  res.json({
    msg: "You are now signed up!",
  });
});
app.post("/signin", async (req, res) => {
  // CRUD ka Read part hai ye
  const { email, password } = req.body;
  const user = await UserModel.findOne({
    email: email,
    password: password,
  });
  console.log(user);

  if (user) {
    console.log(user._id);

    const token = jwt.sign(
      {
        id: user._id.toString(), // how can you uniquely identify a user i am trying to sign a unique id
      },
      seceret
    );
    res.json({
      token,
    });
  } else {
    res.status(403).json({
      msg: "incorrect credentials",
    });
  }
});
function auth(req, res, next) {
  const token = req.headers.token;
  const decode = jwt.verify(token, seceret);
  if (decode) {
    req.userId = decode.id;
    next();
  } else {
    res.status(401).json({
      msg: "Not Authorized",
    });
  }
}
app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;
  const users = await TodoModel.findOne({
    userId: userId,
  });
  res.json({
    userId: userId,
  });
});
app.post("/todo", auth, (req, res) => {
  const userId = req.userId;
  const title = req.body.title;
  TodoModel.create({
    title: title,
    userId: userId,
  });
  res.json({
    userId: userId,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
