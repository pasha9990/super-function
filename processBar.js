const unqiueValues = function unqiueValues(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index
    });
}

const superFunctionalStrings = function superFunctionalStrings(str) {
    let p = str.length;
    let d = (unqiueValues(str.split(''))).length;
    
    return Math.pow(p, d) % (Math.pow(10,9)+ 7);
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

let str = 'abc';
let result = unqiueValues((subString(str,str.length)));


console.log(result);
let sum = 0;

for (let item of result) {
    sum +=superFunctionalStrings(item);

}


console.log(sum);