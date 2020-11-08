const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "I love coding on the weekends",
    post_id: 2,
    user_id: 1
  },
  {
    comment_text: "Handlebars is the GOAT",
    post_id: 3,
    user_id: 4
  },
  {
    comment_text: "I love your mother",
    post_id: 1,
    user_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
