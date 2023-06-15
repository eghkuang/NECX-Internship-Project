const { findAccountByEmail, createAccount } = require("./models/accounts.js");

module.exports.loginUser = (req, res) => {
  const user = req.body;
  const handleUser = (account) => {
    if (!account) {
      res.status(201).send("Email Not Found");
      return;
    }
    account.password === user.password
      ? res.status(201).send("Login Successful")
      : res.status(201).send("Incorrect Password");
  };
  findAccountByEmail(user.email, handleUser);
};

module.exports.newUser = (req, res) => {
  const newUser = req.body;
  const handleNewUser = (account) => {
    res.status(201).send("Account created");
    return;
  };
  const handleUser = (account) => {
    if (!account) {
      createAccount(newUser, handleNewUser);
      return;
    }
    res.status(201).send("Email exists");
  };
  findAccountByEmail(newUser.email, handleUser);
};
