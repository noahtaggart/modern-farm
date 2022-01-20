console.log("Welcome to the main module")

import { createPlan } from "./plan.js" 

const yearlyPlan = createPlan()

import { plantSeeds } from './tractor.js'

const plantsArray = plantSeeds(yearlyPlan)
//console.log(plantsArray)
import { harvestPlants } from './harvester.js'

export const harvestedPlants = harvestPlants(plantsArray)

import { catalog } from "./catalog.js"

const catalogHTML = catalog(harvestedPlants)
//console.log(catalogHTML)

//document.querySelector(".container").innerHTML += catalogHTML


