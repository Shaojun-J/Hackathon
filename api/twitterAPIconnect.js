var Twitter = require('twitter');
const dotenv = require('dotenv');

const apikey = process.env.apikey
const apikeysecret = process.env.apikeysecret
const accesstoken = process.env.accesstoken
const accesstokensecret = process.env.accesstokensecret

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

