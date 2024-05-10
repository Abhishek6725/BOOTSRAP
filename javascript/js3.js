function combineArrays(array1, array2) {
    return array1.concat(array2);
}

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [7, 8, 9, 10, 11, 12];

const combinedArray = combineArrays(array1, array2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

//
function removeLastElement(array) {
    array.pop();
    return array;
}

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [7, 8, 9, 10, 11, 12];

const combinedArray = combineArrays(array1, array2);
console.log("Combined Array:", combinedArray);

removeLastElement(combinedArray);
console.log("Combined Array after removing last element:", combinedArray);
//
function findIndex(array, element) {
    return array.indexOf(element);
}

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [7, 8, 9, 10, 11, 12];

const combinedArray = combineArrays(array1, array2);
console.log("Combined Array:", combinedArray);

const elementToFind = 9;
const index = findIndex(combinedArray, elementToFind);
if (index !== -1) {
    console.log(`Index of ${elementToFind} in combined array:`, index);
} else {
    console.log(`${elementToFind} not found in combined array.`);
}
