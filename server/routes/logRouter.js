const Router = require('express');
const router = new Router();
const loginController = require('../controllers/loginController');

router.post('/', loginController.addLogin);

router.get('/', loginController.getLogin);

module.exports = router;
