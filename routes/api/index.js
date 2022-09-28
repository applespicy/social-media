const router = require('express').Router();
const userRoutes = require('./userRoute');
const thoughRoutes = require('./thoughRoute');

router.use('/thoughs', thoughRoutes);
router.use('/users', userRoutes);

module.exports = router;
