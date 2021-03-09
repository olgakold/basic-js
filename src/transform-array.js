const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if (Array.isArray(arr) === false){
    return null
  }
  else {
    var arr2 = arr.slice()    
    for (let i=0; i<arr2.length; i++){
      if (arr2[i] === '--discard-next'){   
        i === arr2.length-1 ? arr2.pop() : arr2.splice(arr2[i-1], 2)    
      }
      if (arr2[i] === '--discard-prev'){   
        i === 0 ? arr2.shift() : arr2.splice(arr2[i-2], 2)   
      }
      if (arr2[i] === '--double-next'){
        i === arr2.length-1 ? arr2.pop() : arr2[i] = arr2[i+1]
      }
      if (arr2[i] === '--double-prev'){
        i === 0 ? arr2.shift() : arr2[i] = arr2[i-1]    
      }
     
      
    }
  }
 return arr2
 };