function parkingLot(arr) {
    let parkedCars = new Set();
    
    for (let command of arr) {
        let [direction, carNumber] = command.split(', ');

         if (direction == 'IN') {
            parkedCars.add(carNumber);
         }
         else {
            parkedCars.delete(carNumber);
         }
    }

    let carsArr = Array.from(parkedCars).sort((a, b) => a.localeCompare(b));
        if (carsArr.length == 0) {
            console.log('Parking Lot is Empty!');
        }
        else {
            console.log(carsArr.join('\n'));
        }
}
parkingLot(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);