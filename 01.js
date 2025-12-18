function solve(arr) {
    let pattern = />>(?<name>[A-Z][A-Za-z]*)<<(?<price>\d+(\.\d+)?)!(?<qty>\d+)/;
    let furniture = [];
    let totalPrice = 0;

    let command = arr.shift();
    
    while (command !== 'Purchase') {
        let match = command.match(pattern);
        if (match) {
            let {name, price, qty} = match.groups;
            furniture.push(name);
            totalPrice += Number(price) * Number(qty);
        }

        command = arr.shift();
    }
    console.log('Bought furniture:');

    if (furniture.length > 0) {
        furniture.forEach(f => console.log(f));
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`)
    
}
solve(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase']);