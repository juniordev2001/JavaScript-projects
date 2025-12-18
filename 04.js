function solve(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };
    let personJson = JSON.stringify(person);
    console.log(personJson);
    
}
solve('George', 'Jones', 'Brown');