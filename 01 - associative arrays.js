function solve(data) {
    let phoneBook = {};

    for (let entry of data) {
        let parsedData = entry.split(' ');
        [fullName, phoneNumber] =  parsedData;

        phoneBook[fullName] = phoneNumber;
    }
    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
        
    }
}
solve(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);