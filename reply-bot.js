console.log('the bot is starting');

var Twit = require('twit');



var T = new Twit({
  consumer_key:         '0qt1ZMb4FZXrDEOvz1ApPsEUX',
  consumer_secret:      'iBtPF5VCMXX50cVfmBjOEwvZ7Uu1fw7paxfQi21Q3OQwIKRMz6',
  access_token:         '845537066003943424-4MRqqGtH25EyYNZuAAGJbJ3kybM2Fxe',
  access_token_secret:  'kezoD6cINaPXDifohZWqMkuUrW0KOmYbrIzOiwHxG3ngJ',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});
  
/* var params = {
	q: 'comics since:2017-4-14',
	count: 2
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
	var tweets = data.statuses;
	for (var i = 0; i<tweets.length; i++) {
		console.log(tweets[i].text);
	}
	//console.log(data);
}
*/ 

//User Stream
var stream = T.stream('user');

//Anytime someone tweets me
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
	//console.log('eventMsg');
	//var fs = require('fs');
	//var json = JSON.stringify(eventMsg,null,2);
	//fs.writeFile("tweet.json", json);

	var replyto = eventMsg.in_reply_to_screen_name;
	var text = eventMsg.text;
	var from = eventMsg.user.screen_name;

	console.log(replyto + ' ' + from);

	if (replyto === 'comicconstruct') {
		var newtweet = '@' + from + ' thank you for tweeting at me!';
		tweetIt(newtweet);
	}
}


function tweetIt(txt) {
	var tweet = {
		status: txt
	}

	T.post('statuses/update', tweet, tweeted);




	function tweeted(err, data, response) {
		if(err) {
			console.log("Something went wrong!");
		} else {
			console.log("It worked!");
		}
	}	
}

