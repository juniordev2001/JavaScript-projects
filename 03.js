function solve(arr) {
    let totalIncome = 0;
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+(\.\d+)?)\$/;
    
    let command = arr.shift();

    while (command !== 'end of shift') {
        let match = command.match(pattern);

        if (match) {
            let { name, product, count, price } = match.groups;
            let totalPrice = Number(count) * Number(price);

            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
            totalIncome += totalPrice;
        }

        command = arr.shift();
    }
    
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
    
}
solve(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift']);