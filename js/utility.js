
// Utility functions

export function getRandomInt(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

export function getRandomColor(colorsArray){
    return colorsArray[Math.floor(Math.random() * colorsArray.length)];
}
 