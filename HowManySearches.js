/*Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.

Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.*/

function binarySearch (array, num, start, end){
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;
    let searchItem

    if (start > end) {
        return -1;
    }
    const index = Math.floor((start + end) / 2);
    const item = array[index];

    if(item === num){
        console.log(item)
        return index;
    }
    else if(item < num){
        console.log(item)
        return binarySearch(array, num, index + 1, end);
    }
    else if (item > num){
        console.log(item)
        return binarySearch(array, num, start, index -1);
    }

}

console.log(binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8))//12, 6, 8 (3 searches)
console.log(binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16))//12, 17, 14, 15, -1 (5 searches)