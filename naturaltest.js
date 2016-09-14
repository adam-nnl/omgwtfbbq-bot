var natural = require('natural'),
    classifier = new natural.BayesClassifier();

natural.BayesClassifier.load('corpus.json', null, function(err, classifier) {
	console.log(classifier.classify('did the tests pass?'));
    });
