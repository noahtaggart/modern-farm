const createWheat = () => {
    const newSeed = {}
    newSeed.type = 'Wheat'
    newSeed.height = 24
    newSeed.output = 4
    return newSeed
}
let newWheat = createWheat()
console.log(newWheat)