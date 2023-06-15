const express = require("express");
const path = require("path");
const { loginUser, newUser } = require("./controller.js");

const app = express();
const port = 3001;

const staticMiddleware = express.static(path.join(__dirname, "../client/dist"));

app.use(express.json());

const redirect = (req, res) => {
  res.redirect("/signin");
};

app.get("/", redirect);
app.use("/signin", staticMiddleware);
app.use("/signup", staticMiddleware);

//Landing page is only accessible through signin flow.
app.get("/landingPage", redirect);

app.post("/login", loginUser);
app.post("/signup", newUser);

app.get("/help", (req, res) => {
  res.send(`Your server is running at http://localhost:${port}`);
});

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
