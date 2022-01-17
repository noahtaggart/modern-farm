// define variable field initial value is empty array to store plants
const newField = [ ]

//define and export function addPlant()
    //addPlant() accept seed object as input add seeds to field array
export const addPlant = (seedObject, fieldArray)  => {
    fieldArray.push(seedObject)
    return fieldArray
}
//define and export usePlants()
    //returns copy of the field array
export const usePlants = (fieldArray) => {
    return fieldArray
}
