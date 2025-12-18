function legendaryFarming(str) {
    let keyMaterialQtys =  {
        shards: 0,
        fragments: 0,
        motes: 0
    };

    let junkMaterialQtys = {};
    let materialLegendaries = {
        shards: 'Shadowmourne',
        fragments: 'Valanyr',
        motes: 'Dragonwrath' 
    };
    
    let arr = str.split(' ');
    let obtained = false;

    for (let i = 0; i < arr.length; i += 2) {
        let qty = Number(arr[i]);
        let material = arr[i + 1].toLowerCase();

        if (material in keyMaterialQtys) {
            keyMaterialQtys[material] += qty;

            if (keyMaterialQtys[material] >= 250) {
                let legendaryBought = materialLegendaries[material]; 
                console.log(`${legendaryBought} obtained!`);
                keyMaterialQtys[material] -= 250;
                obtained = true;
                break;
            }

        } else {
            // Това е junk материал
            if (junkMaterialQtys[material]) {
                junkMaterialQtys[material] += qty;
            } else {
                junkMaterialQtys[material] = qty;
            }
        }
    }

    let keyEntries = Object.entries(keyMaterialQtys)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    
    for (let [material, qty] of keyEntries) {
        console.log(`${material}: ${qty}`);
    }
    
    let junkEntries = Object.entries(junkMaterialQtys)
        .sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let [material, qty] of junkEntries) {
        console.log(`${material}: ${qty}`);
    }
}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
