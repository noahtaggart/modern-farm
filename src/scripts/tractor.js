//define and export plantSeeds()

import { usePlants, addPlant } from "./field.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"
//must use plan[innerPlan[]] as a parameter
export const plantSeeds = (currentPlanArray) => {
    for (const planArray of currentPlanArray) {
        for (const plan of planArray) {
            if (plan === 'Asparagus') {
                const newAsparagus = createAsparagus()
                addPlant(newAsparagus)
            } else if (plan === 'Corn') {
                const newCorn = createCorn()
                addPlant(newCorn[0])
                addPlant(newCorn[1])
                //addPlant(newCorn)
            } else if (plan === 'Potato') {
                const newPotato = createPotato()
                addPlant(newPotato)
            } else if (plan === 'Soybean') {
                const newSoybean = createSoybean()
                addPlant(newSoybean)
            } else if (plan === 'Sunflower') {
                const newSunflower = createSunflower()
                addPlant(newSunflower)
            } else if (plan === 'Wheat') {
                const newWheat = createWheat()
                addPlant(newWheat)
            }
        }
    } return usePlants()

}

//if object of array is seed invoke the appropriate function
    //push object to field array


