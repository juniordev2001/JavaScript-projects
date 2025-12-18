function solve(arr) {
    let message = arr.shift();
    let command = arr.shift();

    while (command !== 'Decode') {
        let tokens = command.split('|');
        let action = tokens.shift();

        if (action == 'Move') {
            let lettersToMove = Number(tokens.shift());

            let substring = message.substring(0, lettersToMove);
            message = message.replace(substring, '');

            message += substring;
        }
        else if (action == 'Insert') {
            let index = Number(tokens.shift());
            let val = tokens.shift();

            message = message.substring(0, index) + val + message.substring(index);
        }
        else if (action == 'ChangeAll') {
            let [substring, replacement] = tokens;
            while (message.includes(substring)) {
                message = message.replace(substring, replacement);
            }
        }

        command = arr.shift();
    }
    console.log(`The decrypted message is: ${message}`);
    
}
solve(['owyouh','Move|2','Move|3','Insert|3|are', 'Insert|9|?', 'Decode']);