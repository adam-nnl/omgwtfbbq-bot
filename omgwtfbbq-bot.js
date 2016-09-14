//hai

if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('./lib/Botkit.js');
//var natural = require('natural');

var controller = Botkit.slackbot({
    debug: true
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();


//list for EVERYTHING, run message test through natural NLP to filter down to commands? or something? accept/deny/intent/request?
controller.hears('','ambient,direct_message,direct_mention,mention',function(bot,message) {
    var natural = require('natural'),
    this.classifier = new natural.BayesClassifier();
    this.classifier.load('corpus.json', null, function(err, classifier) {
    console.log(classifier.classify('long SUNW'));
    console.log(classifier.classify('short SUNW'));
    }.bind(this));    
        //bot.reply(message, classifier.classify(msg));
   
});
