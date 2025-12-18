function solve(catDataArr) {
    class Cat { 
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            return `${this.name}, age ${this.age} says Meow`; 
        }
    }

    for (let catData of catDataArr) {
        let parsedData = catData.split(' ');

        let catName = parsedData[0];
        let catAge  = parsedData[1];

        let cat = new Cat(catName, catAge);
        console.log(cat.meow());
        
    }

}
solve(['Mellow 2', 'Tom 5']);