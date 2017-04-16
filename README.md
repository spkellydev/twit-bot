# twit-bot
This is a twitter bot that I built and deployed to heroku, just for experience

I used the Twit respoitory https://github.com/ttezel/twit

I created this bot just for experience. Currently, it retweets based off a specific hastag, favorites based off a specific query, thanks follower, and replies to a user whenever they tweet at the account

It was pretty fun for a first go around, but I think next time I would try to include some geo tags and more vast search parameters

# This repo will not work without a config.js file in the repository

I removed mine for obvious reasons (not wanting my keys out there in the open) - it should look like this
<pre>
module.exports = {
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
}
</pre>
