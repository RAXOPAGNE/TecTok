const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes.js');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/blog', blogRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
