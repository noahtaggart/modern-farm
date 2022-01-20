// define variable field initial value is empty array to store plants
let fieldArray = [ ]

//define and export function addPlant()
    //addPlant() accept seed object as input add seeds to field array
export const addPlant = (seedObject)  => {
    fieldArray.push(seedObject)
    return fieldArray
}
//define and export usePlants()
    //returns copy of the field array
export const usePlants = () => {
    return fieldArray.map(fieldArray => ({...fieldArray}))
}
