//this passes all but last test. Cant figure out how to check for same type ie: ===
const removeFromArray = function(arr, other) {
    let forDeletion = []
    let list = arr
    //Extract all arguments from function call and add to forDeletion array
    for (let i = 1; i < arguments.length; i++) { 
        forDeletion += arguments[i]
    }
    //make new array copying over anything not on the forDeletion array
    list = list.filter(item => !forDeletion.includes(item))
    console.log(list)
    return list
};

// Do not edit below this line
module.exports = removeFromArray;
