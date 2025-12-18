function solve(input) {
    let map = new Map();

    for (let data of input) {
        let [name, ...grades] = data.split(' ');
        
        grades = grades.map(Number);

        if (map.has(name)) {
            let currentGrades = map.get(name);

            currentGrades = currentGrades.concat(grades);

            map.set(name, currentGrades);
        }
        else {
            map.set(name, grades)
        }
    }
    
        let avgGrades = new Map();

    for (let [name, grades] of map) {
        let sum = 0;
        
        for (let grade of grades) {
            sum += grade;
        }
        let average = sum / grades.length;
        avgGrades.set(name, average.toFixed(2));
    }

    let sortedResult = Array.from(avgGrades)
    .sort((a, b) => a[0].localeCompare(b[0]));

    for (let[name, avgGrades] of sortedResult) {
        console.log(`${name}: ${avgGrades}`);  
        
    }
}
solve(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);