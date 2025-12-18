function solve(arr) {
    let messageCount = Number(arr.shift());
    let starPattern = /[star]/gi;
    let decryptedMessages = [];

    for (let currentMessage = 1; currentMessage <= messageCount; currentMessage++) {
        let encryptedMessage = arr.shift();
        let decryptedMessage = '';

        let starMatches = encryptedMessage.match(starPattern);
        let count = starMatches ? starMatches.length : 0;

        for (let char of encryptedMessage) {
            let originalAscii = char.charCodeAt();
            let newAscii = originalAscii - count;
            let newChar = String.fromCharCode(newAscii);
            decryptedMessage += newChar; 
        }

        decryptedMessages.push(decryptedMessage);

        
    }

    let planetPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let message of decryptedMessages) {
        let match = message.match(planetPattern);

        if (match) {
            let { name, attackType } = match.groups;
            
            if (attackType == 'A') {
                attackedPlanets.push(name);
            }
            else {
                destroyedPlanets.push(name);
            }
        }
    }
    
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);

    for (let planet of attackedPlanets) {
        console.log(`-> ${planet}`);
    }

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);

    for (let planet of destroyedPlanets) {
        console.log(`-> ${planet}`);
    }
    
    
}
solve(['2','STCDoghudd4=63333$D$0A53333','EHfsytsnhf?8555&I&2C9555SR']);