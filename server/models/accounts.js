const Mongoose = require("../db/index.js");

const AccountsSchema = new Mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Accounts = Mongoose.model("Accounts", AccountsSchema);

const findAccountByEmail = (email, callback) => {
  Accounts.collection
    .findOne({ email })
    .then((result) => {
      callback(result);
    })
    .catch((err) => {
      callback(null);
    });
};

const createAccount = (req, callback) => {
  Accounts.collection
    .insertOne(req)
    .then((result) => {
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
