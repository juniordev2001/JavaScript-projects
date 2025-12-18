function solve(arr) {
    let citiesData = {};

    let command = arr.shift();

    while (command !== 'Sail') {
        let [city, population, gold] = command.split('||');
        population = Number(population);
        gold = Number(gold);

        if (city in citiesData) {
            citiesData[city].population += population;
            citiesData[city].gold += gold;
        }

        else {
            citiesData[city] = { population, gold };
        }


        command = arr.shift();
    }
    
    command = arr.shift();

    while (command !== 'End') {
        let tokens = command.split('=>');
        let action = tokens.shift();
        let city = tokens.shift();

        if (action == 'Plunder') {
    let people = Number(tokens.shift());
    let gold = Number(tokens.shift());
    citiesData[city].population -= people;
    citiesData[city].gold -= gold;

    console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

    if (citiesData[city].population == 0 || citiesData[city].gold == 0) {
        console.log(`${city} has been wiped off the map!`);
        delete citiesData[city];
    }
}

        else if(action == 'Prosper') {
            let gold = Number(tokens.shift());

            if (gold < 0 ) {
                console.log('Gold added cannot be a negative number!')
            }
            else {
            citiesData[city].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${city} now has ${citiesData[city].gold} gold.`)
            }


        }
    command = arr.shift();
        }


    let entries = Object.entries(citiesData);
    if (entries.length > 0) {
    console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);


    for (let [cityName, cityStats] of entries) {
        console.log(`${cityName} -> Population: ${cityStats.population} citizens, Gold: ${cityStats.gold} kg`)
    }

    }
    else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

solve((["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"]));