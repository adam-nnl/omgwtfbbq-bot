//hai

if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('./lib/Botkit.js');

var speak = require("speakeasy-nlp");

var controller = Botkit.slackbot({
    debug: true
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();


//list for EVERYTHING, run message test through natural NLP to filter down to commands? or something? accept/deny/intent/request?
controller.hears('','ambient,direct_message,direct_mention,mention',function(bot,message) {
// Analyze sentences at a basic level
// ------------------------------------- //
bot.reply(message, JSON.stringify(speak.classify(message.text)))             //=> { action: "what", owner: "listener", subject: "name" }
//speak.classify("Do you know what time it is?")   //=> { action: "what", owner: "it", subject: "time" }

// Sentiment analysis
// ------------------------------------- //
//speak.sentiment.negativity("I hate your guts")   //=> { score: 1, words: [hate] }
//speak.sentiment.positivity("I love you")         //=> { score: 1, words: [love] }
//speak.sentiment.analyze("I love you, but you smell something aweful")  
// (Negative scores dictate a stronger influence of negative words)
//=> { score: -1, positive: { ... }, negative: { ... } }
bot.reply(message, JSON.stringify(speak.sentiment.analyze(message.text)))  
natural(bot, message)
// Closest word
// ------------------------------------- //
//speak.closest("node", ["foo", "nodejs", "baz"])     //=> "nodejs"        
        //bot.reply(message, 'Insert NLP magic here.');
        //bot.reply(message, classifier.classify(msg));


   
});

function natural(bot, message) {
    var natural = require('natural'),
  classifier = new natural.BayesClassifier();
natural.BayesClassifier.load('corpus.json', null, function(err, classifier) {
    console.log(classifier.classify('test'));
});
}
