// dataToTrain array with sentences
const dataToTrain = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "The best way to predict the future is to invent it.",
    "Life is what happens when you're busy making other plans.",
    "The only thing we have to fear is fear itself.",
    "Do unto others as you would have them do unto you.",
    "You miss 100 percent of the shots you don't take.",
    "Actions speak louder than words."
    //Put your training data here...
];

function buildMarkovChain(data) {
    markovChain = {};
    data.forEach(sentence => {
        const tokens = sentence.split(' ');
        for (let i = 0; i < tokens.length - 1; i++) {
            const word = tokens[i];
            const nextWord = tokens[i + 1].replace(/[\.,?!]/g, ""); // Remove punctuation
            if (!markovChain[word]) {
                markovChain[word] = [];
            }
            markovChain[word].push(nextWord);
        }
    });
    return markovChain
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateText(dataToTrain, maxLength) {
    if (!Object.keys(markovChain).length) {
        buildMarkovChain(dataToTrain);
    }

    let currentWord = "" // Start with the first word of the prompt
    let result = [currentWord];

    for (let i = 0; i < maxLength; i++) { // Generate 50 words
        if (markovChain[currentWord]) {
            currentWord = getRandomElement(markovChain[currentWord]);
            result.push(currentWord);
        } else {
            // If currentWord has no transitions, pick a random starting word from the dataToTrain
            currentWord = getRandomElement(dataToTrain).split(' ')[0];
            result.push(currentWord);
        }
    }

    document.getElementById('output').textContent = result.join(' ');
}