const http = require('http');
const axios = require('axios');



const _searchArray = function _searchArray(arr, value) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value)
            result.push(i);
    }
    return result;
}

const _check = function _check(arr) {
    let count = 0;
    let swap = [];
    let notSort = true;
    while (notSort) {
        notSort = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                count++;
                swap.push([i + 1, i + 2]);
                notSort = true;
            }
        }
    }

    return {
        isSort: count === 0 ? true : false,
        count: count,
        swap: swap
    }

}


const _checkReverse = function _checkReverse(arr) {
    //[1, 1, 10, 9, 8, 7, 6, 12, 13]
    //[1, 5, 4, 3, 2, 6]
    let mid = Math.floor(arr.length / 2);
    let i = mid;
    let j = mid;
    for (i, j; i < arr.length && j > 0;) {
        // arr[i + 1] = arr[i + 1] ? arr[i + 1] : arr[i];
        // arr[j - 1] = arr[j - 1] ? arr[j - 1] : arr[j];
        console.log(i,j,mid);
        if (arr[i] < arr[i + 1] && arr[j] > arr[j - 1]) 
            break;
        
        if (arr[i] >= arr[i + 1])
            i++;
        if (arr[j] <= arr[j - 1])
            j--;

    }
    if (i === j || Math.abs(i - j) === 1)
        return 'no';
    return 'yes\nreverse ' + [j + 1, i + 1].join(' ');

}


const minimumSwaps = function minimumSwaps(arr) {
    var arrLength = arr.length;

    // create two new Arrays 
    // one record value and key separately
    // second to keep visited node count (default set false to all)

    var newArr = [];
    var newArrVisited = [];
    for (let i = 0; i < arrLength; i++) {
        newArr[i] = [];
        newArr[i].value = arr[i];
        newArr[i].key = i;
        newArrVisited[i] = false;
    }

    // sort new array by value

    newArr.sort(function (a, b) {
        return a.value - b.value;
    })


    var swp = 0;
    for (let i = 0; i < arrLength; i++) {

        // check if already visited or swapped
        if (newArr[i].key == i || newArrVisited[i]) {
            continue;
        }

        var cycle = 0;
        var j = i;
        while (!newArrVisited[j]) {

            // mark as visited
            newArrVisited[j] = true;
            j = newArr[j].key; //assign next key
            cycle++;
        }
        if (cycle > 0) {
            swp += (cycle > 1) ? cycle - 1 : cycle;
        }

    }

    return newArrVisited;
}
// let arr = [4104, 8529, 49984, 54956, 63034, 82534, 84473, 86411, 92941, 95929, 108831, 894947, 125082, 137123, 137276, 142534, 149840, 154703, 174744, 180537, 207563, 221088, 223069, 231982, 249517, 252211, 255192, 260283, 261543, 262406, 270616, 274600, 274709, 283838, 289532, 295589, 310856, 314991, 322201, 339198, 343271, 383392, 385869, 389367, 403468, 441925, 444543, 454300, 455366, 469896, 478627, 479055, 484516, 499114, 512738, 543943, 552836, 560153, 578730, 579688, 591631, 594436, 606033, 613146, 621500, 627475, 631582, 643754, 658309, 666435, 667186, 671190, 674741, 685292, 702340, 705383, 722375, 722776, 726812, 748441, 790023, 795574, 797416, 813164, 813248, 827778, 839998, 843708, 851728, 857147, 860454, 861956, 864994, 868755, 116375, 911042, 912634, 914500, 920825, 979477]
let arr = [3,1,2]
let minSwap = minimumSwaps(Array.from(arr).sort());

console.log(_checkReverse(arr));
return;


let swap = _searchArray(minSwap, true);

if (swap.length === 0)
    console.log('yes');
else {

    if (swap.length === 2) {
        console.log(`swap ${swap[0] + 1} ${swap[1] + 1}`);
    }
    else {
        console.log(arr);
        console.log(_checkReverse(arr));
    }

}








