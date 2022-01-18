//define and export plantSeeds()
    //must use plan[innerPlan[]] as a parameter
export const plantSeeds = (currentPlanArray) => {
    for (let i=0; i< currentPlanArray.length; i++) {
        let innerArrayLength = currentPlanArray[i].length;
        for (let j=0; j < innerArrayLength; j++) {
            if (innerArrayLength.type === 'Asparagus') {
                const newAsparagus = createAsparagus()
                currentPlanArray.push(newAsparagus)
            } else if (innerArrayLength.type === 'Corn') {
                const newCorn = createCorn()
                currentPlanArray.push(newCorn)
            } else if (innerArrayLength.type === 'Potato') {
                const newPotato = createPotato()
                currentPlanArray.push(newPotato)
            } else if (innerArrayLength.type === 'Soybean') {
                const newSoybean = createSoybean()
                currentPlanArray.push(newSoybean)
            } else if (innerArrayLength.type === 'Sunflower') {
                const newSunflower = createSunflower()
                currentPlanArray.push(newSunflower)
            } else if (innerArrayLength.type === 'Wheat') {
                const newWheat = createWheat()
                currentPlanArray.push(newWheat)
            }
        }
    }return currentPlanArray

}

//if object of array is seed invoke the appropriate function
    //push object to field array


