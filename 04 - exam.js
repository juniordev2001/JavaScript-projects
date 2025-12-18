function solve(arr) {
    let piecesData = {};
    
    let piecesCount = Number(arr.shift());

    for (let currentPiece = 1; currentPiece <= piecesCount; currentPiece++) {
        let pieceStr = arr.shift();
        let [piece, composer, key] = pieceStr.split('|');
        
        piecesData[piece] = { composer, key };
    }
    
    let command = arr.shift();

    while (command !== 'Stop') {
        let tokens = command.split('|');
        let action = tokens.shift();
        let piece = tokens.shift();
        
        if (action == 'Add') {
            let [composer, key] = tokens;

            if (piece in piecesData) {
                console.log(`${piece} is already in the collection!`);
            }
            else {
                piecesData[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            }
        }
        else if (action == 'Remove') {
            if (piece in piecesData) {
            console.log(`Successfully removed ${piece}!`);
            delete piecesData[piece];
        }
        else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
        else if (action == 'ChangeKey') {
            let newKey = tokens.shift();

            if (piece in piecesData) {
                piecesData[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }
            else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        command = arr.shift();
    }
    let entries = Object.entries(piecesData);

    for (let [pieceName, pieceInfo] of entries) {
        console.log(`${pieceName} -> Composer: ${pieceInfo.composer}, Key: ${pieceInfo.key}`);
    }
}
solve(['3', 'Fur Elise|Beethoven|A Minor', 'Moonlight Sonata|Beethoven|C# Minor', 'Clair de Lune|Debussy|C# Minor', 'Add|Sonata No.2|Chopin|B Minor', 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 'Add|Fur Elise|Beethoven|C# Minor', 'Remove|Clair de Lune', 'ChangeKey|Moonlight Sonata|C# Major', 'Stop']);