const { Accounts } = require("../index.js");

const findAccountByEmail = (email, callback) => {
  Accounts.collection
    .findOne({ email })
    .then((result) => {
      console.log("result", result);
      callback(result);
    })
    .catch((err) => {
      callback(null);
    });
};

const createAccount = (req, callback) => {
  console.log("what is insertOneUser req", req);
  console.log("what is accounts: ", Accounts);
  Accounts.collection
    .insertOne(req)
    .then((result) => {
      console.log("result", result);
      callback(result);
    })
    .catch((err) => {
      callback(null);
    });
};

module.exports = {
  findAccountByEmail,
  createAccount,
};
