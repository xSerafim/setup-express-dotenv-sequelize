const { User } = require('../models');

async function getAllUsers() {
  const users = await User.findAll();
  return users;
}

module.exports = getAllUsers;