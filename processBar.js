
const test = require('./testCase');
const unqiueValues = function unqiueValues(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index
    });
}

const superFunctional = function superFunctional(str) {
    let p = str.length;
    let d = (unqiueValues(str.split(''))).length;
    
    return BigInt(Math.pow(p, d) % (Math.pow(10,9)+ 7));
}

const subString = function subString(str, n)  
{ 

    let result = [];
    // Pick starting point 
    for (len = 1; len <= n; len++)  
    {  
          
        // Pick ending point 
        for (let i = 0; i <= n - len; i++)  
        { 
              
            // Print characters from current 
            // starting point to current ending 
            // point.  
            let j = i + len - 1;          
            res = '';
            for (let k = i; k <= j; k++)  
                res +=(str[k]); 
            result.push(res);
        } 
    } 
    return result;
} 




function superFunctionalStrings(s) {
    /*
     * Write your code here.
     */
    let result = unqiueValues((subString(s, s.length)));
    

    let sum = 0;
    // console.log(result.length);
    for (let item of result) {
        sum += superFunctional(item);
    }
    return sum;

}

console.log(subString(test.test[0],test.test[0].length))
// console.log(superFunctionalStrings(test.test[0]));