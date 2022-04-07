const services = require('../services/index');


async function getAllUsers(_req, res, next) {
  try {
    const users = await services.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

module.exports = getAllUsers;