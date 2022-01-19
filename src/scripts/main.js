console.log("Welcome to the main module")

import { createPlan } from "./plan.js" 

const yearlyPlan = createPlan()

import { createAsparagus } from "./seeds/asparagus.js"
const newAsparagus = createAsparagus()

import { createCorn } from './seeds/corn.js'
const newCorn = createCorn()

import { createPotato } from './seeds/potato.js'
const newPotato = createPotato()

import { createSoybean } from './seeds/soybean.js'
const newSoybean = createSoybean()

import { createSunflower } from './seeds/sunflower.js'
const newSunflower = createSunflower()

import { createWheat } from './seeds/wheat.js'
const newWheat = createWheat()

import { plantSeeds } from './tractor.js'

const plantsArray = plantSeeds(yearlyPlan)
//console.log(plantsArray)
import { harvestPlants } from './harvester.js'

export const harvestedPlants = harvestPlants(plantsArray)

import { catalog } from "./catalog.js"

const catalogHTML = catalog(harvestedPlants)
//console.log(catalogHTML)

document.querySelector(".container").innerHTML += catalogHTML


