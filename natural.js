var natural = require('natural');

// Tokenization
var tokenizer = new natural.WordTokenizer();
var ex = "Hola! mi nombre es michel. ¿Cuál es tu nombre?";
console.log(tokenizer.tokenize(ex));
console.log(ex.split(" "));

var regTokenizer = new natural.RegexpTokenizer({ pattern: /\-/ });
console.log(regTokenizer.tokenize("Hola, mi contraseña es: a-b-c-d-e"));

//Sentiment Analysis
var sentiment = require('natural').SentimentAnalyzer;
var stemmer = require('natural').PorterStemmer;
// Stemming 
console.log('Stemming');
var analyzer = new sentiment('English', stemmer, 'afinn');
console.log(analyzer.getSentiment(["I", "like", "Javascript", "and", "Julia", "Python"]));
console.log(analyzer.getSentiment(["I", "hate", "Javascript", "and", "Julia", "Python"]));


var datos = ["He likes chocolate", "He hates eggs", "The girl was angry at the driver", "The movie was funny"];
datos.forEach(item => {
    console.log(analyzer.getSentiment(tokenizer.tokenize(item)));
})

// Naive Bayes Classifier

var classifierBayesNaive = new natural.BayesClassifier();


//Training data

classifierBayesNaive.addDocument('Comida vegana', 'Restaurante vegano');
classifierBayesNaive.addDocument('Comida vegetariana', 'Restaurante vegano');
classifierBayesNaive.addDocument('Ensalada de frutas', 'Restaurante vegano');
classifierBayesNaive.addDocument('Sin carne', 'Restaurante Vegano');
classifierBayesNaive.addDocument('Con carne', 'Restaurante no vegano');
classifierBayesNaive.addDocument('comida rápida', 'Lugares de comida rápida');
classifierBayesNaive.addDocument('sin gluten', 'Restaurante vegano');
classifierBayesNaive.addDocument('Helados', 'Restaurantes con helado');
classifierBayesNaive.addDocument('Dulces', 'Dulcerías');
classifierBayesNaive.addDocument('Comida mexicana', 'Restaurantes mexicanos');
classifierBayesNaive.addDocument('Té', 'Restaurante vegano');


//train
classifierBayesNaive.train();


//Apply/Predict
console.log(classifierBayesNaive.classify("Con carne"));

