const unqiueValues = function unqiueValues(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index
    });
}

const superFunctionalStrings = function superFunctionalStrings(str) {
    let p = str.length;
    let d = (unqiueValues(str.split(''))).length;
    return Math.pow(p, d) % ((Math.pow(10, 0)) + 7);
}

var tree = function tree(leafs) {
    var branches = [];
    if (leafs.length == 1) return leafs;
    for (var k in leafs) {
        var leaf = leafs[k];
        tree(leafs.join('').replace(leaf, '').split('')).concat("").map(function (subtree) {
            branches.push([leaf].concat(subtree));
        });
    }
    return branches;
};

let str = 'aba';

let result = tree(str.split('')).map(function (str) {
    return str.join('');
});


result = unqiueValues(result);
console.log(result);
let sum = 0;
for (let item of result) {
    sum +=superFunctionalStrings(item);

}

console.log(sum);
// let result = [];
// for(let i = str.length ; i > 0 ; i--){ 
    // result.push(_generateString(chars,'',2));
// }
// console.log(result);