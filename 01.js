function createPerson (firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age
    };

}
let person = createPerson('Ivan', 'Ivanov', '30');
console.log(person.age);

createPerson('Peter','Pan', '20');