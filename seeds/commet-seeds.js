const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'interesting point of view',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Amazing piece!',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Good/thougtful article.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: "Anyone else feel this same way?",
    user_id: 3,
    post_id: 5
  },
  {
    comment_text: 'Is this really how men think?',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'absoultely agree',
    user_id: 1,
    post_id: 10
  },
  {
    comment_text: 'Can someone post a new link? mine didnt work',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Explain please?',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'agree!',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'this gave me so much inspo',
    user_id: 6,
    post_id: 6
  },
  {
    comment_text: 'what is love?',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'not my cup of tea',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'boooooooo',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'disagree',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'amazingly sweet',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'can yopu please checkout my blog too?',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'love this idea',
    user_id: 2,
    post_id: 10
  },
  {
    comment_text: 'thank you for sharing',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text:
      'disagree.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text:
      'love it',
    user_id: 9,
    post_id: 10
  },
  {
    comment_text: 'okay?!',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'you said it first',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'can we just be like you?!',
    user_id: 3,
    post_id: 8
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;