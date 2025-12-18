function wordsTracker(arr) {
    let wordOccurences = {};

    let wordsToTrack = arr.shift().split(' ');
    for (let word of wordsToTrack) {
        wordOccurences[word] = 0;

    }
    
    for (let word of arr) {
        if (word in wordOccurences) {
            wordOccurences[word]++;
        }
    }
    let entries = Object.entries(wordOccurences).sort((a, b) => b[1] - a[1]);
    
    for (let [word, occurrences] of entries) {
        console.log(`${word} - ${occurrences}`);
    }

}
wordsTracker([ 'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
