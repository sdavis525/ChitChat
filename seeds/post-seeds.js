const { Post } = require('../models');

const postdata = [
  {
    title: 'What Do Women Want?',
    post_content: "Women today are speaking up about what they look for in a life partner. ",
    user_id: 2
  },
  {
    title: 'Have you been seeing angel numbers too?',
    post_content: " In numerology, angel numbers are a repetitive sequence of three or four numbers that appear in seemingly random places in your life to convey a spiritual or divine message. ",
    user_id: 4
  },
  {
    title: 'What do men want in a woman?',
    post_content: "Men today open up about what they look for in a woman; hammering down on what makes them want to tie the knot",
    user_id: 6
  },
  {
    title: 'Rise in women owned businesses',
    post_content: "We are starting to see an influx of women owned businesses in the US, women have planted their roots and are here to stay.",
    user_id: 8
  },
  {
    title: 'Fun date night ideas',
    post_content: 'https://stanford.edu/consequat.png',
    user_id: 4
  },
  {
    title: 'How to spice up your love life',
    post_content: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'Ten styles you need for the summer',
    post_content: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  {
    title: 'Are you the one?',
    post_: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 7
  },
  {
    title: 'Summer cocktail ideas',
    post_url: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: 'Picnic in the park?',
    post_url: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  
];
const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;