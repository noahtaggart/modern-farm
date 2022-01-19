export const catalog = (harvestedArray) => {
    let htmlString = `<article class='container'>`
    for (const food of harvestedArray) {
        htmlString += `<section class='plant'>${food.type}</section>`
    }
    
    htmlString += `</article>`
    return htmlString

}
