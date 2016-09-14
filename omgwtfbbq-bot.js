//hai

if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('./lib/Botkit.js');

var natural = require('natural'),
classifier = new natural.BayesClassifier();
classifier.load('corpus.json', null, function(err, classifier) {
    console.log(classifier.classify('long SUNW'));
    console.log(classifier.classify('short SUNW'));
});    

var controller = Botkit.slackbot({
    debug: true
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();


//list for EVERYTHING, run message test through natural NLP to filter down to commands? or something? accept/deny/intent/request?
controller.hears('','ambient,direct_message,direct_mention,mention',function(bot,message) {
bot.reply(message, 'Insert NLP magic here.');
        //bot.reply(message, classifier.classify(msg));
   
});
