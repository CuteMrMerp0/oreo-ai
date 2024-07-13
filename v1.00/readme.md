# Welcome!
If you don't know what to do, just open index.html. It should explain it's self.

Oreo AI is a locally-powered AI system that uses Markov chains to see how words fit with each other. Look in "how-it-works" to see how it works.

## API (beta)
In the "api" folder, you can add the Javascript file to your website to use it.

### Methods:

### generateText

Syntax:
```
generateText(dataToTrain, maxLength)
```
Parameters:

```
dataToTrain: An array to train the AI on.
Example:
[
    "The quick brown fox jumps over the lazy dog",
    "Add more sentences here"
]
```

```
maxLength: The maximum amount of words that can be generated
Example:
50
//50 is the default value
```


### buildMarkovChain

Syntax:
```
x = buildMarkovChain(data)
```
Parameters:
```
data: The string to make a chain out of. Automatically gets split into words.
Example:

```
Returns:
```
An object with the chain
```