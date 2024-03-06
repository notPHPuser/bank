const Router = require('express');
const router = new Router();
const loginRouter = require('./logRouter');

router.use('/posts', loginRouter);

module.exports = router;
