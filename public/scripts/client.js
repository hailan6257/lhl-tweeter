/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = tweetData => {
  let tweetElement = `
  <article>
  <header>
    <div>
      <img src="${tweetData.user.avatars}">
      <p>${tweetData.user.name}</p>
    </div>
    <div>${tweetData.user.handle}</div>
  </header>
  <p id='content'>
  ${tweetData.content.text}
  </p>
  <footer>
  <div>${timeago.format(tweetData.created_at)}</div>
  <div id = 'icon'>
    <i class="fa-solid fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fa-solid fa-heart"></i>
  </div>
  </footer>
</article>
<br>
  `;
  return tweetElement;
};

// Test / driver code (temporary). Eventually will get this from the server.



const renderTweets = function(tweets) {
  // loops through tweets
  for (const tweet in tweets) {
  // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweets[tweet]);
    // takes return value and appends it to the tweets container
    $('.tweet-list').append($tweet);
    console.log($tweet);
  }
};

$(document).ready(function() {
  renderTweets(data);
});