//accept plants array as input
export const harvestPlants = (plantArray) => {
    //iterate the array of plants
    let seedObjects = []
    for (const plant of plantArray) {
        let i = 0
        if (plant.type === "Corn") {
            let cornOutput = plant.output / 2
            for (i; cornOutput > i; i++) {
                seedObjects.push(plant)
            }
        } else {
            for (i; plant.output > i; i++) {
                seedObjects.push(plant)
            }
            //get 'output' value
            //add 'output' value of the plantObjects to the arrray 
            //corn only half the output
            //return array of seed objects
        }
    }
    return seedObjects
}
/*
*/





/*
if (plant.type === "asparagus") {
    seedObjects.push(plant)
} else if (plant.type === "potato") {
    seedObjects.push(plant)
} else if (plant.type === "soybean") {
    seedObjects.push(plant)
} else if (plant.type === "sunflower") {
    seedObjects.push(plant)
} else if (plant.type === "wheat") {
    seedObjects.push(plant)
} else { plant.type === 'Corn') {
    
}
}*/