const router = require('express').Router();
const userRoutes = require('./userRoutes');
const BlogRoutes = require('./BlogRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/blog', BlogRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
