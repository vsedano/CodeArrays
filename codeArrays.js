let inputArray = [2, [3, ['a', [6.23, 4], -9, 1, 0]]];

const validateArray = (arr) => {
    return Array.isArray(arr)
}

const validateItem = (item) => {
    if(validateArray(item)){
        return 'array';
    }
    if(typeof item === 'number' && item - Math.floor(item) === 0){
        return 'integer';
    }
    return 'invalid';
}

function convertArray (arr){
    let newArray = [];
    const iterateArray = (inputArray) =>{
        for(let item of inputArray){
            var typeItem = validateItem(item);
            if(typeItem === 'integer'){
                newArray.push(item)
            }
            if(typeItem === 'array'){
                iterateArray(item)
            }
            if(typeItem === 'invalid'){
                console.log(`The argument ${item} is invalid`);
            }
        }
    }

    if(validateArray(arr)){
        iterateArray(arr);
        if(newArray.length > 0){
            return newArray
        }
        return 'Error: Invalid arguments';
    }
    return 'Error: The argument must be an array';
}



console.log(convertArray(inputArray));

module.exports = {
    validateItem,
    convertArray
}