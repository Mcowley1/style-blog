const { User } = require('../models');

const userData = [
  {
    username: "Matthew",
    email: "Matthew@gmail.com",
    password: "password1234"
  },
  {
    username: "Julio",
    email: "Julio@gmail.com",
    password: "password1234"
  },
  {
    username: "Steven",
    email: "steven@gmail.com",
    password: "password1234"
  },
  {
    username: "Maria",
    email: "Maria@gmail.com",
    password: "password1234"
  },
  {
    username: "John",
    email: "john@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;
