function solve(arr) {
    let pattern = /([|#])(?<name>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<kcals>\d+)\1/g;
    let str = arr.shift();
    let items = [];
    let totalKcals = 0;

    let matches = str.matchAll(pattern);

    for (let match of matches) {
        let { name, expDate, kcals } = match.groups;
        kcals = Number(kcals);

        items.push({name, expDate, kcals});
        totalKcals += kcals; 
    }

    let days = Math.floor(totalKcals / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    for (let item of items) {
        console.log(`Item: ${item.name}, Best before: ${item.expDate}, Nutrition: ${item.kcals}`);       
    }
    
}

solve([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ] );
