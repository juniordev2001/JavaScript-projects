function solve(data) {
    let addressBook = {};

    for (let entry of data) {
        let parsedData = entry.split(':');

        [fullName, address] = parsedData;

        addressBook[fullName]= address;
    }
    let addressBookEntries = Object.entries(addressBook);
    addressBookEntries.sort((first, second) => {
        let firstKey = first[0];
        let secondKey = second[0];

        return firstKey.localeCompare(secondKey);
    });
        for (let [fullName, address]  of addressBookEntries) {
            console.log(`${fullName} -> ${address}`);
            
        }
}
solve(['Bob:Huxley Rd', 'John:Milwaukee Crossing', 'Peter:Fordem Ave', 'Bob:Redwing Ave', 'George:Mesta Crossing', 'Ted:Gateway Way', 'Bill:Gateway Way', 'John:Grover Rd', 'Peter:Huxley Rd', 'Jeff:Gateway Way', 'Jeff:Huxley Rd']);