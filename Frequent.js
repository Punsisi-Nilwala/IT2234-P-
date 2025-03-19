//[4,8,3,4,3,2,1,8,4]
//Find the most frequent element in the array

let arr = [4, 8, 3, 4, 3, 2, 1, 8, 4];

function findMostFrequentElement(array) {
    let frequencyMap = {};
    let maxCount = 0;
    let mostFrequentElement;

    for (let num of array) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            mostFrequentElement = num;
        }
    }
    return mostFrequentElement;
}

let mostFrequent = findMostFrequentElement(arr);
console.log("Most Frequent Element:", mostFrequent);