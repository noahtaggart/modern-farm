console.log("Welcome to the main module")

import { createPlan } from "/mnt/c/Users/noaht/workspace/modern-farm/src/scripts/plan.js" 

const yearlyPlan = createPlan()

import { createAsparagus } from "/mnt/c/Users/noaht/workspace/modern-farm/src/scripts/seeds/asparagus.js"
const newAsparagus = createAsparagus()

import { createCorn } from '/mnt/c/Users/noaht/workspace/modern-farm/src/scripts/seeds/corn.js'
const newCorn = createCorn()

import { createPotato } from '/mnt/c/Users/noaht/workspace/modern-farm/src/scripts/seeds/potato.js'
const newPotato = createPotato()

import { createSoybean } from '/mnt/c/Users/noaht/workspace/modern-farm/src/scripts/seeds/soybean.js'
const newSoybean = createSoybean()

import { createSunflower } from '/mnt/c/Users/noaht/workspace/modern-farm/src/scripts//seeds/sunflower.js'
const newSunflower = createSunflower()

import { createWheat } from '/mnt/c/Users/noaht/workspace/modern-farm/src/scripts/seeds/wheat.js'
const newWheat = createWheat()

import { plantSeeds } from './tractor.js'

const plantsArray = plantSeeds(yearlyPlan)
console.log(plantsArray)

