//accept plants array as input
export const harvestPlants = (plantArray) => {
    //iterate the array of plants
    let seedObjects = []
    for (const plant of plantArray) {
        let i = 0
        if (Array.isArray(plant)) {
            for (i; plant[0].output > i; i++) {
                seedObjects.push(plant[0])
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
