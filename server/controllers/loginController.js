const { Login } = require('../models/login');

class loginController {
  async addLogin(req, res) {
    const { login, email, password, body } = req.body;

    const log = await Login.create({ login, email, password });

    return res.json(log);
  }

  async getLogin(req, res) {
    const log = await Login.findAll();
    return res.json(log);
  }
}

module.exports = new loginController();
