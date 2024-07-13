# Welcome!
Oreo AI is a locally-powered AI system made in Javascript.
To try it, just open "index.html".

---

## Warning!
If you just open the HTML file, the sample texts won't load. You can copy + paste them from the text file.

## How it works
Look in the "how-it-works" folder for a visual guide to how this works.

## API (beta)
The API *may not work!!!*
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
