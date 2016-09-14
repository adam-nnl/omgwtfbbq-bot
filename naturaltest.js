var natural = require('natural'),
    classifier = new natural.BayesClassifier();

natural.BayesClassifier.load('corpus.json', null, function(err, this.classifier) {
	console.log(this.classifier.classify('did the tests pass?'));
    });
