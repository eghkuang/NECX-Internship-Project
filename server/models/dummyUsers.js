const dummy1 = {
  id: 1,
  firstName: "Esther",
  lastName: "Kuang",
  email: "eghkuang@gmail.com",
  password: "peanut",
};

const dummy2 = {
  id: 2,
  firstName: "Eric",
  lastName: "Dummy",
  email: "ericdummy@gmail.com",
  password: "dumb",
};

const DummyAccounts = {
  1: dummy1,
  2: dummy2,
};

let id = 3;
const Account = (email, firstName, lastName, password) => ({
  id: id,
  email,
  firstName,
  lastName,
  password,
});

const CreateAccount = (email, firstName, lastName, password) => {
  const newAccount = Account(email, firstName, lastName, password);
  DummyAccounts[newAccount.id] = newAccount;
  id++;
  return newAccount;
};

module.exports = { DummyAccounts, CreateAccount };
