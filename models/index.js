const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
//User has many

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.hasMany(Comment,{
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Blog, {
  foreignKey: 'post_id'
});

module.exports = { User,Blog,Comment };
